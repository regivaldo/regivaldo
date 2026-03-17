import type { Service } from "../types";

const ServiceCard = ({ title, description, icon, details }: Service) => {
  return (
    <div className="card-hover rounded-xl border border-white/10 bg-surface p-6">
      <span className="text-4xl">{icon}</span>
      <h3 className="mt-4 text-xl font-semibold text-slate-100">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        {description}
      </p>
      <ul className="mt-4 space-y-1">
        {details.map((d) => (
          <li key={d} className="flex items-center gap-2 text-sm text-slate-300">
            <span className="text-primary-400">&#8226;</span>
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
