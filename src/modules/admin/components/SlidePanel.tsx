import { type ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  open: boolean;
  backTo: string;
  children: ReactNode;
}

export default function SlidePanel({ open, backTo, children }: Props) {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-30 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => navigate(backTo)}
          />

          {/* Panel */}
          <motion.aside
            className="fixed top-0 right-0 z-40 h-full w-full sm:w-[480px] border-l border-white/10 bg-surface backdrop-blur-xl overflow-y-auto shadow-2xl shadow-black/50"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            {children}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
