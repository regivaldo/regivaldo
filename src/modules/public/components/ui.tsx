import { Link, type LinkProps } from 'react-router';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRightIcon } from 'lucide-animated';

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

type ButtonTone = 'primary' | 'secondary' | 'ghost';

const buttonTone: Record<ButtonTone, string> = {
  primary:
    'border-accent-400/40 bg-accent-500 text-white shadow-[0_18px_50px_rgba(249,115,22,0.22)] hover:bg-accent-400',
  secondary:
    'border-primary-400/35 bg-primary-500/10 text-primary-100 hover:border-primary-300/60 hover:bg-primary-500/20',
  ghost:
    'border-white/10 bg-white/[0.03] text-slate-200 hover:border-white/20 hover:bg-white/[0.07]',
};

const buttonBase =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-dark';

export function ButtonLink({
  className,
  tone = 'primary',
  children,
  ...props
}: LinkProps & { tone?: ButtonTone }) {
  return (
    <Link className={cn(buttonBase, buttonTone[tone], className)} {...props}>
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  className,
  tone = 'primary',
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { tone?: ButtonTone }) {
  return (
    <a className={cn(buttonBase, buttonTone[tone], className)} {...props}>
      {children}
    </a>
  );
}

export function Button({
  className,
  tone = 'primary',
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { tone?: ButtonTone }) {
  return (
    <button className={cn(buttonBase, buttonTone[tone], className)} {...props}>
      {children}
    </button>
  );
}

export function ArrowLabel({ children }: { children: ReactNode }) {
  return (
    <>
      <span>{children}</span>
      <ArrowRightIcon size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
    </>
  );
}

export function SurfaceCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('premium-card rounded-lg border border-white/10 bg-surface/80 p-6', className)}>
      {children}
    </div>
  );
}

export function IconFrame({
  children,
  tone = 'primary',
  className,
}: {
  children: ReactNode;
  tone?: 'primary' | 'accent';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'inline-flex h-11 w-11 items-center justify-center rounded-lg border',
        tone === 'accent'
          ? 'border-accent-400/30 bg-accent-500/10 text-accent-300'
          : 'border-primary-400/30 bg-primary-500/10 text-primary-300',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function MetricCard({
  value,
  label,
  tone = 'primary',
}: {
  value: string;
  label: string;
  tone?: 'primary' | 'accent' | 'neutral';
}) {
  const valueClass =
    tone === 'accent' ? 'text-accent-300' : tone === 'primary' ? 'text-primary-300' : 'text-slate-100';

  return (
    <SurfaceCard className="p-4 text-center">
      <p className={cn('text-2xl font-bold tracking-tight', valueClass)}>{value}</p>
      <p className="mt-1 text-xs leading-snug text-slate-400">{label}</p>
    </SurfaceCard>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
}) {
  return (
    <header className={cn('mb-10', align === 'center' && 'mx-auto max-w-3xl text-center')}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">{eyebrow}</p>
      <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">{title}</h1>
      <p className={cn('mt-4 max-w-2xl text-base leading-relaxed text-slate-400', align === 'center' && 'mx-auto')}>
        {description}
      </p>
    </header>
  );
}
