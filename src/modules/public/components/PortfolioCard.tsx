import type { PortfolioItem } from "../types";

const PortfolioCard = ({
  title,
  client,
  description,
  technologies,
  link,
}: PortfolioItem) => {
  return (
    <div className="card-hover rounded-xl border border-white/10 bg-surface p-6">
      <p className="text-xs font-medium tracking-wider text-accent-400 uppercase">
        {client}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-slate-100">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((t) => (
          <span
            key={t}
            className="rounded-full bg-primary-950 px-3 py-1 text-xs font-medium text-primary-300"
          >
            {t}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors"
        >
          Conheça →
        </a>
      )}
    </div>
  );
};

export default PortfolioCard;
