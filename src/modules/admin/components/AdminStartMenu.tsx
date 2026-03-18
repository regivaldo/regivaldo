import { NavLink, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';

const menuItems = [
  { to: '/admin', label: 'Dashboard', icon: '📊', end: true },
  { to: '/admin/produtos', label: 'Produtos', icon: '📦', end: false },
  { to: '/admin/portfolio', label: 'Portfólio', icon: '🎨', end: false },
  { to: '/admin/servicos', label: 'Serviços', icon: '⚙️', end: false },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AdminStartMenu({ open, onClose }: Props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onClose();
    navigate('/login');
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed bottom-12 left-2 z-50 w-64 rounded-xl border border-white/10 bg-surface/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="text-lg">🛠️</span>
                <span className="gradient-text font-bold text-sm">Painel Admin</span>
              </div>
            </div>

            {/* Menu items */}
            <nav className="p-2 space-y-0.5">
              {menuItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-primary-600/15 text-primary-400 border border-primary-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                    }`
                  }
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Footer */}
            <div className="p-2 border-t border-white/5">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all cursor-pointer"
              >
                <span className="text-lg">🚪</span>
                Sair
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
