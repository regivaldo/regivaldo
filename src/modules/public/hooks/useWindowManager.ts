import { createContext, useContext, useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { desktopApps } from '../types/os';
import type { WindowState } from '../types/os';

interface WindowManagerContextValue {
  windows: WindowState[];
  activeWindowId: string | null;
  aboutOpen: boolean;
  openApp: (appId: string) => void;
  closeWindow: (appId: string) => void;
  toggleMinimize: (appId: string) => void;
  setAboutOpen: (open: boolean) => void;
}

export const WindowManagerContext = createContext<WindowManagerContextValue | null>(null);

export function useWindowManager() {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) throw new Error('useWindowManager must be used within WindowManagerProvider');
  return ctx;
}

export function useWindowManagerProvider(aboutOpen: boolean, setAboutOpen: (v: boolean) => void) {
  const location = useLocation();
  const navigate = useNavigate();

  const activeApp = useMemo(() => {
    return desktopApps.find((a) => a.route && location.pathname === a.route) ?? null;
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
      if (app.id === 'sobre') {
        setAboutOpen(true);
        return;
      }
      if (app.route) {
        navigate(app.route);
      }
    },
    [navigate, setAboutOpen],
  );

  const closeWindow = useCallback(
    (appId: string) => {
      if (appId === 'sobre') {
        setAboutOpen(false);
        return;
      }
      navigate('/');
    },
    [navigate, setAboutOpen],
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
      aboutOpen,
      openApp,
      closeWindow,
      toggleMinimize,
      setAboutOpen,
    }),
    [windows, activeWindowId, aboutOpen, openApp, closeWindow, toggleMinimize, setAboutOpen],
  );
}
