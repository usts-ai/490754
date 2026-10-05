import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const profiles = {
  hote: {
    label: "Hôte",
    title: "Confiez votre foyer l'esprit léger",
    description:
      "Publiez vos besoins, achetez des prestations et planifiez interventions & rendez-vous selon votre territoire.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80",
    benefits: [
      "Tableau de bord personnalisé",
      "Gardiens vérifiés près de chez vous",
      "Paiement et notifications sécurisés",
      "Didacticiel guidé dès la première connexion",
    ],
    cta: "Je suis Hôte",
  },
  gardien: {
    label: "Gardien",
    title: "Protégez et prenez soin des foyers",
    description:
      "Recevez des missions adaptées, gérez votre agenda et proposez vos services avec un parcours dédié.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80",
    benefits: [
      "Missions géolocalisées",
      "Planification intelligente",
      "Paiements suivis et sécurisés",
      "Accompagnement pas à pas",
    ],
    cta: "Je suis Gardien",
  },
};

const Profiles: React.FC = () => {
  const [mode, setMode] = useState<"hote" | "gardien">("hote");
  const data = profiles[mode];

  return (
    <section id="profils" className="relative bg-[#0A3D4D] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#40E0D0]/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[#FFA500]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#40E0D0]">
            Deux parcours, une plateforme
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Choisissez votre profil
          </h2>
        </motion.div>

        <div className="mx-auto mt-8 flex w-full max-w-md rounded-2xl bg-white/10 p-1.5 backdrop-blur-md">
          {(["hote", "gardien"] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setMode(key)}
              className="relative flex-1 rounded-xl py-3 text-sm font-semibold"
            >
              {mode === key && (
                <motion.span
                  layoutId="profile-pill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#40E0D0] to-[#00BFFF]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  mode === key ? "text-[#0A3D4D]" : "text-white/70"
                }`}
              >
                {profiles[key].label}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode + "-image"}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.45 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src={data.image}
                alt={data.label}
                className="aspect-[5/4] w-full object-cover sm:aspect-[16/11]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D4D]/80 via-transparent to-transparent" />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-5 left-5 right-5"
              >
                <span className="inline-block rounded-lg bg-[#DEB887] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0A3D4D]">
                  Profil {data.label}
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={mode + "-content"}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="font-display text-2xl font-bold leading-tight sm:text-4xl">
                {data.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
                {data.description}
              </p>
              <ul className="mt-8 space-y-4">
                {data.benefits.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i }}
                    className="flex items-start gap-3 text-sm sm:text-base"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#40E0D0] text-[10px] font-bold text-[#0A3D4D]">
                      ✓
                    </span>
                    <span className="text-white/90">{b}</span>
                  </motion.li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-8 w-full rounded-xl bg-[#FFA500] px-6 py-3.5 text-sm font-semibold text-[#0A3D4D] transition hover:brightness-110 sm:w-auto"
              >
                {data.cta}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Profiles;
