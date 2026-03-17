import { useState, useEffect } from 'react';

export default function Clock() {
  const [display, setDisplay] = useState(() => formatDisplay());

  useEffect(() => {
    const id = setInterval(() => setDisplay(formatDisplay()), 10_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-mono text-sm text-slate-300 tabular-nums">{display}</span>
  );
}

function formatDisplay() {
  const now = new Date();
  const date = now.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' }).replace('.', '');
  const time = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  return `${date} · ${time}`;
}
