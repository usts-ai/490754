import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Créez votre espace",
    text: "Choisissez Hôte ou Gardien, suivez le didacticiel interactif et personnalisez votre profil en quelques minutes.",
  },
  {
    num: "02",
    title: "Connectez-vous localement",
    text: "Découvrez les prestataires et missions près de chez vous, filtrés par territoire en France métropolitaine.",
  },
  {
    num: "03",
    title: "Achetez & planifiez",
    text: "Réservez des services, prenez rendez-vous et organisez le ménage ou les interventions à l'avance.",
  },
  {
    num: "04",
    title: "Restez informé",
    text: "Recevez e-mails et SMS à chaque étape : confirmation, rappel, mise à jour de mission ou de paiement.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="parcours" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#F7F3EE_0%,#E8F6F4_50%,#F7F3EE_100%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#0A3D4D]/55">
            Parcours guidé
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-[#0A3D4D] sm:text-5xl">
            Simple. Chaleureux.{" "}
            <span className="text-[#E2725B]">Sécurisé.</span>
          </h2>
          <p className="mt-4 text-base text-[#1A2A2E]/70 sm:text-lg">
            Une navigation intuitive avec didacticiels intégrés pour que chaque utilisateur se sente chez soi dès le premier jour.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.article
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-[#0A3D4D]/08 bg-white/80 p-6 backdrop-blur-sm transition-shadow hover:shadow-[0_20px_50px_rgba(10,61,77,0.12)]"
            >
              <div className="absolute -right-4 -top-4 font-display text-7xl font-extrabold text-[#40E0D0]/15 transition-colors group-hover:text-[#40E0D0]/30">
                {step.num}
              </div>
              <span className="inline-block rounded-lg bg-[#0A3D4D] px-2.5 py-1 text-xs font-bold text-[#40E0D0]">
                {step.num}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-[#0A3D4D]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#1A2A2E]/65">
                {step.text}
              </p>
              <div className="mt-6 h-1 w-10 rounded-full bg-gradient-to-r from-[#40E0D0] to-[#FFA500] transition-all group-hover:w-20" />
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 overflow-hidden rounded-2xl"
        >
          <div className="grid md:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80"
              alt="Salon lumineux et cocooning"
              className="h-56 w-full object-cover sm:h-72 md:h-full"
            />
            <div className="flex flex-col justify-center bg-[#0A3D4D] p-8 sm:p-10">
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Sécurité & conformité RGPD
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
                Vos données sont chiffrées, vos échanges protégés. Notifications e-mail et SMS pour garder le contrôle à chaque étape.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Chiffrement", "RGPD", "Alertes SMS", "Paiements sécurisés"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-[#40E0D0]/40 bg-[#40E0D0]/10 px-3 py-1.5 text-xs font-medium text-[#40E0D0]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
