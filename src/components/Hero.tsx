"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import RevealText from "@/components/RevealText";
import PharaohMask from "@/components/PharaohMask";
import GoldParticles from "@/components/GoldParticles";
import {
  EyeOfHorusIcon,
  AnkhIcon,
  ScarabIcon,
  FalconIcon,
  PyramidIcon,
  ScrollIndicatorIcon,
} from "@/components/icons/EgyptIcons";

const SIDE_ICONS = [EyeOfHorusIcon, AnkhIcon, PyramidIcon, ScarabIcon, FalconIcon];

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-grain relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-black pb-14 pt-32 sm:pt-36"
    >
      {/* Ambient cinematic backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_20%,_hsl(var(--gold)/0.16),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-20 h-1/2 bg-gradient-to-t from-black to-transparent" />
      <GoldParticles className="pointer-events-none absolute inset-0 -z-10" density={70} />

      {/* Vertical hieroglyph strip — desktop only */}
      <div className="pointer-events-none absolute left-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-7 xl:flex">
        <div className="h-14 w-px bg-gradient-to-b from-transparent to-gold/40" />
        {SIDE_ICONS.map((Icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 + i * 0.15, duration: 0.8 }}
          >
            <Icon className="h-5 w-5 text-gold/50" />
          </motion.div>
        ))}
        <div className="h-14 w-px bg-gradient-to-t from-transparent to-gold/40" />
      </div>

      {/* Vertical rotated label — desktop only */}
      <div className="pointer-events-none absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 xl:block">
        <span
          className="block text-[10px] tracking-[0.5em] text-gold/40"
          style={{ writingMode: "vertical-rl" }}
        >
          EST. IN THE VALLEY OF KINGS
        </span>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col-reverse items-center gap-10 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-16 xl:px-24">
        {/* Copy */}
        <div className="max-w-xl text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mb-6 flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.4em] text-gold/80 lg:justify-start"
          >
            <span className="h-px w-6 bg-gold/60" /> Pharao Accessories <span className="h-px w-6 bg-gold/60 lg:hidden" />
          </motion.span>

          <h1 className="font-headline text-[clamp(2.75rem,9.5vw,7.25rem)] font-semibold leading-[0.95] tracking-tight text-gold">
            <RevealText text="LEGACY." as="div" mode="mount" delay={0.85} className="text-gold" />
            <RevealText text="POWER." as="div" mode="mount" delay={1.05} className="text-gold" />
            <RevealText text="TIMELESS." as="div" mode="mount" delay={1.25} className="text-foreground" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.8 }}
            className="mx-auto mt-7 max-w-md text-balance text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0"
          >
            Inspired by the glory of ancient Egypt. Crafted for the modern elite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.8 }}
            className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center lg:justify-start"
          >
            <MagneticButton href="#collection">Explore Collection</MagneticButton>

            <button data-cursor="link" className="group flex items-center gap-3 text-foreground">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 transition-all group-hover:border-gold group-hover:bg-gold/10">
                <Play className="ml-0.5 h-3.5 w-3.5 fill-gold text-gold" />
              </span>
              <span className="text-left text-[11px] leading-tight">
                <span className="block font-semibold uppercase tracking-[0.2em] text-foreground">Watch</span>
                <span className="block text-muted-foreground">The Story</span>
              </span>
            </button>
          </motion.div>
        </div>

        {/* Pharaoh mask visual */}
        <div className="relative aspect-[3/4] w-[62%] max-w-[240px] shrink-0 sm:max-w-[280px] lg:w-[34vw] lg:max-w-[420px]">
          <PharaohMask className="relative h-full w-full" />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.35em] text-gold/60 sm:flex"
      >
        SCROLL
        <ScrollIndicatorIcon className="h-9 w-5 text-gold/50" />
      </motion.div>
    </section>
  );
}
