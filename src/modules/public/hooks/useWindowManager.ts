import { createContext, useContext, useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { desktopApps } from '../types/os';
import type { WindowState } from '../types/os';

interface WindowManagerContextValue {
  windows: WindowState[];
  activeWindowId: string | null;
  openApp: (appId: string) => void;
  closeWindow: (appId: string) => void;
  toggleMinimize: (appId: string) => void;
}

export const WindowManagerContext = createContext<WindowManagerContextValue | null>(null);

export function useWindowManager() {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) throw new Error('useWindowManager must be used within WindowManagerProvider');
  return ctx;
}

export function useWindowManagerProvider() {
  const location = useLocation();
  const navigate = useNavigate();

  const activeApp = useMemo(() => {
    return desktopApps.find((a) => a.route && (location.pathname === a.route || location.pathname.startsWith(a.route + '/'))) ?? null;
  }, [location.pathname]);

  const windows: WindowState[] = useMemo(() => {
    if (!activeApp) return [];
    return [{ appId: activeApp.id, isMinimized: false }];
  }, [activeApp]);

  const activeWindowId = activeApp?.id ?? null;

  const openApp = useCallback(
    (appId: string) => {
      const app = desktopApps.find((a) => a.id === appId);
      if (!app) return;
      if (app.route) {
        navigate(app.route);
      }
    },
    [navigate],
  );

  const closeWindow = useCallback(
    (_appId: string) => {
      navigate('/');
    },
    [navigate],
  );

  const toggleMinimize = useCallback(
    (appId: string) => {
      const app = desktopApps.find((a) => a.id === appId);
      if (!app) return;
      if (app.route && location.pathname === app.route) {
        navigate('/');
      } else if (app.route) {
        navigate(app.route);
      }
    },
    [navigate, location.pathname],
  );

  return useMemo<WindowManagerContextValue>(
    () => ({
      windows,
      activeWindowId,
      openApp,
      closeWindow,
      toggleMinimize,
    }),
    [windows, activeWindowId, openApp, closeWindow, toggleMinimize],
  );
}
