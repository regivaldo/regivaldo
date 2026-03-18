import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";

const links = [
  { to: "/", anchor: "#hero", label: "Home" },
  { to: "/sobre", anchor: "#sobre", label: "Sobre" },
  { to: "/produtos", anchor: "#produtos", label: "Produtos" },
  { to: "/portfolio", anchor: "#portfolio", label: "Portfólio" },
  { to: "/servicos", anchor: "#servicos", label: "Serviços" },
  { to: "/contato", anchor: "#contato", label: "Contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (anchor: string) => {
    setOpen(false);
    if (isHome) {
      const el = document.querySelector(anchor);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="text-xl font-bold tracking-tight">
          <span className="gradient-text">Regivaldo</span>
        </NavLink>

        {/* Desktop */}
        <ul className="hidden gap-8 md:flex">
          {links.map((l) =>
            isHome && l.anchor ? (
              <li key={l.anchor}>
                <button
                  onClick={() => handleClick(l.anchor)}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-accent-400 cursor-pointer"
                >
                  {l.label}
                </button>
              </li>
            ) : (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-accent-400 ${
                      isActive ? "text-accent-400" : "text-slate-300"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-slate-300 md:hidden"
          aria-label="Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-white/10 px-4 pb-4 md:hidden glass">
          {links.map((l) =>
            isHome && l.anchor ? (
              <li key={l.anchor}>
                <button
                  onClick={() => handleClick(l.anchor)}
                  className="block w-full text-left py-2 text-sm font-medium text-slate-300 transition-colors hover:text-accent-400 cursor-pointer"
                >
                  {l.label}
                </button>
              </li>
            ) : (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 text-sm font-medium transition-colors hover:text-accent-400 ${
                      isActive ? "text-accent-400" : "text-slate-300"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
