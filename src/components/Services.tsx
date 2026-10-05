import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "achat",
    title: "Achats en ligne",
    subtitle: "Services à portée de clic",
    description:
      "Commandez ménage, maintenance et prestations partenaires en quelques gestes, avec paiement sécurisé intégré.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
    accent: "#40E0D0",
    points: ["Catalogue personnalisé", "Paiement sécurisé", "Suivi en temps réel"],
  },
  {
    id: "rdv",
    title: "Prise de rendez-vous",
    subtitle: "Prestataires par territoire",
    description:
      "Réservez un créneau avec des experts locaux : confirmation SMS, rappels automatiques et agenda synchronisé.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    accent: "#00BFFF",
    points: ["Créneaux locaux", "Alertes SMS", "Agenda partagé"],
  },
  {
    id: "planif",
    title: "Planification",
    subtitle: "Anticipez vos services",
    description:
      "Organisez ménage et interventions récurrentes pour garder votre foyer serein, même en votre absence.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    accent: "#FFA500",
    points: ["Récurrences flexibles", "Vue calendrier", "Notifications"],
  },
];

const Services: React.FC = () => {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(64,224,208,0.12),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(222,184,135,0.15),_transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#0A3D4D]/60">
            Fonctionnalités V2
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0A3D4D] sm:text-5xl">
            Tout pour orchestrer{" "}
            <span className="gradient-text">votre sérénité</span>
          </h2>
          <p className="mt-4 text-base text-[#1A2A2E]/70 sm:text-lg">
            Une expérience fluide pour acheter, réserver et planifier — pensée pour Hôtes comme pour Gardiens.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-2 sm:gap-3">
          {services.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all sm:px-5 ${
                active === i
                  ? "bg-[#0A3D4D] text-white shadow-lg"
                  : "bg-white/70 text-[#0A3D4D]/70 hover:bg-white"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + "-img"}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.45 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[16/10]"
            >
              <img
                src={current.image}
                alt={current.title}
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 opacity-40 mix-blend-multiply"
                style={{
                  background: `linear-gradient(135deg, ${current.accent}, transparent 60%)`,
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 px-4 py-3 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
                <p className="text-xs font-medium uppercase tracking-wider text-[#0A3D4D]/50">
                  {current.subtitle}
                </p>
                <p className="font-display text-lg font-bold text-[#0A3D4D]">
                  {current.title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + "-txt"}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col justify-center"
            >
              <h3 className="font-display text-2xl font-bold text-[#0A3D4D] sm:text-3xl">
                {current.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#1A2A2E]/75 sm:text-lg">
                {current.description}
              </p>
              <ul className="mt-8 space-y-3">
                {current.points.map((point, idx) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-center gap-3 text-sm font-medium text-[#0A3D4D] sm:text-base"
                  >
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-[#0A3D4D]"
                      style={{ backgroundColor: `${current.accent}55` }}
                    >
                      0{idx + 1}
                    </span>
                    {point}
                  </motion.li>
                ))}
              </ul>
              <a
                href="#parcours"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-[#0A3D4D] transition hover:scale-[1.02]"
                style={{ backgroundColor: `${current.accent}` }}
              >
                Voir le parcours
                <span>→</span>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;
