import { Link, useParams } from 'react-router';
import { motion } from 'motion/react';
import { products } from '../data/products';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen px-6 py-8 pb-8">
        <Link
          to="/produtos"
          className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
        >
          ← Produtos
        </Link>
        <div className="mt-20 text-center">
          <span className="text-5xl">🔍</span>
          <h1 className="mt-4 text-2xl font-bold text-slate-100">
            Produto não encontrado
          </h1>
          <p className="mt-2 text-slate-400">
            O produto que você procura não existe.
          </p>
          <Link
            to="/produtos"
            className="mt-6 inline-block rounded-lg bg-accent-600 px-6 py-2 text-sm font-medium text-white hover:bg-accent-500 transition-colors"
          >
            Ver todos os produtos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-8 pb-8">
      <Link
        to="/produtos"
        className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors"
      >
        ← Produtos
      </Link>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="mt-6 max-w-3xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-10 text-center">
          <span className="text-7xl">{product.icon}</span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold gradient-text">
            {product.title}
          </h1>
          <p className="mt-3 text-lg text-slate-400 leading-relaxed max-w-xl mx-auto">
            {product.description}
          </p>
        </motion.div>

        {/* Features */}
        <motion.div variants={item} className="mb-10">
          <h2 className="text-xl font-semibold text-slate-100 mb-4">
            Funcionalidades
          </h2>
          <ul className="space-y-3">
            {product.features.map((feature, index) => (
              <motion.li
                key={feature}
                variants={item}
                custom={index}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur p-4"
              >
                <span className="text-accent-500 text-lg">✓</span>
                <span className="text-slate-200">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* External link */}
        {product.link && (
          <motion.div variants={item} className="text-center">
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-8 py-3 text-sm font-medium text-white hover:bg-accent-500 transition-colors"
            >
              {product.linkLabel ?? 'Acesse o site'} →
            </a>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ProductDetailPage;
