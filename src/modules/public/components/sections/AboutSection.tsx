import { motion } from 'motion/react';
import SectionTitle from '../SectionTitle';
import { SkillIcon } from '../PublicIcons';
import { MetricCard, SurfaceCard } from '../ui';

const skills = ['IA Agents', 'TypeScript', 'CSS', 'Java', 'Python', 'MySQL', 'Firebase', 'MongoDB'];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-alt px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <SectionTitle
            eyebrow="Sobre"
            title="Tecnologia com acabamento de produto."
            subtitle="Atuo criando sites, sistemas e aplicativos com foco em clareza, usabilidade e uma base técnica preparada para crescer."
            align="left"
          />
          <div className="grid grid-cols-3 gap-3">
            <MetricCard value="5+" label="Projetos entregues" />
            <MetricCard value="8+" label="Tecnologias" tone="accent" />
            <MetricCard value="3" label="Livros publicados" tone="neutral" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <SurfaceCard className="p-6 sm:p-8">
            <div className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              <p>
                Desenvolver software e uma grande paixão. Desde a adolescência estudo programação e busco formas de evoluir como desenvolvedor.
              </p>
              <p>
                Hoje trabalho com aplicações web e mobile modernas, combinando estratégia, interface e desenvolvimento para entregar soluções sob medida.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-200">
                  <SkillIcon name={skill} />
                  {skill}
                </span>
              ))}
            </div>
          </SurfaceCard>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
