import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRightIcon } from 'lucide-animated';
import SectionTitle from '../SectionTitle';
import ProductCard from '../ProductCard';
import { useGetProducts } from '../../apis/use-get-products';

const ProductsSection = () => {
  const { data: products = [] } = useGetProducts();

  return (
    <section id="produtos" className="section-alt px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle eyebrow="Produtos" title="Projetos próprios em produção." subtitle="Soluções criadas para resolver problemas reais, com fluxo completo de produto digital." align="left" />
          <Link to="/produtos" className="group inline-flex items-center gap-2 text-sm font-semibold text-accent-300 transition hover:text-accent-200">
            Ver produtos
            <ArrowRightIcon size={16} className="transition group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.45, delay: index * 0.07 }}>
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
