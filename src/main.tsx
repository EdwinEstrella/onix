
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import { WindowTitlebar } from "./features/window/WindowTitlebar.tsx";
  import { AuthProvider } from "./shared/backend/AuthProvider.tsx";
  import "./shared/styles/index.css";

  createRoot(document.getElementById("root")!).render(
    <AuthProvider>
      <div className="h-screen overflow-hidden">
        <WindowTitlebar />
        <div className="h-[calc(100vh-32px)] overflow-hidden">
          <App />
        </div>
      </div>
    </AuthProvider>
  );
  
