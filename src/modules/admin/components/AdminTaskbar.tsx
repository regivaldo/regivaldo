import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import Clock from '../../public/components/os/Clock';
import AdminStartMenu from './AdminStartMenu';

const tabs = [
  { path: '/admin', label: 'Dashboard', icon: '📊', exact: true },
  { path: '/admin/produtos', label: 'Produtos', icon: '📦', exact: false },
  { path: '/admin/portfolio', label: 'Portfólio', icon: '🎨', exact: false },
  { path: '/admin/servicos', label: 'Serviços', icon: '⚙️', exact: false },
];

export default function AdminTaskbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const activeTab = tabs.find((t) =>
    t.exact
      ? location.pathname === t.path
      : location.pathname.startsWith(t.path)
  );

  return (
    <>
      <AdminStartMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="fixed bottom-0 left-0 right-0 h-12 z-50 glass border-t border-white/5 flex items-center px-3">
        {/* Left: Start menu button */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
        >
          <span className="text-base">🛠️</span>
          <span className="hidden sm:inline text-xs font-semibold">Menu</span>
        </button>

        {/* Center: active tab */}
        <div className="flex-1 flex items-center justify-center gap-2">
          {activeTab && (
            <Link
              to={activeTab.path}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-primary-600/15 border border-primary-500/30 text-primary-400 transition-all"
            >
              <span>{activeTab.icon}</span>
              <span className="hidden sm:inline">{activeTab.label}</span>
            </Link>
          )}
        </div>

        {/* Right: site link + notification + clock */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            title="Acessar site"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="hidden md:inline">Site</span>
          </Link>

          <button
            className="flex items-center justify-center w-7 h-7 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            title="Notificações"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>

          <div className="hidden sm:block border-l border-white/10 pl-2">
            <Clock />
          </div>
        </div>
      </div>
    </>
  );
}
