import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Services", href: "#services" },
  { label: "Profils", href: "#profils" },
  { label: "Comment ça marche", href: "#parcours" },
  { label: "Territoires", href: "#territoires" },
  { label: "Témoignages", href: "#temoignages" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A3D4D]/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(10,61,77,0.18)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#accueil" className="group relative z-50 flex items-center gap-2">
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#40E0D0] to-[#00BFFF]">
            <span className="font-display text-lg font-extrabold text-[#0A3D4D]">C</span>
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
            Cocon
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => setActiveHover(link.href)}
              onMouseLeave={() => setActiveHover(null)}
              className="relative px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:text-white"
            >
              {link.label}
              <motion.span
                className="absolute bottom-1 left-3 right-3 h-[2px] origin-left rounded-full bg-[#40E0D0]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeHover === link.href ? 1 : 0 }}
                transition={{ duration: 0.25 }}
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#profils"
            className="rounded-xl px-4 py-2 text-sm font-medium text-white/90 transition hover:text-[#40E0D0]"
          >
            Se connecter
          </a>
          <a
            href="#profils"
            className="rounded-xl bg-gradient-to-r from-[#40E0D0] to-[#00BFFF] px-5 py-2.5 text-sm font-semibold text-[#0A3D4D] transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Créer un compte
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl bg-white/10 lg:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-5 bg-white"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-5 bg-white"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-5 bg-white"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-[#0A3D4D] px-6 pt-24 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="border-b border-white/10 py-4 font-display text-2xl font-semibold text-white"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="#profils"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/20 py-3 text-center font-medium text-white"
              >
                Se connecter
              </a>
              <a
                href="#profils"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-gradient-to-r from-[#40E0D0] to-[#00BFFF] py-3 text-center font-semibold text-[#0A3D4D]"
              >
                Créer un compte
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
