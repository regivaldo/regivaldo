import { motion } from 'motion/react';
import { ClipboardCheckIcon, FolderCodeIcon, FileCheckIcon, SearchIcon } from 'lucide-animated';
import ServiceCard from '../components/ServiceCard';
import { useGetServices } from '../apis/use-get-services';
import { IconFrame, PageHeader, SurfaceCard } from '../components/ui';

const steps = [
  { icon: SearchIcon, title: 'Descoberta', description: 'Entendimento do objetivo, público, regras e prioridade do projeto.' },
  { icon: ClipboardCheckIcon, title: 'Arquitetura', description: 'Definição de telas, fluxo, dados e caminho técnico para construir.' },
  { icon: FolderCodeIcon, title: 'Desenvolvimento', description: 'Implementação incremental com interface responsiva e código organizado.' },
  { icon: FileCheckIcon, title: 'Entrega', description: 'Publicação, validacao e orientação para uso da solução.' },
];

const ServicesPage = () => {
  const { data: services = [], isLoading } = useGetServices();

  return (
    <div className="min-h-screen px-4 py-14 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mx-auto max-w-7xl">
        <PageHeader eyebrow="Serviços" title="Soluções digitais completas." description="Desenvolvimento de sites, sistemas, aplicativos, automações e consultoria técnica para tirar produtos do papel." />

        {isLoading ? (
          <p className="text-center text-slate-500">Carregando...</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => <ServiceCard key={service.id} {...service} />)}
          </div>
        )}

        <SurfaceCard className="mt-10 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-slate-50">Como eu trabalho</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, description }) => (
              <div key={title}>
                <IconFrame tone="accent">
                  <Icon size={20} />
                </IconFrame>
                <h3 className="mt-4 text-sm font-semibold text-slate-100">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </SurfaceCard>
      </motion.div>
    </div>
  );
};

export default ServicesPage;
