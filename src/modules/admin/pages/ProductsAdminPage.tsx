import { Link, Outlet, useMatch } from 'react-router';
import { motion } from 'motion/react';
import { useGetProducts } from '../../public/apis/use-get-products';
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

const ProductsAdminPage = () => {
  const { data: products = [], isLoading } = useGetProducts();
  const hasChild = useMatch('/admin/produtos/:id');

  return (
    <div className="flex gap-0 w-full">
      <AdminWindow title="Produtos" icon="📦">
        <motion.div initial="hidden" animate="visible" variants={container} className="space-y-6">
          <motion.div variants={item} className="flex items-center justify-between">
            <p className="text-sm text-slate-400">{products.length} produto(s) cadastrado(s)</p>
            <Link
              to="/admin/produtos/novo"
              className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-500 transition-colors"
            >
              + Novo produto
            </Link>
          </motion.div>

          {isLoading ? (
            <p className="text-sm text-slate-500">Carregando...</p>
          ) : (
            <div className="space-y-3">
              {products.map((p) => (
                <motion.div key={p.id} variants={item}>
                  <Link
                    to={`/admin/produtos/${p.id}`}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/10"
                  >
                    <span className="text-3xl">{p.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-slate-100 truncate">{p.title}</p>
                        {p.tag && (
                          <span className="shrink-0 rounded-full bg-accent-500/15 px-2 py-0.5 text-[10px] font-medium text-accent-400">
                            {p.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 truncate mt-0.5">{p.description}</p>
                    </div>
                    <span className="text-slate-500 text-sm">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AdminWindow>

      <SlidePanel open={Boolean(hasChild)} backTo="/admin/produtos">
        <Outlet />
      </SlidePanel>
    </div>
  );
};

export default ProductsAdminPage;
