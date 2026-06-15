import { Link, useParams } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeftIcon, ArrowUpRightIcon } from 'lucide-animated';
import { products } from '../data/products';
import { CheckIcon, ProductIcon } from '../components/PublicIcons';
import { ButtonAnchor, ButtonLink, IconFrame, PageHeader, SurfaceCard } from '../components/ui';

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <PageHeader eyebrow="Produto" title="Produto não encontrado" description="O produto que você procura não existe ou foi removido." align="center" />
          <ButtonLink to="/produtos">Ver todos os produtos</ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-14 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mx-auto max-w-7xl">
        <Link to="/produtos" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-accent-300">
          <ArrowLeftIcon size={16} />
          Produtos
        </Link>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <SurfaceCard className="p-6 sm:p-8">
            <IconFrame tone="accent" className="h-14 w-14">
              <ProductIcon id={product.id} size={28} />
            </IconFrame>
            {product.tag && <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-accent-300">{product.tag}</p>}
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">{product.title}</h1>
            <p className="mt-5 text-base leading-relaxed text-slate-300">{product.description}</p>
            {product.link && (
              <ButtonAnchor href={product.link} target="_blank" rel="noopener noreferrer" className="mt-8">
                {product.linkLabel ?? 'Acessar produto'}
                <ArrowUpRightIcon size={16} />
              </ButtonAnchor>
            )}
          </SurfaceCard>

          <SurfaceCard className="p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-slate-50">Funcionalidades</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div key={feature} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm leading-relaxed text-slate-300">
                  <CheckIcon size={16} className="mt-0.5 shrink-0 text-accent-300" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetailPage;
