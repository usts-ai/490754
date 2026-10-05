import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Profiles from "../components/Profiles";
import HowItWorks from "../components/HowItWorks";
import Territories from "../components/Territories";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="App bg-[#F7F3EE]">
      <Header />
      <main>
        <Hero />
        <Services />
        <Profiles />
        <HowItWorks />
        <Territories />
        <Testimonials />

        <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(64,224,208,0.2),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(255,165,0,0.15),transparent_40%)]" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-[#0A3D4D] px-6 py-12 text-center sm:px-12 sm:py-16"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#40E0D0]/25 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-[#FFA500]/20 blur-2xl" />
            <p className="relative text-sm font-medium uppercase tracking-[0.24em] text-[#40E0D0]">
              Prêt pour la V2
            </p>
            <h2 className="relative mt-3 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Votre foyer mérite un Cocon
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-sm text-white/70 sm:text-base">
              Rejoignez les Hôtes et Gardiens qui font confiance à la plateforme pour une expérience cocooning, sécurisée et locale.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#profils"
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#40E0D0] to-[#00BFFF] px-7 py-3.5 text-sm font-semibold text-[#0A3D4D] transition hover:scale-[1.03] sm:w-auto"
              >
                Commencer maintenant
              </a>
              <a
                href="#services"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/25 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto"
              >
                Voir les services
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
