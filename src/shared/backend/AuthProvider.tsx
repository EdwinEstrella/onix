import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { getSupabaseClient, isSupabaseConfigured } from "./supabase";
import type { Database } from "./database.types";

type AppUser = Database["public"]["Tables"]["users"]["Row"];

type AuthContextValue = {
  isConfigured: boolean;
  isLoading: boolean;
  session: Session | null;
  authUser: User | null;
  appUser: AppUser | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
  refreshAppUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

async function loadAppUser(authUserId: string) {
  const { data, error } = await getSupabaseClient()
    .from("users")
    .select("*")
    .eq("auth_user_id", authUserId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);
  const [appUser, setAppUser] = useState<AppUser | null>(null);
  const isConfigured = isSupabaseConfigured();

  const refreshAppUser = async () => {
    const authUserId = session?.user.id;
    setAppUser(authUserId ? await loadAppUser(authUserId) : null);
  };

  useEffect(() => {
    if (!isConfigured) {
      setIsLoading(false);
      return;
    }

    const supabase = getSupabaseClient();
    let isMounted = true;

    supabase.auth.getSession().then(async ({ data, error }) => {
      if (!isMounted) return;

      if (error) {
        setSession(null);
        setAppUser(null);
        setIsLoading(false);
        return;
      }

      setSession(data.session);
      if (data.session?.user.id) {
        try {
          setAppUser(await loadAppUser(data.session.user.id));
        } catch {
          setAppUser(null);
        }
      }
      setIsLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      if (!nextSession?.user.id) {
        setAppUser(null);
        return;
      }

      loadAppUser(nextSession.user.id)
        .then(setAppUser)
        .catch(() => setAppUser(null));
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [isConfigured]);

  const value = useMemo<AuthContextValue>(
    () => ({
      isConfigured,
      isLoading,
      session,
      authUser: session?.user ?? null,
      appUser,
      refreshAppUser,
      async signIn(email, password) {
        const { data, error } = await getSupabaseClient().auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          throw error;
        }

        setSession(data.session);
        setAppUser(data.user ? await loadAppUser(data.user.id) : null);
      },
      async signUp(email, password, fullName) {
        const { data, error } = await getSupabaseClient().auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
          },
        });

        if (error) {
          throw error;
        }

        setSession(data.session);
        if (data.user?.id && data.session) {
          try {
            setAppUser(await loadAppUser(data.user.id));
          } catch {
            setAppUser(null);
          }
        } else {
          setAppUser(null);
        }
      },
      async signOut() {
        const { error } = await getSupabaseClient().auth.signOut();
        if (error) {
          throw error;
        }

        setSession(null);
        setAppUser(null);
      },
    }),
    [appUser, isConfigured, isLoading, session],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }

  return value;
}
