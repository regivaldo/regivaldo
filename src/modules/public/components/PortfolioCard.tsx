import type { PortfolioItem } from '../types';
import { PortfolioIcon } from './PublicIcons';
import { ButtonAnchor, IconFrame, SurfaceCard } from './ui';

const PortfolioCard = ({ id, title, client, description, technologies, link }: PortfolioItem) => {
  return (
    <SurfaceCard className="card-hover h-full p-6">
      <div className="flex items-start justify-between gap-4">
        <IconFrame>
          <PortfolioIcon id={id} />
        </IconFrame>
        <p className="text-right text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-300">{client}</p>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-50">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span key={technology} className="rounded-full border border-primary-400/20 bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-200">
            {technology}
          </span>
        ))}
      </div>
      {link && link !== '#' && (
        <ButtonAnchor href={link} target="_blank" rel="noopener noreferrer" tone="ghost" className="mt-6 min-h-10 px-4 py-2">
          Conhecer projeto
        </ButtonAnchor>
      )}
    </SurfaceCard>
  );
};

export default PortfolioCard;
