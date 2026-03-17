import { Link } from 'react-router';
import { motion } from 'motion/react';
import ServiceCard from '../components/ServiceCard';
import { useServices } from '../hooks/useServices';

const steps = [
  {
    number: '01',
    title: 'Descoberta',
    description: 'Entendo suas necessidades, objetivos e o contexto do projeto.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Crio protótipos e defino a arquitetura ideal para sua solução.',
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description: 'Codifico com qualidade, testes e entregas incrementais.',
  },
  {
    number: '04',
    title: 'Entrega',
    description: 'Deploy, treinamento e suporte para garantir o sucesso do projeto.',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ServicesPage = () => {
  const { data: services, loading } = useServices();

  return (
    <div className="min-h-screen px-6 py-8 pb-20">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
      >
        ← Desktop
      </Link>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="mt-6 max-w-5xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-10">
          <span className="text-5xl">⚙️</span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold gradient-text">Serviços</h1>
          <p className="mt-2 text-slate-400">
            Tudo o que você precisa para transformar sua ideia em realidade
          </p>
        </motion.div>

        {/* Services grid */}
        {loading ? (
          <p className="text-center text-slate-500">Carregando...</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 mb-12">
            {services.map((s) => (
              <motion.div key={s.id} variants={item}>
                <ServiceCard {...s} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Como eu trabalho */}
        <motion.div variants={item} className="pt-8 border-t border-white/5">
          <h3 className="mb-8 text-center text-xl font-bold text-slate-100">
            Como eu trabalho
          </h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={item}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 text-center"
            >
              <span className="gradient-text text-3xl font-extrabold">{step.number}</span>
              <h4 className="mt-2 text-sm font-semibold text-slate-100">{step.title}</h4>
              <p className="mt-1 text-xs text-slate-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;
