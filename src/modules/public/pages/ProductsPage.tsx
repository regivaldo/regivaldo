import { motion } from 'motion/react';
import ProductCard from '../components/ProductCard';
import { useGetProducts } from '../apis/use-get-products';
import { MetricCard, PageHeader } from '../components/ui';

const ProductsPage = () => {
  const { data: products = [], isLoading } = useGetProducts();

  return (
    <div className="min-h-screen px-4 py-14 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mx-auto max-w-7xl">
        <PageHeader eyebrow="Produtos" title="Produtos próprios e soluções prontas para evoluir." description="Projetos digitais criados para resolver necessidades reais com interface clara e tecnologia moderna." />

        <div className="mb-10 grid grid-cols-3 gap-3 sm:max-w-xl">
          <MetricCard value="3" label="Soluções" />
          <MetricCard value="Web + Mobile" label="Plataformas" tone="accent" />
          <MetricCard value="Sob medida" label="Entrega" tone="neutral" />
        </div>

        {isLoading ? (
          <p className="text-center text-slate-500">Carregando...</p>
        ) : (
          <div className="grid gap-5 md:grid-cols-3">
            {products.map((product) => <ProductCard key={product.id} {...product} />)}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProductsPage;
