import React, { useState } from "react";
import { motion } from "framer-motion";

const territories = [
  { city: "Paris", region: "Île-de-France", hosts: 1840, guardians: 920, growth: 18 },
  { city: "Lyon", region: "Auvergne-Rhône-Alpes", hosts: 740, guardians: 410, growth: 24 },
  { city: "Bordeaux", region: "Nouvelle-Aquitaine", hosts: 520, guardians: 290, growth: 31 },
  { city: "Nantes", region: "Pays de la Loire", hosts: 480, guardians: 260, growth: 27 },
  { city: "Marseille", region: "Provence-Alpes-Côte d'Azur", hosts: 610, guardians: 340, growth: 22 },
  { city: "Lille", region: "Hauts-de-France", hosts: 390, guardians: 210, growth: 19 },
];

const Territories: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const current = territories[selected];
  const maxHosts = Math.max(...territories.map((t) => t.hosts));

  return (
    <section id="territoires" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#0A3D4D]/55">
              Expansion France
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-[#0A3D4D] sm:text-5xl">
              Des territoires vivants, prêts pour la V2
            </h2>
            <p className="mt-4 max-w-lg text-base text-[#1A2A2E]/70 sm:text-lg">
              Prestataires organisés par zone, rendez-vous locaux et couverture progressive sur toute la métropole.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900&q=80"
              alt="Vue de Paris, France"
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D4D]/85 via-[#0A3D4D]/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white sm:bottom-6 sm:left-6">
              <p className="text-xs uppercase tracking-wider text-[#40E0D0]">Focus</p>
              <p className="font-display text-2xl font-bold">{current.city}</p>
              <p className="text-sm text-white/75">{current.region}</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {territories.map((t, i) => (
            <motion.button
              key={t.city}
              type="button"
              onClick={() => setSelected(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.02 }}
              className={`rounded-2xl border p-5 text-left transition-all ${
                selected === i
                  ? "border-[#40E0D0] bg-[#0A3D4D] text-white shadow-xl"
                  : "border-[#0A3D4D]/08 bg-white text-[#0A3D4D] hover:border-[#DEB887]"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-lg font-bold">{t.city}</p>
                  <p
                    className={`mt-1 text-xs ${
                      selected === i ? "text-white/60" : "text-[#1A2A2E]/50"
                    }`}
                  >
                    {t.region}
                  </p>
                </div>
                <span
                  className={`rounded-lg px-2 py-1 text-xs font-bold ${
                    selected === i
                      ? "bg-[#40E0D0] text-[#0A3D4D]"
                      : "bg-[#40E0D0]/20 text-[#0A3D4D]"
                  }`}
                >
                  +{t.growth}%
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className={selected === i ? "text-white/70" : "text-[#1A2A2E]/55"}>
                      Hôtes
                    </span>
                    <span className="font-semibold">{t.hosts}</span>
                  </div>
                  <div
                    className={`h-1.5 overflow-hidden rounded-full ${
                      selected === i ? "bg-white/15" : "bg-[#0A3D4D]/08"
                    }`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(t.hosts / maxHosts) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#40E0D0] to-[#00BFFF]"
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className={selected === i ? "text-white/70" : "text-[#1A2A2E]/55"}>
                      Gardiens
                    </span>
                    <span className="font-semibold">{t.guardians}</span>
                  </div>
                  <div
                    className={`h-1.5 overflow-hidden rounded-full ${
                      selected === i ? "bg-white/15" : "bg-[#0A3D4D]/08"
                    }`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(t.guardians / maxHosts) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#FFA500] to-[#E2725B]"
                    />
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Territories;
