import { Link } from "react-router";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import PortfolioCard from "../components/PortfolioCard";
import ServiceCard from "../components/ServiceCard";
import { useProducts } from "../hooks/useProducts";
import { usePortfolio } from "../hooks/usePortfolio";
import { useServices } from "../hooks/useServices";

const HomePage = () => {
  const { data: products } = useProducts();
  const { data: portfolio } = usePortfolio();
  const { data: services } = useServices();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-28 sm:py-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />

        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">Transforme sonhos</span>
            <br />
            em software
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Desenvolvimento de aplicativos, sistemas e sites com tecnologia
            moderna, design futurista e foco em resultados.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/portfolio"
              className="rounded-lg bg-gradient-to-r from-primary-600 to-accent-500 px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Ver meu trabalho
            </Link>
            <Link
              to="/contato"
              className="rounded-lg border border-white/10 px-8 py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-accent-500 hover:text-accent-400"
            >
              Fale comigo
            </Link>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="Produtos"
            subtitle="Soluções prontas para acelerar o seu negócio"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/produtos"
              className="text-sm font-medium text-accent-400 transition-colors hover:text-accent-300"
            >
              Ver todos os produtos &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Portfólio */}
      <section className="bg-surface/50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="Portfólio"
            subtitle="Projetos que entregam resultados reais"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.slice(0, 3).map((p) => (
              <PortfolioCard key={p.id} {...p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/portfolio"
              className="text-sm font-medium text-accent-400 transition-colors hover:text-accent-300"
            >
              Ver todos os projetos &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="Serviços"
            subtitle="Como posso ajudar o seu negócio"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.id} {...s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/servicos"
              className="text-sm font-medium text-accent-400 transition-colors hover:text-accent-300"
            >
              Saiba mais &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Contato */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-br from-primary-950 to-surface p-10 text-center">
          <h2 className="text-2xl font-bold text-slate-100 sm:text-3xl">
            Tem um projeto em mente?
          </h2>
          <p className="mt-3 text-slate-400">
            Vamos conversar e transformar sua ideia em realidade.
          </p>
          <Link
            to="/contato"
            className="mt-6 inline-block rounded-lg bg-gradient-to-r from-primary-600 to-accent-500 px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Entrar em contato
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
