
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import { WindowTitlebar } from "./features/window/WindowTitlebar.tsx";
  import "./shared/styles/index.css";

  createRoot(document.getElementById("root")!).render(
    <div className="h-screen overflow-hidden">
      <WindowTitlebar />
      <div className="h-[calc(100vh-32px)] overflow-hidden">
        <App />
      </div>
    </div>
  );
  
