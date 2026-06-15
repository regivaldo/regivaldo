import { Link } from 'react-router';
import type { Product } from '../types';
import { CheckIcon, ProductIcon } from './PublicIcons';
import { ArrowLabel, IconFrame, SurfaceCard } from './ui';

const ProductCard = ({ id, slug, title, description, tag, features }: Product) => {
  return (
    <Link to={`/produtos/${slug}`} className="group block h-full">
      <SurfaceCard className="card-hover flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <IconFrame tone="accent">
            <ProductIcon id={id} />
          </IconFrame>
          {tag && (
            <span className="rounded-full border border-accent-400/25 bg-accent-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-300">
              {tag}
            </span>
          )}
        </div>
        <h3 className="mt-5 text-xl font-semibold text-slate-50">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>
        <ul className="mt-5 space-y-2">
          {features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex gap-2 text-sm text-slate-300">
              <CheckIcon size={14} className="mt-0.5 shrink-0 text-primary-300" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-auto pt-5 text-sm font-semibold text-accent-300">
          <ArrowLabel>Ver detalhes</ArrowLabel>
        </p>
      </SurfaceCard>
    </Link>
  );
};

export default ProductCard;
