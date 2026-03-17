import { Link } from 'react-router';
import { motion } from 'motion/react';
import ProductCard from '../components/ProductCard';
import { useGetProducts } from '../apis/use-get-products';

const stats = [
  { icon: '🚀', value: '3', label: 'Soluções' },
  { icon: '🌐', value: 'Web & Mobile', label: 'Plataformas' },
  { icon: '⚡', value: 'Alta', label: 'Performance' },
  { icon: '🎯', value: 'Sob', label: 'Medida' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProductsPage = () => {
  const { data: products = [], isLoading: loading } = useGetProducts();

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
          <span className="text-5xl">📦</span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold gradient-text">Produtos</h1>
          <p className="mt-2 text-slate-400">
            Soluções completas para impulsionar o seu negócio
          </p>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 text-center"
            >
              <span className="text-2xl">{s.icon}</span>
              <p className="mt-1 text-lg font-bold text-slate-100">{s.value}</p>
              <p className="text-xs text-slate-400">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Product grid */}
        {loading ? (
          <p className="text-center text-slate-500">Carregando...</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {products.map((p) => (
              <motion.div key={p.id} variants={item}>
                <ProductCard {...p} />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProductsPage;
