import { motion } from 'motion/react';
import { FolderCodeIcon, CpuIcon, DatabaseIcon, RocketIcon, ShieldCheckIcon, SmartphoneChargingIcon, TerminalIcon } from 'lucide-animated';
import { socialLinks } from '../../data/social-links';
import { SocialIcon } from '../PublicIcons';
import { ArrowLabel, ButtonAnchor, ButtonLink, IconFrame, MetricCard, SurfaceCard } from '../ui';

const capabilities = [
  { label: 'Sites', icon: FolderCodeIcon },
  { label: 'Sistemas', icon: DatabaseIcon },
  { label: 'Aplicativos', icon: SmartphoneChargingIcon },
];

const stack = ['React', 'TypeScript', 'Firebase', 'MySQL', 'Python', 'Java'];

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-400/25 bg-primary-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-200">
            <RocketIcon size={14} />
            Desenvolvedor de sistemas
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-slate-50 sm:text-6xl lg:text-7xl">
            Sites, sistemas e aplicativos com visual moderno e base sólida.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Eu transformo ideias em produtos digitais prontos para uso: interfaces elegantes, fluxos objetivos e código pensado para evoluir.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/contato" className="group">
              <ArrowLabel>Iniciar um projeto</ArrowLabel>
            </ButtonLink>
            <ButtonAnchor href="#portfolio" tone="secondary" onClick={(event) => {
              event.preventDefault();
              document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Ver portfólio
            </ButtonAnchor>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <SurfaceCard className="tech-panel p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-accent-400" />
                <span className="h-3 w-3 rounded-full bg-primary-400" />
                <span className="h-3 w-3 rounded-full bg-slate-500" />
              </div>
              <span className="font-mono text-xs text-slate-500">regivaldo.dev</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {capabilities.map(({ label, icon: Icon }, index) => (
                <div key={label} className="rounded-lg border border-white/10 bg-dark/45 p-4">
                  <IconFrame tone={index === 1 ? 'accent' : 'primary'} className="h-10 w-10">
                    <Icon size={19} />
                  </IconFrame>
                  <p className="mt-4 text-sm font-semibold text-slate-100">{label}</p>
                  <p className="mt-1 text-xs text-slate-500">Design + código + deploy</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-lg border border-white/10 bg-dark/55 p-5 font-mono text-sm text-slate-300">
              <p className="text-primary-300">const projeto = &#123;</p>
              <p className="pl-4">estratégia: 'sob medida',</p>
              <p className="pl-4">interface: 'premium',</p>
              <p className="pl-4">resultado: 'software em produção'</p>
              <p className="text-primary-300">&#125;</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </SurfaceCard>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <MetricCard value="5+" label="Projetos" />
            <MetricCard value="3" label="Produtos" tone="accent" />
            <MetricCard value="8+" label="Tecnologias" tone="neutral" />
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-10 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-600 lg:flex">
        <TerminalIcon size={14} />
        Soluções digitais completas
        <CpuIcon size={14} />
        <ShieldCheckIcon size={14} />
      </div>
    </section>
  );
};

export default HeroSection;
