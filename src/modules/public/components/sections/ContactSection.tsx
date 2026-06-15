import { motion } from 'motion/react';
import { MailCheckIcon, MapPinIcon, MessageCircleIcon } from 'lucide-animated';
import SectionTitle from '../SectionTitle';
import ContactForm from '../ContactForm';
import { socialLinks } from '../../data/social-links';
import { SocialIcon } from '../PublicIcons';
import { IconFrame, SurfaceCard } from '../ui';

const ContactSection = () => {
  return (
    <section id="contato" className="section-alt px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Contato" title="Vamos tirar sua ideia do rascunho." subtitle="Envie uma mensagem com o contexto do projeto e eu retorno com os próximos passos." />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5 }}>
            <SurfaceCard className="p-6 sm:p-8">
              <ContactForm />
            </SurfaceCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5, delay: 0.1 }}>
            <SurfaceCard className="h-full p-6 sm:p-8">
              <IconFrame tone="accent">
                <MessageCircleIcon size={22} />
              </IconFrame>
              <h3 className="mt-5 text-xl font-semibold text-slate-50">Canais diretos</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Prefere falar por rede social ou WhatsApp? Use um dos canais abaixo.
              </p>

              <div className="mt-6 space-y-4">
                <a href="mailto:regivaldorfs@gmail.com" className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-accent-300">
                  <MailCheckIcon size={18} />
                  regivaldorfs@gmail.com
                </a>
                <p className="flex items-center gap-3 text-sm text-slate-300">
                  <MapPinIcon size={18} />
                  Brasil
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-slate-300 transition hover:border-accent-400/40 hover:text-accent-300">
                    <SocialIcon icon={link.icon} size={17} />
                    {link.label}
                  </a>
                ))}
              </div>
            </SurfaceCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
