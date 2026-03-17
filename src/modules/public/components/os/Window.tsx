import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import type { DesktopApp } from '../../types/os';

interface Props {
  app: DesktopApp;
  onClose: () => void;
  children: ReactNode;
}

export default function Window({ app, onClose, children }: Props) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-0 md:p-4">
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Window */}
      <motion.div
        className="relative w-full h-[calc(100vh-48px)] md:w-[85vw] md:max-w-5xl md:h-[80vh] md:rounded-xl overflow-hidden flex flex-col"
        style={{
          border: `1px solid ${app.color}33`,
          boxShadow: `0 0 30px ${app.color}15, inset 0 0 30px rgba(0,0,0,0.3)`,
        }}
        initial={{ scale: 0.8, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 40 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        {/* Title bar */}
        <div className="window-titlebar flex items-center justify-between px-4 py-2.5 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-lg">{app.icon}</span>
            <span className="text-sm font-medium text-slate-200">{app.name}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors"
              aria-label="Fechar"
            />
          </div>
        </div>

        {/* Body */}
        <div className="window-body flex-1 overflow-y-auto">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
