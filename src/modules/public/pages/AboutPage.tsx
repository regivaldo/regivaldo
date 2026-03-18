import { motion } from 'motion/react';

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

const timeline = [
  {
    icon: '🧒',
    title: 'O começo',
    description: 'Aprendeu o básico de programação na adolescência e desde então nunca parou de evoluir.',
  },
  {
    icon: '💻',
    title: 'Desenvolvedor Full Stack',
    description: 'Especializado em aplicações web e mobile modernas com React, Node.js e ecossistema JavaScript.',
  },
  {
    icon: '🏕️',
    title: 'Projetos escoteiros',
    description: 'Criou o Escoteiros.app e o Quiz Escoteiro — ferramentas usadas por escoteiros e escotistas em todo o Brasil.',
  },
  {
    icon: '📖',
    title: 'Escritor',
    description: 'Autor de livros e contos publicados na Amazon. A escrita é outra grande paixão além do código.',
  },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/regivaldo',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/regivaldo-silva/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:regivaldorfs@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://web.whatsapp.com/send?phone=5519996995631',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen px-6 py-8 pb-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="mt-6 max-w-2xl mx-auto space-y-8"
      >
        {/* Header */}
        <motion.div variants={item} className="text-center">
          <span className="text-7xl block mb-4">👨‍💻</span>
          <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-1">Regivaldo Fernandes</h1>
          <p className="text-slate-400">Desenvolvedor de Sistemas e Aplicativos</p>
        </motion.div>

        {/* Quote */}
        <motion.div
          variants={item}
          className="rounded-xl border border-white/10 bg-white/5 backdrop-blur px-5 py-4 text-center"
        >
          <p className="text-slate-300 text-sm italic leading-relaxed">
            "Os sonhos de muitos podem ser solucionados com um aplicativo, um sistema ou mesmo um site."
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div variants={item} className="space-y-3 text-slate-300 text-sm leading-relaxed">
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

        {/* Skills */}
        <motion.div variants={item}>
          <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-3">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <motion.span
                key={s.name}
                variants={item}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
              >
                <span>{s.icon}</span>
                {s.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={item}>
          <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-4">
            Trajetória
          </h3>
          <div className="space-y-4">
            {timeline.map((t, i) => (
              <motion.div
                key={t.title}
                variants={item}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <span className="text-xl">{t.icon}</span>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-white/10 mt-2" />
                  )}
                </div>
                <div className="pb-4">
                  <p className="text-sm font-semibold text-slate-100">{t.title}</p>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{t.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div variants={item} className="grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 text-center">
            <p className="text-2xl font-bold text-primary-400">5+</p>
            <p className="text-[11px] text-slate-400 mt-1">Projetos entregues</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 text-center">
            <p className="text-2xl font-bold text-accent-400">8+</p>
            <p className="text-[11px] text-slate-400 mt-1">Tecnologias</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 text-center">
            <p className="text-2xl font-bold gradient-text">3</p>
            <p className="text-[11px] text-slate-400 mt-1">Livros publicados</p>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center justify-center gap-3 pt-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-primary-400 hover:border-primary-500/40 transition-all"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        <motion.p variants={item} className="text-center text-xs text-slate-500 pt-2">
          &copy; {new Date().getFullYear()} Regivaldo Fernandes. Todos os direitos reservados.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AboutPage;
