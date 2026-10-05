import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="parallax-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
          alt="Intérieur chaleureux d'une maison"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D4D] via-[#0A3D4D]/55 to-[#0A3D4D]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D4D]/70 via-transparent to-transparent" />
      </motion.div>

      <div className="grain absolute inset-0" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-[#40E0D0]"
        >
          Plateforme V2
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.8rem,10vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight text-white"
        >
          Cocon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl"
        >
          La mise en relation Hôte & Gardien, repensée : achats de services, rendez-vous locaux et planification au rythme de votre foyer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#profils"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#40E0D0] to-[#00BFFF] px-7 py-3.5 text-sm font-semibold text-[#0A3D4D] transition-transform hover:scale-[1.03]"
          >
            Découvrir mon parcours
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-[#DEB887] hover:bg-white/10"
          >
            Explorer les services
          </a>
        </motion.div>

      </motion.div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Défiler</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="h-8 w-px bg-gradient-to-b from-[#40E0D0] to-transparent"
        />
      </motion.a>
    </section>
  );
};

export default Hero;
