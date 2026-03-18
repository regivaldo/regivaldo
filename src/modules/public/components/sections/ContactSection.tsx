import { motion } from 'motion/react';
import SectionTitle from '../SectionTitle';
import ContactForm from '../ContactForm';

const ContactSection = () => {
  return (
    <section id="contato" className="section-alt py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          title="Contato"
          subtitle="Vamos conversar sobre o seu próximo projeto"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-white/15 transition-colors duration-300">
              <ContactForm />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-white/15 transition-colors duration-300">
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
                      className="text-sm text-slate-400 transition-all duration-300 hover:text-accent-400 hover:translate-x-0.5"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/regivaldo-silva/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-400 transition-all duration-300 hover:text-accent-400 hover:translate-x-0.5"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
