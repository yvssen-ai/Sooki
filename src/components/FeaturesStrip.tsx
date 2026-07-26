"use client";

import { motion } from "framer-motion";
import { EyeOfHorusIcon, PyramidIcon, AnkhIcon, FalconIcon } from "@/components/icons/EgyptIcons";

const FEATURES = [
  {
    icon: EyeOfHorusIcon,
    title: "Ancient Inspiration",
    desc: "Every piece reflects the greatness of pharaonic legacy.",
  },
  {
    icon: PyramidIcon,
    title: "Premium Quality",
    desc: "Crafted with the finest materials for timeless durability.",
  },
  {
    icon: AnkhIcon,
    title: "Bold & Timeless",
    desc: "Designed for those who lead, inspired by those who ruled.",
  },
  {
    icon: FalconIcon,
    title: "Exclusive Designs",
    desc: "Limited drops. Unique pieces. Never mass produced.",
  },
];

export default function FeaturesStrip() {
  return (
    <section className="relative border-y border-gold/10 bg-black px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-0 lg:divide-x lg:divide-gold/10">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center px-2 text-center lg:px-8"
          >
            <f.icon animate delay={i * 0.15} className="mb-4 h-9 w-9 text-gold sm:h-10 sm:w-10" />
            <h3 className="mb-2 font-headline text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground sm:text-xs">
              {f.title}
            </h3>
            <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-xs">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
