import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";

const ProductsPage = () => {
  const { data: products, loading } = useProducts();

  return (
    <>
      {/* Hero */}
      <section className="relative px-4 py-16 text-center sm:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.1),transparent)]" />
        <h1 className="text-3xl font-extrabold sm:text-4xl">
          <span className="gradient-text">Produtos</span>
        </h1>
        <p className="mt-3 text-slate-400">
          Soluções completas para impulsionar o seu negócio
        </p>
      </section>

      {/* Grid */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {loading ? (
            <p className="text-center text-slate-500">Carregando...</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2">
              {products.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
