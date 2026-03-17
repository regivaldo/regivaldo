import ServiceCard from "../components/ServiceCard";
import { useServices } from "../hooks/useServices";

const steps = [
  {
    number: "01",
    title: "Descoberta",
    description: "Entendo suas necessidades, objetivos e o contexto do projeto.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Crio protótipos e defino a arquitetura ideal para sua solução.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Codifico com qualidade, testes e entregas incrementais.",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Deploy, treinamento e suporte para garantir o sucesso do projeto.",
  },
];

const ServicesPage = () => {
  const { data: services, loading } = useServices();

  return (
    <>
      {/* Hero */}
      <section className="relative px-4 py-16 text-center sm:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.1),transparent)]" />
        <h1 className="text-3xl font-extrabold sm:text-4xl">
          <span className="gradient-text">Serviços</span>
        </h1>
        <p className="mt-3 text-slate-400">
          Tudo o que você precisa para transformar sua ideia em realidade
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {loading ? (
            <p className="text-center text-slate-500">Carregando...</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2">
              {services.map((s) => (
                <ServiceCard key={s.id} {...s} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Como eu trabalho */}
      <section className="bg-surface/50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-2xl font-bold text-slate-100 sm:text-3xl">
            Como eu trabalho
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <span className="gradient-text text-3xl font-extrabold">
                  {step.number}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-slate-100">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
