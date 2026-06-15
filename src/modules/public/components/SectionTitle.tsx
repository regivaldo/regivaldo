import { motion } from 'motion/react';
import { cn } from './ui';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: 'left' | 'center';
}

const SectionTitle = ({ title, subtitle, eyebrow, align = 'center' }: SectionTitleProps) => {
  return (
    <div className={cn('mb-12', align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl')}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-300"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="mt-3 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className={cn('mt-4 text-base leading-relaxed text-slate-400', align === 'center' && 'mx-auto max-w-2xl')}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
