export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      tenants: {
        Row: {
          id: string;
          name: string;
          legal_name: string;
          tax_id: string;
          plan_id: string;
          status: "active" | "implementation" | "paused";
          default_branch_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          legal_name: string;
          tax_id: string;
          plan_id: string;
          status?: "active" | "implementation" | "paused";
          default_branch_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["tenants"]["Insert"]>;
      };
      users: {
        Row: {
          id: string;
          auth_user_id: string;
          tenant_id: string;
          full_name: string;
          email: string;
          status: "active" | "pending" | "suspended";
          default_branch_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          auth_user_id: string;
          tenant_id: string;
          full_name: string;
          email: string;
          status?: "active" | "pending" | "suspended";
          default_branch_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["users"]["Insert"]>;
      };
      branches: {
        Row: {
          id: string;
          tenant_id: string;
          name: string;
          code: string;
          city: string;
          address: string;
          status: "active" | "inactive";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          tenant_id: string;
          name: string;
          code: string;
          city: string;
          address: string;
          status?: "active" | "inactive";
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["branches"]["Insert"]>;
      };
      payments: {
        Row: {
          id: string;
          tenant_id: string;
          branch_id: string;
          invoice_id: string;
          amount: number;
          method: "cash" | "card" | "transfer" | "insurance";
          status: "completed" | "pending" | "failed" | "refunded";
          paid_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          tenant_id: string;
          branch_id: string;
          invoice_id: string;
          amount: number;
          method: "cash" | "card" | "transfer" | "insurance";
          status?: "completed" | "pending" | "failed" | "refunded";
          paid_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["payments"]["Insert"]>;
      };
    };
    Views: {
      financial_summary: {
        Row: {
          tenant_id: string;
          total_income: number;
          estimated_expenses: number;
          net_profit: number;
          margin: number;
        };
      };
    };
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
