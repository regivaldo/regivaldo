import { motion } from 'motion/react';
import { MailCheckIcon, MapPinIcon, MessageCircleIcon } from 'lucide-animated';
import ContactForm from '../components/ContactForm';
import { socialLinks } from '../data/social-links';
import { SocialIcon } from '../components/PublicIcons';
import { IconFrame, PageHeader, SurfaceCard } from '../components/ui';

const ContactPage = () => {
  return (
    <div className="min-h-screen px-4 py-14 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mx-auto max-w-7xl">
        <PageHeader eyebrow="Contato" title="Conte o que você quer construir." description="Sites, sistemas, aplicativos ou consultoria técnica. Envie o contexto e eu retorno com um caminho claro para o projeto." />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <SurfaceCard className="p-6 sm:p-8">
            <ContactForm />
          </SurfaceCard>

          <SurfaceCard className="p-6 sm:p-8">
            <IconFrame tone="accent">
              <MessageCircleIcon size={22} />
            </IconFrame>
            <h2 className="mt-5 text-xl font-semibold text-slate-50">Canais de contato</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Use o formulario ou fale diretamente por um dos canais profissionais.
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
            <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {socialLinks.map((link) => (
                <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-accent-400/40 hover:text-accent-300">
                  <SocialIcon icon={link.icon} size={18} />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
