import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const BOOT_KEY = 'regivaldo-os-booted';

export default function BootScreen() {
  const [phase, setPhase] = useState<'idle' | 'logo' | 'loading' | 'tagline' | 'done'>(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem(BOOT_KEY)) return 'done';
    return 'idle';
  });

  useEffect(() => {
    if (phase === 'done') return;

    const timers = [
      setTimeout(() => setPhase('logo'), 200),
      setTimeout(() => setPhase('loading'), 800),
      setTimeout(() => setPhase('tagline'), 2000),
      setTimeout(() => {
        setPhase('done');
        sessionStorage.setItem(BOOT_KEY, '1');
      }, 2800),
    ];

    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === 'done') return null;

  return (
    <AnimatePresence>
      <motion.div
        key="boot"
        className="fixed inset-0 z-[100] bg-[#020408] flex flex-col items-center justify-center"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Scanlines overlay */}
        <div className="scanlines absolute inset-0 z-10" />

        <div className="relative z-20 flex flex-col items-center gap-6">
          {/* Logo */}
          {phase !== 'idle' && (
            <motion.h1
              className="font-mono text-2xl sm:text-4xl font-bold tracking-widest gradient-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              REGIVALDO OS
            </motion.h1>
          )}

          {/* Loading bar */}
          {(phase === 'loading' || phase === 'tagline') && (
            <motion.div
              className="w-48 sm:w-64 h-[3px] rounded bg-white/10 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="boot-loader h-full" />
            </motion.div>
          )}

          {/* Tagline */}
          {phase === 'tagline' && (
            <motion.p
              className="text-slate-400 text-sm font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Transforme sonhos em software
            </motion.p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
