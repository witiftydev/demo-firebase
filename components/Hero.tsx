"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 32,
    mass: 0.6,
  });

  const carY = useTransform(
    smoothProgress,
    [0, 0.15, 0.42, 0.68, 0.92],
    ["18vh", "8vh", "-4vh", "-42vh", "-140vh"],
  );
  const carX = useTransform(
    smoothProgress,
    [0, 0.18, 0.5, 0.78],
    ["-1.5vw", "0vw", "0vw", "1.5vw"],
  );
  const carScale = useTransform(
    smoothProgress,
    [0, 0.1, 0.48, 0.78],
    [0.76, 0.88, 1, 0.84],
  );
  const carOpacity = useTransform(
    smoothProgress,
    [0, 0.02, 0.08, 0.62, 0.82],
    [0.78, 0.9, 1, 1, 0],
  );
  const textOpacity = useTransform(smoothProgress, [0, 0.32, 0.6], [1, 1, 0]);
  const revealY = useTransform(smoothProgress, [0.62, 0.78], [30, 0]);
  const revealOpacity = useTransform(smoothProgress, [0.6, 0.78], [0, 1]);
  const glowScale = useTransform(
    smoothProgress,
    [0, 0.18, 0.55, 0.82],
    [0.65, 1.15, 1.15, 0.55],
  );

  return (
    <section ref={ref} className="relative h-[500vh] overflow-visible">
      <div className="sticky top-0 h-screen flex flex-col overflow-visible">
        <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-32 sm:pt-40">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ opacity: textOpacity }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.72] tracking-[0.15em] uppercase text-center w-full"
          >
            Premium
            <br />
            <span className="text-red-600">Performance</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ opacity: textOpacity }}
            className="mt-3 max-w-xl text-[0.65rem] sm:text-xs md:text-sm text-gray-300/85 leading-6 tracking-[0.36em] uppercase"
          >
            Elite auto sales, custom builds & precision parts
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ opacity: textOpacity }}
            className="mt-5 inline-flex items-center gap-3 rounded-full border border-red-500/40 bg-red-600 px-7 py-3.5 text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-[0_0_35px_rgba(220,38,38,0.25)] transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_45px_rgba(220,38,38,0.4)] active:scale-95"
          >
            Explore Collection
          </motion.button>
        </div>

        <motion.div
          style={{
            y: carY,
            x: carX,
            opacity: carOpacity,
            scale: carScale,
          }}
          className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
        >
          <motion.div
            style={{
              scale: glowScale,
              background:
                "radial-gradient(circle, rgba(220,38,38,0.28) 0%, rgba(127,29,29,0.14) 48%, rgba(0,0,0,0) 72%)",
            }}
            className="absolute w-[520px] sm:w-[640px] md:w-[760px] aspect-square rounded-full blur-3xl"
          />
          <div className="relative w-[320px] sm:w-[410px] md:w-[520px] mt-92 ml-20">
            <img
              src="/verticalherocar.png"
              alt="Sports car"
              className="w-full h-auto object-contain brightness-[1.9] contrast-[1.3] saturate-[1.4] drop-shadow-[0_0_40px_rgba(220,38,38,0.58)]"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ y: revealY, opacity: revealOpacity }}
          className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 text-center z-30"
        >
          <p className="text-sm sm:text-base md:text-2xl font-medium text-white/60 tracking-[0.45em] uppercase">
            Your Dream Ride Awaits
          </p>
        </motion.div>
      </div>
    </section>
  );
}
