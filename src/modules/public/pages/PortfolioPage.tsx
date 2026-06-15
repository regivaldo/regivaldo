import { motion } from 'motion/react';
import PortfolioCard from '../components/PortfolioCard';
import { useGetPortfolios } from '../apis/use-get-portfolios';
import { MetricCard, PageHeader } from '../components/ui';

const PortfolioPage = () => {
  const { data: items = [], isLoading } = useGetPortfolios();

  return (
    <div className="min-h-screen px-4 py-14 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mx-auto max-w-7xl">
        <PageHeader eyebrow="Portfólio" title="Projetos com identidade, sistema e entrega." description="Uma seleção de trabalhos desenvolvidos para marcas, comunidades e produtos digitais." />

        <div className="mb-10 grid grid-cols-3 gap-3 sm:max-w-xl">
          <MetricCard value="3" label="Projetos" />
          <MetricCard value="8+" label="Tecnologias" tone="accent" />
          <MetricCard value="Reais" label="Resultados" tone="neutral" />
        </div>

        {isLoading ? (
          <p className="text-center text-slate-500">Carregando...</p>
        ) : (
          <div className="grid gap-5 md:grid-cols-3">
            {items.map((item) => <PortfolioCard key={item.id} {...item} />)}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PortfolioPage;
