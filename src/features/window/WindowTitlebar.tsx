import { useEffect, useState } from "react";

declare global {
  interface Window {
    electronAPI?: {
      minimize: () => void;
      maximize: () => void;
      close: () => void;
      onWindowMaximized: (callback: (isMaximized: boolean) => void) => void;
    };
  }
}

export function WindowTitlebar() {
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    window.electronAPI?.onWindowMaximized(setIsMaximized);
  }, []);

  return (
    <div className="window-titlebar">
      <span>Hello World!</span>
      <div className="window-controls">
        <button type="button" aria-label="Minimize" onClick={() => window.electronAPI?.minimize()}>
          <svg width="12" height="12" viewBox="0 0 12 12">
            <rect x="1" y="5" width="10" height="1" fill="currentColor" />
          </svg>
        </button>
        <button type="button" aria-label={isMaximized ? "Restore" : "Maximize"} onClick={() => window.electronAPI?.maximize()}>
          {!isMaximized ? (
            <svg width="12" height="12" viewBox="0 0 12 12">
              <rect x="1" y="1" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12">
              <rect x="1" y="3" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1" />
              <polyline points="3 3 3 1 11 1 11 9" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          )}
        </button>
        <button type="button" className="close" aria-label="Close" onClick={() => window.electronAPI?.close()}>
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1" />
          </svg>
        </button>
      </div>
    </div>
  );
}
