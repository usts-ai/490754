import React from "react";
import { motion } from "framer-motion";

const socials = [
  { name: "Instagram", href: "#", path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5 1 .4.4.7.9 1 1.5.2.4.4 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.5-.4.4-.9.7-1.5 1-.4.2-1.1.4-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-1-.4-.4-.7-.9-1-1.5-.2-.4-.4-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.5.4-.4.9-.7 1.5-1 .4-.2 1.1-.4 2.3-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.2 0-3.5 0-4.8.1-1 .1-1.6.2-1.9.4-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.3-.3.9-.4 1.9-.1 1.2-.1 1.6-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.6.4 1.9.2.5.4.8.7 1.1.3.3.6.5 1.1.7.3.2.9.3 1.9.4 1.2.1 1.6.1 4.8.1s3.5 0 4.8-.1c1-.1 1.6-.2 1.9-.4.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.3.3-.9.4-1.9.1-1.2.1-1.6.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.6-.4-1.9-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.3-.2-.9-.3-1.9-.4-1.3-.1-1.6-.1-4.8-.1zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm6.3-8.4a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0z" },
  { name: "LinkedIn", href: "#", path: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8.25h4.5V24H.25V8.25zM8.75 8.25h4.3v2.14h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.5v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24h-4.5V8.25z" },
  { name: "X", href: "#", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.833L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0A3D4D] text-white">
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#40E0D0]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#FFA500]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#accueil" className="inline-flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#40E0D0] to-[#00BFFF] font-display text-lg font-extrabold text-[#0A3D4D]">
                C
              </span>
              <span className="font-display text-2xl font-bold">Cocon</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              La plateforme qui relie Hôtes et Gardiens partout en France métropolitaine, avec chaleur et sérénité.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition hover:bg-[#40E0D0] hover:text-[#0A3D4D]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-[#40E0D0]">
              Plateforme
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              {["Services", "Profils", "Territoires", "Tarifs"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item === "Tarifs" ? "services" : item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="group inline-flex items-center gap-2 transition hover:text-[#40E0D0]"
                  >
                    <span className="h-px w-0 bg-[#40E0D0] transition-all group-hover:w-4" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-[#40E0D0]">
              Assistance
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              {["Centre d'aide", "Sécurité & RGPD", "Nous contacter", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href="#accueil"
                    className="group inline-flex items-center gap-2 transition hover:text-[#DEB887]"
                  >
                    <span className="h-px w-0 bg-[#DEB887] transition-all group-hover:w-4" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-[#40E0D0]">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-white/70">
              Recevez les nouveautés de la V2 et les conseils pour Hôtes & Gardiens.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                readOnly
                placeholder="votre@email.fr"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#40E0D0]"
              />
              <button
                type="button"
                className="rounded-xl bg-[#FFA500] px-5 py-3 text-sm font-semibold text-[#0A3D4D] transition hover:brightness-110"
              >
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© 2026 Cocon — Tous droits réservés.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#accueil" className="transition hover:text-white">Mentions légales</a>
            <a href="#accueil" className="transition hover:text-white">Confidentialité</a>
            <a href="#accueil" className="transition hover:text-white">CGU</a>
            <a href="#accueil" className="transition hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
