import { Link } from 'react-router';
import { motion } from 'motion/react';

const stats = [
  { icon: '📦', label: 'Produtos', value: '3', to: '/admin/produtos', color: '#3b82f6' },
  { icon: '🎨', label: 'Portfólio', value: '3', to: '/admin/portfolio', color: '#f97316' },
  { icon: '⚙️', label: 'Serviços', value: '4', to: '/admin/servicos', color: '#06b6d4' },
  { icon: '✉️', label: 'Mensagens', value: '0', to: '/admin', color: '#10b981' },
];

const shortcuts = [
  { icon: '➕', label: 'Novo produto', to: '/admin/produtos/novo' },
  { icon: '📝', label: 'Novo projeto', to: '/admin/portfolio/novo' },
  { icon: '🔧', label: 'Novo serviço', to: '/admin/servicos/novo' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' as const, damping: 20, stiffness: 200 } },
};

const DashboardAdminPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-104px)]">
      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="gradient-text text-3xl sm:text-4xl font-bold">Painel Admin</h1>
        <p className="text-slate-400 text-sm mt-2">Gerencie seu conteúdo</p>
      </motion.div>

      {/* Floating stat cards */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-3xl mb-8"
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={item}>
            <Link
              to={s.to}
              className="group block rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-5 transition-all hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{s.icon}</span>
                <span
                  className="text-3xl font-bold tabular-nums"
                  style={{ color: s.color }}
                >
                  {s.value}
                </span>
              </div>
              <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{s.label}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Shortcuts */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl"
      >
        {shortcuts.map((s) => (
          <motion.div key={s.label} variants={item}>
            <Link
              to={s.to}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg px-4 py-3 text-sm text-slate-300 transition-all hover:border-accent-500/30 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
            >
              <span className="text-lg">{s.icon}</span>
              {s.label}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Activity widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 w-full max-w-3xl"
      >
        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 text-center">
          <span className="text-3xl block mb-2">📭</span>
          <p className="text-sm text-slate-400">Nenhuma atividade recente</p>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardAdminPage;
