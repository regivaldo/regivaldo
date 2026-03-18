import { Link, Outlet, useMatch } from 'react-router';
import { motion } from 'motion/react';
import { useGetServices } from '../../public/apis/use-get-services';
import SlidePanel from '../components/SlidePanel';
import AdminWindow from '../components/AdminWindow';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const ServicesAdminPage = () => {
  const { data: services = [], isLoading } = useGetServices();
  const hasChild = useMatch('/admin/servicos/:id');

  return (
    <div className="flex gap-0 w-full">
      <AdminWindow title="Serviços" icon="⚙️">
        <motion.div initial="hidden" animate="visible" variants={container} className="space-y-6">
          <motion.div variants={item} className="flex items-center justify-between">
            <p className="text-sm text-slate-400">{services.length} serviço(s) cadastrado(s)</p>
            <Link
              to="/admin/servicos/novo"
              className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-500 transition-colors"
            >
              + Novo serviço
            </Link>
          </motion.div>

          {isLoading ? (
            <p className="text-sm text-slate-500">Carregando...</p>
          ) : (
            <div className="space-y-3">
              {services.map((s) => (
                <motion.div key={s.id} variants={item}>
                  <Link
                    to={`/admin/servicos/${s.id}`}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/10"
                  >
                    <span className="text-3xl">{s.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-100 truncate">{s.title}</p>
                      <p className="text-xs text-slate-400 truncate mt-0.5">{s.description}</p>
                    </div>
                    <span className="text-slate-500 text-sm">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AdminWindow>

      <SlidePanel open={Boolean(hasChild)} backTo="/admin/servicos">
        <Outlet />
      </SlidePanel>
    </div>
  );
};

export default ServicesAdminPage;
