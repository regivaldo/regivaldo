import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRightIcon } from 'lucide-animated';
import SectionTitle from '../SectionTitle';
import PortfolioCard from '../PortfolioCard';
import { useGetPortfolios } from '../../apis/use-get-portfolios';

const PortfolioSection = () => {
  const { data: items = [] } = useGetPortfolios();

  return (
    <section id="portfolio" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle eyebrow="Portfólio" title="Trabalhos com cara de produto." subtitle="Projetos para marcas, comunidades e iniciativas digitais que precisavam sair do papel com qualidade." align="left" />
          <Link to="/portfolio" className="group inline-flex items-center gap-2 text-sm font-semibold text-accent-300 transition hover:text-accent-200">
            Ver portfólio
            <ArrowRightIcon size={16} className="transition group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.45, delay: index * 0.07 }}>
              <PortfolioCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
