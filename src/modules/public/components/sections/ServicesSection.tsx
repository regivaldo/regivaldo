import { motion } from 'motion/react';
import SectionTitle from '../SectionTitle';
import ServiceCard from '../ServiceCard';
import { useGetServices } from '../../apis/use-get-services';

const ServicesSection = () => {
  const { data: services = [] } = useGetServices();

  return (
    <section id="servicos" className="py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          title="Serviços"
          subtitle="Tudo o que você precisa para transformar sua ideia em realidade"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ServiceCard {...s} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
