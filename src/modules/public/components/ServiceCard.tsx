import type { Service } from '../types';
import { CheckIcon, ServiceIcon } from './PublicIcons';
import { IconFrame, SurfaceCard } from './ui';

const ServiceCard = ({ id, title, description, details }: Service) => {
  return (
    <SurfaceCard className="card-hover h-full p-6">
      <IconFrame>
        <ServiceIcon id={id} />
      </IconFrame>
      <h3 className="mt-5 text-xl font-semibold text-slate-50">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>
      <ul className="mt-5 space-y-2.5">
        {details.map((detail) => (
          <li key={detail} className="flex gap-2.5 text-sm leading-relaxed text-slate-300">
            <CheckIcon size={15} className="mt-0.5 shrink-0 text-accent-300" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </SurfaceCard>
  );
};

export default ServiceCard;
