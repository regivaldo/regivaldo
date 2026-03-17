import { Link } from 'react-router';
import { motion } from 'motion/react';
import ContactForm from '../components/ContactForm';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactPage = () => {
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
          <span className="text-5xl">✉️</span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold gradient-text">Contato</h1>
          <p className="mt-2 text-slate-400">
            Vamos conversar sobre o seu próximo projeto
          </p>
        </motion.div>

        {/* 2-column layout */}
        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div variants={item} className="lg:col-span-3">
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <ContactForm />
            </div>
          </motion.div>

          <motion.div variants={item} className="lg:col-span-2">
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Informações de contato
              </h3>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">
                    E-mail
                  </p>
                  <p className="mt-1 text-sm text-slate-300">regivaldo@email.com</p>
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
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
