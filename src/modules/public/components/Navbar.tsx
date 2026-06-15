import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { MenuIcon, XIcon } from 'lucide-animated';
import BrandMark from './BrandMark';
import { ButtonLink, cn } from './ui';

const links = [
  { to: '/', anchor: '#hero', label: 'Home' },
  { to: '/sobre', anchor: '#sobre', label: 'Sobre' },
  { to: '/servicos', anchor: '#servicos', label: 'Serviços' },
  { to: '/produtos', anchor: '#produtos', label: 'Produtos' },
  { to: '/portfolio', anchor: '#portfolio', label: 'Portfólio' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const goToAnchor = (anchor: string) => {
    setOpen(false);
    if (isHome) {
      document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItemClass = 'rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.04] hover:text-white';

  return (
    <nav className={cn('sticky top-0 z-50 transition-all duration-300', scrolled ? 'glass shadow-2xl shadow-black/20' : 'bg-dark/35 backdrop-blur-sm')}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="group flex items-center gap-3" aria-label="Regivaldo Fernandes">
          <BrandMark className="h-10 w-10 p-0.5" />
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-bold tracking-tight text-slate-50">Regivaldo</span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">Dev de sistemas</span>
          </span>
        </NavLink>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              {isHome ? (
                <button onClick={() => goToAnchor(link.anchor)} className={navItemClass}>
                  {link.label}
                </button>
              ) : (
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => cn(navItemClass, isActive && 'bg-white/[0.06] text-accent-300')}
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <ButtonLink to="/contato" tone="secondary" className="min-h-10 px-4 py-2">
            Conversar
          </ButtonLink>
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-200 md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-dark/95 px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) =>
              isHome ? (
                <button key={link.to} onClick={() => goToAnchor(link.anchor)} className="rounded-lg px-3 py-3 text-left text-sm font-medium text-slate-300 hover:bg-white/[0.05] hover:text-white">
                  {link.label}
                </button>
              ) : (
                <NavLink key={link.to} to={link.to} className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 hover:bg-white/[0.05] hover:text-white">
                  {link.label}
                </NavLink>
              ),
            )}
            <ButtonLink to="/contato" className="mt-2">Conversar sobre projeto</ButtonLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
