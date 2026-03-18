import { motion } from 'motion/react';
import SectionTitle from '../SectionTitle';
import PortfolioCard from '../PortfolioCard';
import { useGetPortfolios } from '../../apis/use-get-portfolios';

const PortfolioSection = () => {
  const { data: items = [] } = useGetPortfolios();

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          title="Portfólio"
          subtitle="Projetos reais com resultados comprovados"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <PortfolioCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
