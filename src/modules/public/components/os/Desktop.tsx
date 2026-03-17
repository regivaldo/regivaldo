import { Link } from 'react-router';
import { desktopApps } from '../../types/os';
import { useWindowManager } from '../../hooks/useWindowManager';
import DesktopIcon from './DesktopIcon';

const highlights = [
  {
    icon: '🏕️',
    title: 'Escoteiros.app',
    description: 'Sistema completo de gestão escoteira',
    badge: 'Produto',
    to: '/produtos/escoteiros-app',
  },
  {
    icon: '⚜️',
    title: 'GE Marechal Rondon',
    description: 'Site com secretaria online para grupo escoteiro',
    badge: 'Portfólio',
    to: '/portfolio',
  },
];

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

      {/* Highlights */}
      <div className="mt-12 w-full max-w-xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <p className="text-xs text-slate-500 uppercase tracking-widest text-center mb-3">
          Desenvolvendo agora
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {highlights.map((h) => (
            <Link
              key={h.title}
              to={h.to}
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3 transition-all hover:border-accent-500/40 hover:bg-white/10"
            >
              <span className="text-2xl shrink-0">{h.icon}</span>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-slate-100 truncate group-hover:text-white">
                    {h.title}
                  </span>
                  <span className="shrink-0 rounded-full bg-accent-500/15 px-2 py-0.5 text-[10px] font-medium text-accent-400">
                    {h.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-400 truncate">{h.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
