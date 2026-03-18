import { Link, Outlet, useMatch } from 'react-router';
import { motion } from 'motion/react';
import { useGetSocialLinks } from '../../public/apis/use-get-social-links';
import SlidePanel from '../components/SlidePanel';
import AdminPanel from '../components/AdminPanel';
import { SocialIcon } from './SocialLinkFormAdminPage';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const SocialLinksAdminPage = () => {
  const { data: socialLinks = [], isLoading } = useGetSocialLinks();
  const hasChild = useMatch('/admin/social/:id');

  return (
    <div className="flex gap-0 w-full">
      <AdminPanel title="Redes Sociais" icon="🔗">
        <motion.div initial="hidden" animate="visible" variants={container} className="space-y-6">
          <motion.div variants={item} className="flex items-center justify-between">
            <p className="text-sm text-slate-400">{socialLinks.length} rede(s) cadastrada(s)</p>
            <Link
              to="/admin/social/novo"
              className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-500 transition-colors"
            >
              + Nova rede
            </Link>
          </motion.div>

          {isLoading ? (
            <p className="text-sm text-slate-500">Carregando...</p>
          ) : (
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <motion.div key={link.id} variants={item}>
                  <Link
                    to={`/admin/social/${link.id}`}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/10"
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 text-slate-300">
                      <SocialIcon icon={link.icon} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-100 truncate">{link.label}</p>
                      <p className="text-xs text-slate-400 truncate mt-0.5">{link.url}</p>
                      {link.helpText && (
                        <p className="text-xs text-slate-500 truncate mt-0.5">{link.helpText}</p>
                      )}
                    </div>
                    <span className="text-slate-500 text-sm">&rarr;</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AdminPanel>

      <SlidePanel open={Boolean(hasChild)} backTo="/admin/social">
        <Outlet />
      </SlidePanel>
    </div>
  );
};

export default SocialLinksAdminPage;
