import { Link } from "react-router";
import type { Product } from "../types";

const ProductCard = ({ slug, title, description, icon, features }: Product) => {
  return (
    <Link to={"/produtos/" + slug} className="block">
      <div className="card-hover cursor-pointer rounded-xl border border-white/10 bg-surface p-6 transition-colors hover:border-accent-500/30">
        <span className="text-4xl">{icon}</span>
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
        <p className="mt-4 text-sm font-medium text-accent-400">
          Ver detalhes →
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
