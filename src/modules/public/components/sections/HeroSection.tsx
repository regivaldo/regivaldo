import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

/* ── Constellation canvas ── */

interface Star {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface OrbitStar {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  speed: number;
  offset: number;
  r: number;
  alpha: number;
  tilt: number;
}

// Seeded pseudo-random so the pattern is stable across renders
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function createStars(w: number, h: number): Star[] {
  const rand = seededRandom(42);
  const count = Math.floor((w * h) / 4000);
  return Array.from({ length: Math.min(count, 200) }, () => ({
    x: rand() * w,
    y: rand() * h,
    r: 0.4 + rand() * 1.4,
    baseAlpha: 0.2 + rand() * 0.5,
    twinkleSpeed: 0.3 + rand() * 1.2,
    twinkleOffset: rand() * Math.PI * 2,
  }));
}

function createOrbits(w: number, h: number): OrbitStar[] {
  const cx = w / 2;
  const cy = h / 2;
  const rand = seededRandom(99);
  return Array.from({ length: 18 }, (_, i) => ({
    cx,
    cy,
    rx: 80 + i * 28 + rand() * 40,
    ry: 40 + i * 14 + rand() * 25,
    speed: (0.08 + rand() * 0.18) * (i % 2 === 0 ? 1 : -1),
    offset: rand() * Math.PI * 2,
    r: 0.8 + rand() * 1.6,
    alpha: 0.3 + rand() * 0.5,
    tilt: -0.2 + rand() * 0.4,
  }));
}

const CONNECTION_DIST = 120;

function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<{
    stars: Star[];
    orbits: OrbitStar[];
    w: number;
    h: number;
    raf: number;
  } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas!.parentElement!.getBoundingClientRect();
      canvas!.width = rect.width * dpr;
      canvas!.height = rect.height * dpr;
      canvas!.style.width = `${rect.width}px`;
      canvas!.style.height = `${rect.height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const w = rect.width;
      const h = rect.height;
      stateRef.current = {
        stars: createStars(w, h),
        orbits: createOrbits(w, h),
        w,
        h,
        raf: stateRef.current?.raf ?? 0,
      };
    }

    resize();
    window.addEventListener('resize', resize);

    let running = true;

    function draw(time: number) {
      if (!running || !stateRef.current) return;
      const { stars, orbits, w, h } = stateRef.current;
      const t = time / 1000;

      ctx!.clearRect(0, 0, w, h);

      // Collect all visible points for connections
      const points: { x: number; y: number; a: number }[] = [];

      // Draw fixed stars with twinkle
      for (const s of stars) {
        const alpha =
          s.baseAlpha *
          (0.5 + 0.5 * Math.sin(t * s.twinkleSpeed + s.twinkleOffset));
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(200, 210, 240, ${alpha})`;
        ctx!.fill();
        points.push({ x: s.x, y: s.y, a: alpha });
      }

      // Draw orbiting stars
      for (const o of orbits) {
        const angle = t * o.speed + o.offset;
        const cos = Math.cos(o.tilt);
        const sin = Math.sin(o.tilt);
        const lx = o.rx * Math.cos(angle);
        const ly = o.ry * Math.sin(angle);
        const x = o.cx + lx * cos - ly * sin;
        const y = o.cy + lx * sin + ly * cos;

        const twinkle = 0.6 + 0.4 * Math.sin(t * 1.5 + o.offset);
        const alpha = o.alpha * twinkle;

        // Glow
        const grad = ctx!.createRadialGradient(x, y, 0, x, y, o.r * 4);
        grad.addColorStop(0, `rgba(120, 160, 255, ${alpha * 0.3})`);
        grad.addColorStop(1, 'transparent');
        ctx!.beginPath();
        ctx!.arc(x, y, o.r * 4, 0, Math.PI * 2);
        ctx!.fillStyle = grad;
        ctx!.fill();

        // Core
        ctx!.beginPath();
        ctx!.arc(x, y, o.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(180, 200, 255, ${alpha})`;
        ctx!.fill();

        points.push({ x, y, a: alpha });
      }

      // Draw constellation lines between close points
      ctx!.lineWidth = 0.5;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const lineAlpha =
              (1 - dist / CONNECTION_DIST) *
              Math.min(points[i].a, points[j].a) *
              0.35;
            ctx!.beginPath();
            ctx!.moveTo(points[i].x, points[i].y);
            ctx!.lineTo(points[j].x, points[j].y);
            ctx!.strokeStyle = `rgba(100, 140, 255, ${lineAlpha})`;
            ctx!.stroke();
          }
        }
      }

      stateRef.current.raf = requestAnimationFrame(draw);
    }

    stateRef.current!.raf = requestAnimationFrame(draw);

    return () => {
      running = false;
      if (stateRef.current) cancelAnimationFrame(stateRef.current.raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

/* ── Floating particles (bottom → top) ── */

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${8 + ((i * 7.3) % 84)}%`,
  duration: 10 + (i % 5) * 3,
  delay: i * 0.8,
  size: 2 + (i % 3),
  drift: (i % 2 === 0 ? 1 : -1) * (10 + (i % 4) * 8) + 'px',
  color:
    i % 3 === 0
      ? 'rgba(59,130,246,0.5)'
      : i % 3 === 1
        ? 'rgba(249,115,22,0.4)'
        : 'rgba(148,163,184,0.3)',
}));

/* ── Component ── */

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 text-center overflow-hidden"
    >
      {/* Constellation background */}
      <div className="absolute inset-0" aria-hidden>
        <Constellation />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute bottom-0 rounded-full"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              background: p.color,
              animation: `float-up ${p.duration}s ${p.delay}s infinite ease-in-out`,
              ['--drift' as string]: p.drift,
            }}
          />
        ))}
      </div>

      {/* Pulsing glow behind the name */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, rgba(249,115,22,0.06) 40%, transparent 70%)',
          animation: 'pulse-glow 4s ease-in-out infinite',
        }}
        aria-hidden
      />

      {/* Name with animated gradient fill */}
      <motion.h1
        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="gradient-text-animated text-4xl sm:text-5xl md:text-6xl font-bold mb-3 relative z-10 pb-2"
      >
        Regivaldo Fernandes
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-slate-400 text-base sm:text-lg mb-6 max-w-lg relative z-10"
      >
        Transforme sonhos em software
      </motion.p>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex items-center gap-3 mb-10 relative z-10"
      >
        <a
          href="https://www.linkedin.com/in/regivaldo-silva/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="group flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:shadow-[0_0_20px_rgba(10,102,194,0.25)] transition-all duration-300"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
          </svg>
        </a>
        <a
          href="https://github.com/regivaldo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="group flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
          </svg>
        </a>
        <a
          href="https://web.whatsapp.com/send?phone=5519996995631"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="group flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-[#25D366] hover:border-[#25D366]/40 hover:shadow-[0_0_20px_rgba(37,211,102,0.25)] transition-all duration-300"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
        </a>
      </motion.div>

      {/* CTA with shimmer */}
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        href="#servicos"
        onClick={(e) => {
          e.preventDefault();
          document
            .querySelector('#servicos')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="cta-shimmer relative z-10 inline-flex items-center gap-2 rounded-lg bg-accent-600 px-6 py-3 text-sm font-medium text-white hover:bg-accent-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.35)] transition-all duration-300"
      >
        Conheça meus serviços
        <motion.svg
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </motion.a>
    </section>
  );
};

export default HeroSection;
