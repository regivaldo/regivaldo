import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRightIcon } from 'lucide-animated';
import SectionTitle from '../SectionTitle';
import ServiceCard from '../ServiceCard';
import { useGetServices } from '../../apis/use-get-services';

const ServicesSection = () => {
  const { data: services = [] } = useGetServices();

  return (
    <section id="servicos" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle eyebrow="Serviços" title="Do conceito ao deploy." subtitle="Escolha uma frente ou combine tudo em um produto completo: site, sistema, aplicativo, integrações e consultoria técnica." align="left" />
          <Link to="/servicos" className="group inline-flex items-center gap-2 text-sm font-semibold text-accent-300 transition hover:text-accent-200">
            Ver todos
            <ArrowRightIcon size={16} className="transition group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div key={service.id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.45, delay: index * 0.06 }}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
