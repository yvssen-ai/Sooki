"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "@/components/MagneticButton";
import RevealText from "@/components/RevealText";

export default function LegacyBanner() {
  return (
    <section id="legacy" className="relative overflow-hidden bg-black px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_50%,_hsl(var(--gold)/0.08),_transparent_55%)]" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-8">
        <div className="order-1 flex justify-center lg:order-1 lg:justify-start">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[466/768] w-[62%] max-w-[260px] sm:max-w-[300px] lg:w-full lg:max-w-[380px]"
          >
            <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-gold/20 blur-[80px]" />
            <div className="animate-float-slow relative h-full w-full">
              <Image
                src="/images/ankh-legacy.png"
                alt="Golden ankh with ruby"
                fill
                sizes="(min-width: 1024px) 380px, 62vw"
                className="object-contain"
                style={{
                  maskImage:
                    "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.15) 82%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.15) 82%, transparent 100%)",
                }}
              />
            </div>
          </motion.div>
        </div>

        <div className="order-2 text-center lg:order-2 lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.4em] text-gold/80 lg:justify-start"
          >
            <span className="h-px w-6 bg-gold/60" /> Built Like A King
          </motion.span>

          <h2 className="font-headline text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1] text-foreground">
            <RevealText text="WEAR YOUR" className="block" delay={0.05} />
            <RevealText text="LEGACY" className="block text-gold" delay={0.15} />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mx-auto mt-6 max-w-md text-balance text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0"
          >
            More than accessories. It&rsquo;s your power, your story, your legacy — worn by those who refuse to be forgotten.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-9 flex justify-center lg:justify-start"
          >
            <MagneticButton href="#collection">Discover Now</MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
