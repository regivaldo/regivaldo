import { Link } from 'react-router';
import { ArrowRightIcon, MailCheckIcon, MapPinIcon } from 'lucide-animated';
import { socialLinks } from '../data/social-links';
import { SocialIcon } from './PublicIcons';

const quickLinks = [
  { to: '/sobre', label: 'Sobre' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/produtos', label: 'Produtos' },
  { to: '/portfolio', label: 'Portfólio' },
  { to: '/contato', label: 'Contato' },
];

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-dark/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_0.8fr_1fr] lg:px-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary-400/30 bg-primary-500/10 text-sm font-black text-primary-200">RF</span>
            <span>
              <span className="block text-base font-bold text-slate-50">Regivaldo Fernandes</span>
              <span className="block text-xs uppercase tracking-[0.2em] text-slate-500">Sites, sistemas e apps</span>
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
            Desenvolvimento de produtos digitais com foco em interface, performance e arquitetura para transformar ideias em software usável.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-100">Navegação</h3>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-accent-300">
                  <ArrowRightIcon size={14} className="opacity-60 transition group-hover:translate-x-0.5" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-100">Contato</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <a href="mailto:regivaldorfs@gmail.com" className="flex items-center gap-2 transition hover:text-accent-300">
              <MailCheckIcon size={17} />
              regivaldorfs@gmail.com
            </a>
            <p className="flex items-center gap-2">
              <MapPinIcon size={17} />
              Brasil
            </p>
          </div>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-accent-400/40 hover:text-accent-300"
              >
                <SocialIcon icon={link.icon} size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 px-4 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Regivaldo Fernandes. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
