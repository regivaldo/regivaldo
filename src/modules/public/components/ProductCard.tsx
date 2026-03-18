import { useRef, type MouseEvent } from 'react';
import { Link } from "react-router";
import type { Product } from "../types";

const ProductCard = ({ slug, title, description, icon, tag, features }: Product) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    ref.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <Link to={"/produtos/" + slug} className="block">
      <div
        ref={ref}
        onMouseMove={handleMouse}
        className="card-glow card-hover cursor-pointer rounded-xl border border-white/10 bg-surface p-6 transition-colors hover:border-accent-500/30 group"
      >
        <div className="flex items-start justify-between">
          <span className="text-4xl transition-transform duration-300 group-hover:scale-110">{icon}</span>
          {tag && (
            <span className="rounded-full bg-accent-500/15 px-2.5 py-0.5 text-[11px] font-medium text-accent-400">
              {tag}
            </span>
          )}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-slate-100">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {description}
        </p>
        <ul className="mt-4 space-y-1">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
              <span className="text-accent-500">&#10003;</span>
              {f}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm font-medium text-accent-400 transition-all duration-300 group-hover:translate-x-1">
          Ver detalhes →
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
