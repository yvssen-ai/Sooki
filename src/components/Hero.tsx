"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import RevealText from "@/components/RevealText";
import GoldParticles from "@/components/GoldParticles";
import MagneticButton from "@/components/MagneticButton";
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
            <span className="h-px w-6 bg-gold/60" /> Sooki Accessories <span className="h-px w-6 bg-gold/60 lg:hidden" />
          </motion.span>

          <h1 className="font-headline text-[clamp(2.75rem,9.5vw,7.25rem)] font-semibold leading-[0.95] tracking-tight text-gold">
            <RevealText text="LEGACY." as="div" mode="mount" delay={0.85} className="text-gold" />
            <RevealText text="POWER." as="div" mode="mount" delay={1.05} className="text-gold" />
            <RevealText text="TIMELESS." as="div" mode="mount" delay={1.25} className="text-foreground" />
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.55, duration: 0.7 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <MagneticButton href="/#collection" variant="outline">
              Shop Collection
            </MagneticButton>
            <MagneticButton href="/design" variant="solid">
              Design Your Own
            </MagneticButton>
          </motion.div>
        </div>

        {/* Golden mask visual */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative aspect-[639/768] w-[68%] max-w-[300px] shrink-0 sm:max-w-[360px] lg:w-[30vw] lg:max-w-[460px]"
        >
          <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-gold/25 blur-[90px]" />
          <div className="animate-float-slow relative h-full w-full">
            <Image
              src="/images/hero-nefertiti.jpg"
              alt="Egyptian queen holding an ankh"
              fill
              priority
              sizes="(min-width: 1024px) 30vw, 68vw"
              className="object-contain"
              style={{
                maskImage:
                  "radial-gradient(ellipse 85% 88% at 50% 50%, black 45%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,0.3) 82%, transparent 98%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 85% 88% at 50% 50%, black 45%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,0.3) 82%, transparent 98%)",
              }}
            />
            {/* Reinforcing vignette, kept subtle so more of the photo stays visible */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 85% 88% at 50% 50%, transparent 70%, rgba(0,0,0,0.35) 88%, black 100%)",
              }}
            />
          </div>
        </motion.div>
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
