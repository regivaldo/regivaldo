import { desktopApps } from '../../types/os';
import { useWindowManager } from '../../hooks/useWindowManager';
import DesktopIcon from './DesktopIcon';

export default function Desktop() {
  const { openApp } = useWindowManager();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-48px)] px-4 relative z-10">
      {/* Tagline */}
      <h1 className="gradient-text text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-center animate-fade-in">
        Transforme sonhos em software
      </h1>
      <p className="text-slate-400 text-sm sm:text-base mb-12 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
        Regivaldo OS v1.0
      </p>

      {/* Icons grid */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 sm:gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        {desktopApps.map((app) => (
          <DesktopIcon key={app.id} app={app} onClick={() => openApp(app.id)} />
        ))}
      </div>
    </div>
  );
}
