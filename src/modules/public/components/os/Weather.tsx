export default function Weather() {
  return (
    <span className="hidden md:flex items-center gap-1.5 text-sm">
      <span>☀️</span>
      <span className="font-bold text-accent-400">32°C</span>
      <span className="text-slate-400 text-xs">· Temperatura ideal para uma nova ideia</span>
    </span>
  );
}
