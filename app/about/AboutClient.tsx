"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "25+" },
  { label: "Cars Delivered", value: "5,000+" },
  { label: "Happy Clients", value: "4,800+" },
  { label: "Awards Won", value: "18" },
];

const features = [
  {
    title: "Precision Engineering",
    desc: "Every vehicle is meticulously inspected and tuned to perfection.",
  },
  {
    title: "Premium Auto Sales",
    desc: "Curated selection of the finest sports and luxury vehicles.",
  },
  {
    title: "Custom Builds",
    desc: "Bespoke modifications tailored to your exact specifications.",
  },
  {
    title: "Worldwide Shipping",
    desc: "Reliable global delivery with white-glove service.",
  },
];

export default function AboutClient() {
  return (
    <section className="min-h-screen bg-black pt-28 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-red-500 text-sm font-semibold tracking-[0.3em] uppercase">
            About Us
          </span>
          <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-[0.08em] uppercase">
            Built for the <span className="text-red-600">Drive</span>
          </h1>
          <p className="mt-6 mx-auto text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed">
            Founded in 1999, we have been delivering automotive excellence for
            over two decades. From sourcing rare exotics to building track-ready
            monsters, we live and breathe cars.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-24 sm:mb-28">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="text-center p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-red-600">
                {stat.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all hover:border-red-600/50"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
