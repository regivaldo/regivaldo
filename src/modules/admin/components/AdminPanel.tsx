import { type ReactNode } from 'react';
import { motion } from 'motion/react';

interface Props {
  title: string;
  icon: string;
  actions?: ReactNode;
  children: ReactNode;
}

export default function AdminPanel({ title, icon, actions, children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full rounded-xl border border-white/10 bg-surface/80 backdrop-blur-xl shadow-2xl shadow-black/30 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-sm font-semibold text-slate-200">{title}</span>
        </div>
        {actions && <div>{actions}</div>}
      </div>

      {/* Content */}
      <div className="p-5">
        {children}
      </div>
    </motion.div>
  );
}
