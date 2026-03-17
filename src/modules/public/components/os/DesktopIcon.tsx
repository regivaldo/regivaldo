import type { DesktopApp } from '../../types/os';

interface Props {
  app: DesktopApp;
  onClick: () => void;
}

export default function DesktopIcon({ app, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer group flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
      style={{ ['--glow-color' as string]: `${app.color}99` }}
    >
      <span
        className="text-4xl sm:text-5xl transition-transform duration-300 group-hover:scale-110 neon-glow"
        role="img"
        aria-label={app.name}
      >
        {app.icon}
      </span>
      <span className="text-xs sm:text-sm text-slate-300 group-hover:text-white transition-colors font-medium">
        {app.name}
      </span>
    </button>
  );
}
