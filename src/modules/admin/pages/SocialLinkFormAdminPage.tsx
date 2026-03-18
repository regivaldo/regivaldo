import { useState, useEffect, type ComponentType } from 'react';
import { useParams, useNavigate } from 'react-router';
import { socialLinks } from '../../public/data/social-links';
import {
  LinkedinIcon,
  GithubIcon,
  MessageCircleIcon,
  MailCheckIcon,
  XIcon,
  YoutubeIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  TwitchIcon,
  DiscordIcon,
} from 'lucide-animated';

const inputClass =
  'w-full rounded-lg border border-white/10 bg-dark px-4 py-2.5 text-sm text-slate-100 outline-none transition-colors focus:border-primary-500';

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  whatsapp: MessageCircleIcon,
  email: MailCheckIcon,
  x: XIcon,
  youtube: YoutubeIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  twitch: TwitchIcon,
  discord: DiscordIcon,
};

const iconOptions = [
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'github', label: 'GitHub' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'email', label: 'Email' },
  { value: 'x', label: 'X (Twitter)' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'twitter', label: 'Twitter' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'twitch', label: 'Twitch' },
  { value: 'discord', label: 'Discord' },
] as const;

export function SocialIcon({ icon, size = 20, className = '' }: { icon: string; size?: number; className?: string }) {
  const IconComponent = iconMap[icon];
  if (!IconComponent) return <span className="text-sm">?</span>;
  return <IconComponent size={size} className={className} />;
}

const SocialLinkFormAdminPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = Boolean(id) && id !== 'novo';

  const [form, setForm] = useState({
    icon: '',
    label: '',
    url: '',
    helpText: '',
  });

  useEffect(() => {
    if (isEditing) {
      const link = socialLinks.find((l) => l.id === id);
      if (link) {
        setForm({
          icon: link.icon,
          label: link.label,
          url: link.url,
          helpText: link.helpText ?? '',
        });
      }
    }
  }, [id, isEditing]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: salvar via API
    navigate('/admin/social');
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-100">
          {isEditing ? 'Editar rede social' : 'Nova rede social'}
        </h2>
        <button
          onClick={() => navigate('/admin/social')}
          className="text-slate-400 hover:text-white transition-colors text-lg cursor-pointer"
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-xs text-slate-400">Ícone *</label>
          <select
            name="icon"
            required
            value={form.icon}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Selecione um ícone</option>
            {iconOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {form.icon && (
            <div className="mt-2 flex items-center gap-2 text-slate-300">
              <SocialIcon icon={form.icon} />
              <span className="text-xs text-slate-400">
                {iconOptions.find((o) => o.value === form.icon)?.label}
              </span>
            </div>
          )}
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-400">Label *</label>
          <input name="label" required value={form.label} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-400">URL *</label>
          <input name="url" required value={form.url} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-400">Texto de ajuda</label>
          <input name="helpText" value={form.helpText} onChange={handleChange} className={inputClass} />
        </div>
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 rounded-lg bg-primary-600 py-2.5 text-sm font-medium text-white hover:bg-primary-500 transition-colors"
          >
            {isEditing ? 'Salvar' : 'Criar'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/social')}
            className="flex-1 rounded-lg border border-white/10 py-2.5 text-sm font-medium text-slate-400 hover:text-white hover:border-white/20 transition-colors cursor-pointer"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SocialLinkFormAdminPage;
