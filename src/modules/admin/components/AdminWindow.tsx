import { type ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';

interface Props {
  title: string;
  icon: string;
  children: ReactNode;
}

export default function AdminWindow({ title, icon, children }: Props) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring' as const, damping: 25, stiffness: 300 }}
      className="w-full rounded-xl border border-white/10 bg-surface/80 backdrop-blur-xl shadow-2xl shadow-black/30 overflow-hidden"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/5">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-sm font-semibold text-slate-200">{title}</span>
        </div>
        <button
          onClick={() => navigate('/admin')}
          className="flex items-center justify-center w-7 h-7 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all cursor-pointer"
          title="Fechar"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {children}
      </div>
    </motion.div>
  );
}
