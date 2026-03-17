import { desktopApps } from '../../types/os';
import { useWindowManager } from '../../hooks/useWindowManager';
import Clock from './Clock';
import Weather from './Weather';

export default function Taskbar() {
  const { activeWindowId, aboutOpen, toggleMinimize, openApp } = useWindowManager();

  const activeApp = activeWindowId ? desktopApps.find((a) => a.id === activeWindowId) : null;
  const aboutApp = desktopApps.find((a) => a.id === 'sobre')!;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 z-50 glass border-t border-white/5 flex items-center px-4">
      {/* Left: brand */}
      <span className="gradient-text font-bold text-sm hidden sm:block select-none">
        Regivaldo
      </span>

      {/* Center: open windows */}
      <div className="flex-1 flex items-center justify-center gap-2">
        {activeApp && (
          <button
            onClick={() => toggleMinimize(activeApp.id)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all"
            style={{
              background: `${activeApp.color}18`,
              border: `1px solid ${activeApp.color}55`,
              color: activeApp.color,
            }}
          >
            <span>{activeApp.icon}</span>
            <span className="hidden sm:inline">{activeApp.name}</span>
          </button>
        )}
        {aboutOpen && (
          <button
            onClick={() => openApp('sobre')}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all"
            style={{
              background: `${aboutApp.color}18`,
              border: `1px solid ${aboutApp.color}55`,
              color: aboutApp.color,
            }}
          >
            <span>{aboutApp.icon}</span>
            <span className="hidden sm:inline">{aboutApp.name}</span>
          </button>
        )}
      </div>

      {/* Right: weather + clock */}
      <div className="flex items-center gap-3">
        <Weather />
        <Clock />
      </div>
    </div>
  );
}
