import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative px-4 py-16 text-center sm:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.1),transparent)]" />
        <h1 className="text-3xl font-extrabold sm:text-4xl">
          <span className="gradient-text">Contato</span>
        </h1>
        <p className="mt-3 text-slate-400">
          Vamos conversar sobre o seu próximo projeto
        </p>
      </section>

      {/* Content */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-white/10 bg-surface p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-white/10 bg-surface p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-slate-100">
                Informações de contato
              </h2>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">
                    E-mail
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    regivaldo@email.com
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Localização
                  </p>
                  <p className="mt-1 text-sm text-slate-300">Brasil</p>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Redes sociais
                  </p>
                  <div className="mt-2 flex gap-4">
                    <a
                      href="https://github.com/regivaldo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-400 transition-colors hover:text-accent-400"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/regivaldo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-400 transition-colors hover:text-accent-400"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
