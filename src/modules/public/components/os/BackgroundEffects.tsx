import { useMemo } from 'react';

function Particles() {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => {
      const isOrange = i % 3 === 0;
      return {
        key: i,
        left: `${(i * 17 + 5) % 100}%`,
        bottom: `${(i * 13 + 2) % 30}%`,
        color: isOrange ? 'rgba(249,115,22,0.4)' : 'rgba(59,130,246,0.4)',
        duration: `${10 + (i % 8) * 2}s`,
        delay: `${(i % 5) * 2}s`,
        size: `${2 + (i % 3)}px`,
      };
    });
  }, []);

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.key}
          className="particle"
          style={{
            left: p.left,
            bottom: p.bottom,
            backgroundColor: p.color,
            width: p.size,
            height: p.size,
            ['--duration' as string]: p.duration,
            ['--delay' as string]: p.delay,
          }}
        />
      ))}
    </>
  );
}

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Animated grid */}
      <div className="animated-grid absolute inset-0" />

      {/* Ambient radial glows */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
          transform: 'translate(-30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)',
          transform: 'translate(30%, 30%)',
        }}
      />

      {/* Floating particles */}
      <Particles />
    </div>
  );
}
