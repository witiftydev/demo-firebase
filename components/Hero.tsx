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
    [0, 0.18, 0.58, 0.82],
    ["110vh", "8vh", "0vh", "-110vh"],
  );
  const carX = useTransform(
    smoothProgress,
    [0, 0.18, 0.5, 0.82],
    ["-2vw", "0vw", "0vw", "2vw"],
  );
  const carScale = useTransform(
    smoothProgress,
    [0, 0.15, 0.5, 0.82],
    [0.75, 1, 1, 0.78],
  );
  const carOpacity = useTransform(
    smoothProgress,
    [0, 0.05, 0.6, 0.82],
    [0, 1, 1, 0],
  );
  const textOpacity = useTransform(smoothProgress, [0, 0.32, 0.58], [1, 1, 0]);
  const revealY = useTransform(smoothProgress, [0.6, 0.78], [24, 0]);
  const revealOpacity = useTransform(smoothProgress, [0.58, 0.78], [0, 1]);
  const glowScale = useTransform(
    smoothProgress,
    [0, 0.18, 0.55, 0.82],
    [0.65, 1.15, 1.15, 0.55],
  );

  return (
    <section ref={ref} className="relative h-[500vh] overflow-visible">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-visible">
        <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ opacity: textOpacity }}
            className="text-6xl sm:text-7xl md:text-8xl font-black text-white leading-[0.85] tracking-tight"
          >
            PREMIUM
            <br />
            <span className="text-red-600">PERFORMANCE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ opacity: textOpacity }}
            className="mt-6 text-base md:text-lg text-gray-400 max-w-xl leading-relaxed"
          >
            Elite auto sales, custom builds, and precision parts &mdash;
            engineered for those who demand more.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ opacity: textOpacity }}
            className="mt-8 px-10 py-4 bg-red-600 text-white text-base font-bold rounded-full hover:bg-red-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-600/30 cursor-pointer"
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
          <div className="relative w-[320px] sm:w-[410px] md:w-[520px]">
            <img
              src="/verticalherocar.png"
              alt="Sports car"
              className="w-full h-auto object-contain brightness-[1.85] contrast-[1.25] saturate-[1.35] drop-shadow-[0_0_35px_rgba(220,38,38,0.55)]"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ y: revealY, opacity: revealOpacity }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center z-30"
        >
          <p className="text-lg sm:text-2xl md:text-4xl font-light text-white/60 tracking-[0.3em] uppercase">
            Your Dream Ride Awaits
          </p>
        </motion.div>
      </div>
    </section>
  );
}
