import { Link } from 'react-router';
import { motion } from 'motion/react';
import SectionTitle from '../SectionTitle';
import ProductCard from '../ProductCard';
import { useGetProducts } from '../../apis/use-get-products';

const ProductsSection = () => {
  const { data: products = [] } = useGetProducts();

  return (
    <section id="produtos" className="section-alt py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          title="Produtos"
          subtitle="Soluções completas para impulsionar o seu negócio"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProductCard {...p} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/produtos"
            className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-6 py-2.5 text-sm font-medium text-primary-300 transition hover:bg-primary-500/20 hover:text-white"
          >
            Ver todos os produtos
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
