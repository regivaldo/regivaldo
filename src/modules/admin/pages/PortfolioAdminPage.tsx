import { Link, Outlet, useMatch } from 'react-router';
import { motion } from 'motion/react';
import { useGetPortfolios } from '../../public/apis/use-get-portfolios';
import SlidePanel from '../components/SlidePanel';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const PortfolioAdminPage = () => {
  const { data: items = [], isLoading } = useGetPortfolios();
  const hasChild = useMatch('/admin/portfolio/:id');

  return (
    <div className="flex gap-0 w-full">
      <motion.div initial="hidden" animate="visible" variants={container} className="flex-1 min-w-0 space-y-6">
        <motion.div variants={item} className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-100">Portfólio</h1>
            <p className="mt-1 text-sm text-slate-400">{items.length} projeto(s) cadastrado(s)</p>
          </div>
          <Link
            to="/admin/portfolio/novo"
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-500 transition-colors"
          >
            + Novo projeto
          </Link>
        </motion.div>

        {isLoading ? (
          <p className="text-sm text-slate-500">Carregando...</p>
        ) : (
          <div className="space-y-3">
            {items.map((p) => (
              <motion.div key={p.id} variants={item}>
                <Link
                  to={`/admin/portfolio/${p.id}`}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/10"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-100 truncate">{p.title}</p>
                    <p className="text-xs text-accent-400 mt-0.5">{p.client}</p>
                    <p className="text-xs text-slate-400 truncate mt-0.5">{p.description}</p>
                  </div>
                  <div className="hidden sm:flex flex-wrap gap-1 max-w-48">
                    {p.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-full bg-primary-950 px-2 py-0.5 text-[10px] font-medium text-primary-300">
                        {t}
                      </span>
                    ))}
                    {p.technologies.length > 3 && (
                      <span className="text-[10px] text-slate-500">+{p.technologies.length - 3}</span>
                    )}
                  </div>
                  <span className="text-slate-500 text-sm">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      <SlidePanel open={Boolean(hasChild)} backTo="/admin/portfolio">
        <Outlet />
      </SlidePanel>
    </div>
  );
};

export default PortfolioAdminPage;
