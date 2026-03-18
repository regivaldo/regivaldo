import { motion } from 'motion/react';
import SectionTitle from '../SectionTitle';

const skills = [
  { name: 'IA Agents', icon: '🤖' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'CSS', icon: '🎨' },
  { name: 'Java', icon: '☕' },
  { name: 'Python', icon: '🐍' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'MongoDB', icon: '🍃' },
];

const stats = [
  { value: '5+', label: 'Projetos entregues', color: 'text-primary-400' },
  { value: '8+', label: 'Tecnologias', color: 'text-accent-400' },
  { value: '3', label: 'Livros publicados', color: 'gradient-text' },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-alt py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <SectionTitle title="Sobre" subtitle="Desenvolvedor de Sistemas e Aplicativos" />

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="space-y-3 text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto text-center mb-10"
        >
          <p>
            Desenvolver softwares é uma grande paixão. Aprendi na adolescência o básico de programação
            e desde então busco maneiras de aperfeiçoar e evoluir como desenvolvedor.
          </p>
          <p>
            Especializado em aplicações web e mobile modernas, com foco em performance, usabilidade
            e código limpo. Atualmente trabalho em projetos próprios voltados ao universo escoteiro
            e atendo clientes com soluções sob medida.
          </p>
        </motion.div>

        {/* Skills with staggered entrance */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skills.map((s, i) => (
            <motion.span
              key={s.name}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-primary-500/30 hover:bg-primary-500/5 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all duration-300 cursor-default"
            >
              <span>{s.icon}</span>
              {s.name}
            </motion.span>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 text-center hover:border-white/20 hover:bg-white/8 transition-all duration-300"
            >
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-[11px] text-slate-400 mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
