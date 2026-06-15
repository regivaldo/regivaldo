import { motion } from 'motion/react';
import { BookTextIcon, FolderCodeIcon, RocketIcon, ShieldCheckIcon } from 'lucide-animated';
import { SkillIcon } from '../components/PublicIcons';
import { ButtonLink, IconFrame, MetricCard, PageHeader, SurfaceCard } from '../components/ui';

const skills = ['IA Agents', 'TypeScript', 'CSS', 'Java', 'Python', 'MySQL', 'Firebase', 'MongoDB'];

const timeline = [
  { icon: FolderCodeIcon, title: 'Começo na programação', description: 'Estudo tecnologia desde a adolescência e mantenho uma evolução constante.' },
  { icon: RocketIcon, title: 'Produtos digitais', description: 'Crio sites, sistemas e aplicativos com foco em experiência e entrega real.' },
  { icon: ShieldCheckIcon, title: 'Projetos escoteiros', description: 'Desenvolvo ferramentas proprias para comunidades e grupos escoteiros.' },
  { icon: BookTextIcon, title: 'Escrita e criatividade', description: 'A escrita tambem influencia a forma como estruturo ideias e produtos.' },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen px-4 py-14 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mx-auto max-w-7xl">
        <PageHeader eyebrow="Sobre" title="Regivaldo Fernandes" description="Desenvolvedor de sistemas e aplicativos, com foco em transformar ideias em software bonito, funcional e preparado para crescer." align="center" />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <SurfaceCard className="p-6 sm:p-8">
            <p className="text-lg font-semibold leading-relaxed text-slate-100">
              "Os sonhos de muitos podem ser solucionados com um aplicativo, um sistema ou mesmo um site."
            </p>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300">
              <p>
                Desenvolver software e uma grande paixão. Aprendi o basico de programação na adolescência e desde entao sigo aperfeiçoando minha forma de construir produtos digitais.
              </p>
              <p>
                Trabalho com aplicações web e mobile modernas, combinando clareza visual, arquitetura e desenvolvimento sob medida para cada contexto.
              </p>
            </div>
            <div className="mt-7 grid grid-cols-3 gap-3">
              <MetricCard value="5+" label="Projetos" />
              <MetricCard value="8+" label="Tecnologias" tone="accent" />
              <MetricCard value="3" label="Livros" tone="neutral" />
            </div>
            <ButtonLink to="/contato" className="mt-7">Conversar sobre projeto</ButtonLink>
          </SurfaceCard>

          <div className="space-y-6">
            <SurfaceCard className="p-6">
              <h2 className="text-lg font-semibold text-slate-50">Stack e ferramentas</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-200">
                    <SkillIcon name={skill} />
                    {skill}
                  </span>
                ))}
              </div>
            </SurfaceCard>

            <SurfaceCard className="p-6">
              <h2 className="text-lg font-semibold text-slate-50">Trajetoria</h2>
              <div className="mt-6 space-y-5">
                {timeline.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex gap-4">
                    <IconFrame className="h-10 w-10 shrink-0">
                      <Icon size={18} />
                    </IconFrame>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
