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
        Regivaldo Fernandes
      </h1>
      <p className="text-slate-400 text-sm sm:text-base mb-4 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
        Transforme sonhos em software
      </p>

      {/* Social links */}
      <div className="flex items-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <a
          href="https://www.linkedin.com/in/regivaldo-silva/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
          </svg>
        </a>
        <a
          href="https://github.com/regivaldo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/30 transition-all"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
          </svg>
        </a>
        <a
          href="https://web.whatsapp.com/send?phone=5519996995631"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-[#25D366] hover:border-[#25D366]/40 transition-all"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
        </a>
      </div>

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
