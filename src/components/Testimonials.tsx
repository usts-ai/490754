import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Camille R.",
    role: "Hôte · Lyon",
    quote:
      "Planifier le ménage et trouver un Gardien de confiance n'a jamais été aussi simple. L'interface est douce, claire, rassurante.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Julien M.",
    role: "Gardien · Bordeaux",
    quote:
      "Les missions arrivent par territoire, les rendez-vous sont fluides et les paiements suivis. Exactement ce qu'il me fallait.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Sarah L.",
    role: "Hôte · Nantes",
    quote:
      "Le didacticiel m'a guidée dès la première minute. Je gère mes prestations et mes RDV sans stress, même en déplacement.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  const current = testimonials[index];

  return (
    <section id="temoignages" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-[#0A3D4D]" />
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#40E0D0]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-[#DEB887]/15 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-[0.24em] text-[#40E0D0]"
        >
          Ils vivent Cocon
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 font-display text-3xl font-bold text-white sm:text-5xl"
        >
          Des foyers sereins, partout
        </motion.h2>

        <div className="relative mt-12 min-h-[280px] sm:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="mx-auto"
            >
              <img
                src={current.avatar}
                alt={current.name}
                className="mx-auto h-16 w-16 rounded-2xl object-cover ring-2 ring-[#40E0D0]/50"
              />
              <p className="mt-6 font-display text-xl leading-relaxed text-white sm:text-2xl md:text-3xl">
                « {current.quote} »
              </p>
              <footer className="mt-6">
                <p className="font-semibold text-[#40E0D0]">{current.name}</p>
                <p className="text-sm text-white/55">{current.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Témoignage de ${t.name}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-[#40E0D0]" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
