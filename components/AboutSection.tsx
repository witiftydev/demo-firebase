"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Premium Auto Sales",
    desc: "Curated selection of the finest sports and luxury vehicles.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Custom Builds",
    desc: "Bespoke modifications tailored to your exact specifications.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Worldwide Shipping",
    desc: "Reliable global delivery with white-glove service.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16v-2" />
        <path d="M3.29 7L12 12l8.71-5" />
        <path d="M12 22V12" />
        <circle cx="19" cy="17" r="3" />
        <path d="M21 15v2h-2" />
      </svg>
    ),
  },
];

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section className="relative bg-black py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-20">
            <span className="text-red-500 text-sm font-semibold tracking-[0.3em] uppercase">
              About Us
            </span>
            <h2 className="mt-4 text-4xl md:text-6xl font-black text-white">
              Built for the <span className="text-red-600">Drive</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Founded in 1999, we have been delivering automotive excellence for over two decades.
              From sourcing rare exotics to building track-ready monsters, we live and breathe cars.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-28">
          {stats.map((stat, i) => (
            <FadeInSection key={stat.label} delay={i * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl md:text-5xl font-black text-red-600">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            </FadeInSection>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <FadeInSection key={feature.title} delay={i * 0.15}>
              <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all hover:border-red-600/50">
                <div className="text-red-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
