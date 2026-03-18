import { Link } from 'react-router';
import { motion } from 'motion/react';

const stats = [
  { icon: '📦', label: 'Produtos', value: '3', to: '/admin/produtos', color: '#3b82f6' },
  { icon: '🎨', label: 'Portfólio', value: '3', to: '/admin/portfolio', color: '#f97316' },
  { icon: '⚙️', label: 'Serviços', value: '4', to: '/admin/servicos', color: '#06b6d4' },
  { icon: '✉️', label: 'Mensagens', value: '0', to: '/admin', color: '#10b981' },
];

const shortcuts = [
  { icon: '➕', label: 'Novo produto', to: '/admin/produtos' },
  { icon: '📝', label: 'Novo projeto', to: '/admin/portfolio' },
  { icon: '🌐', label: 'Ver site', to: '/' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const DashboardAdminPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="w-full space-y-8"
    >
      {/* Header */}
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-slate-100">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-400">Visão geral do seu conteúdo</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <motion.div key={s.label} variants={item}>
            <Link
              to={s.to}
              className="block rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{s.icon}</span>
                <span
                  className="text-2xl font-bold"
                  style={{ color: s.color }}
                >
                  {s.value}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-400">{s.label}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Shortcuts */}
      <motion.div variants={item}>
        <h2 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-3">
          Atalhos rápidos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {shortcuts.map((s) => (
            <motion.div key={s.label} variants={item}>
              <Link
                to={s.to}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3 text-sm text-slate-300 transition-all hover:border-accent-500/30 hover:bg-white/10 hover:text-white"
              >
                <span className="text-lg">{s.icon}</span>
                {s.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent activity placeholder */}
      <motion.div variants={item}>
        <h2 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-3">
          Atividade recente
        </h2>
        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-8 text-center">
          <span className="text-4xl block mb-3">📭</span>
          <p className="text-sm text-slate-400">Nenhuma atividade recente</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DashboardAdminPage;
