"use client";

import { motion, type Variants } from "framer-motion";
import type { SVGProps } from "react";

export interface EgyptIconProps extends SVGProps<SVGSVGElement> {
  /** Animate the strokes drawing in when scrolled into view. */
  animate?: boolean;
  /** Delay in seconds before the draw starts. */
  delay?: number;
}

const drawVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 1.4, delay, ease: [0.65, 0, 0.35, 1] }, opacity: { duration: 0.4, delay } },
  }),
};

function IconShell({
  animate,
  delay = 0,
  children,
  ...props
}: EgyptIconProps & { children: React.ReactNode }) {
  if (!animate) {
    return (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
        {children}
      </svg>
    );
  }
  return (
    <motion.svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      custom={delay}
      {...(props as any)}
    >
      {children}
    </motion.svg>
  );
}

const P = motion.path;

export function EyeOfHorusIcon({ animate, delay, ...props }: EgyptIconProps) {
  return (
    <IconShell animate={animate} delay={delay} {...props}>
      <P variants={drawVariants} d="M6 32C6 32 18 20 32 20C46 20 58 32 58 32C58 32 46 40 32 40C18 40 6 32 6 32Z" />
      <P variants={drawVariants} d="M22 32a10 10 0 1 0 20 0a10 10 0 1 0 -20 0" custom={0.1} />
      <P variants={drawVariants} d="M32 32m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" custom={0.2} />
      <P variants={drawVariants} d="M32 40C32 40 30 48 26 52C24 54 22 54 20 53" custom={0.25} />
      <P variants={drawVariants} d="M8 30C8 30 4 28 2 24" custom={0.3} />
      <P variants={drawVariants} d="M56 30C56 30 60 28 62 24" custom={0.3} />
      <P variants={drawVariants} d="M30 19C30 19 30 12 33 8" custom={0.35} />
    </IconShell>
  );
}

export function AnkhIcon({ animate, delay, ...props }: EgyptIconProps) {
  return (
    <IconShell animate={animate} delay={delay} {...props}>
      <P variants={drawVariants} d="M32 8a10 10 0 1 0 0.001 0Z" />
      <P variants={drawVariants} d="M32 26v30" custom={0.15} />
      <P variants={drawVariants} d="M18 40h28" custom={0.3} />
    </IconShell>
  );
}

export function ScarabIcon({ animate, delay, ...props }: EgyptIconProps) {
  return (
    <IconShell animate={animate} delay={delay} {...props}>
      <P variants={drawVariants} d="M32 14c-5 0-8 4-8 4s-9 0-13 8c-3 6-2 13 2 13" />
      <P variants={drawVariants} d="M32 14c5 0 8 4 8 4s9 0 13 8c3 6 2 13-2 13" custom={0.05} />
      <P variants={drawVariants} d="M32 22c-9 0-15 7-15 17c0 9 7 15 15 15s15-6 15-15c0-10-6-17-15-17Z" custom={0.15} />
      <P variants={drawVariants} d="M32 22v32" custom={0.3} />
      <P variants={drawVariants} d="M20 32c4 3 8 4 12 4s8-1 12-4" custom={0.35} />
      <P variants={drawVariants} d="M20 44c4-3 8-4 12-4s8 1 12 4" custom={0.4} />
      <P variants={drawVariants} d="M32 8v8" custom={0.45} />
      <P variants={drawVariants} d="M26 10l4 5" custom={0.48} />
      <P variants={drawVariants} d="M38 10l-4 5" custom={0.48} />
    </IconShell>
  );
}

export function FalconIcon({ animate, delay, ...props }: EgyptIconProps) {
  return (
    <IconShell animate={animate} delay={delay} {...props}>
      <P variants={drawVariants} d="M32 12c3 4 3 9 1 13c8-4 17-3 23 3c-8 1-14 5-17 10c6 1 11 5 13 10c-9-3-17-2-22 3" />
      <P variants={drawVariants} d="M32 12c-3 4-3 9-1 13c-8-4-17-3-23 3c8 1 14 5 17 10c-6 1-11 5-13 10c9-3 17-2 22 3" custom={0.1} />
      <P variants={drawVariants} d="M32 25c2 0 3 2 3 4s-1 4-3 4s-3-2-3-4s1-4 3-4Z" custom={0.3} />
      <P variants={drawVariants} d="M32 33v20" custom={0.4} />
    </IconShell>
  );
}

export function PyramidIcon({ animate, delay, ...props }: EgyptIconProps) {
  return (
    <IconShell animate={animate} delay={delay} {...props}>
      <P variants={drawVariants} d="M32 10L58 50H6L32 10Z" />
      <P variants={drawVariants} d="M32 10L40 50" custom={0.2} />
      <P variants={drawVariants} d="M32 10L24 50" custom={0.2} />
      <P variants={drawVariants} d="M6 50H58" custom={0.35} />
      <P variants={drawVariants} d="M14 50l6-10M46 50l-6-10" custom={0.4} />
    </IconShell>
  );
}

export function WingedSunIcon({ animate, delay, ...props }: EgyptIconProps) {
  return (
    <IconShell animate={animate} delay={delay} {...props}>
      <P variants={drawVariants} d="M32 24a8 8 0 1 0 0.001 0Z" />
      <P variants={drawVariants} d="M24 30C18 26 10 26 2 30c6 3 8 6 8 9c4-2 9-2 14 1" custom={0.15} />
      <P variants={drawVariants} d="M40 30c6-4 14-4 22 0c-6 3-8 6-8 9c-4-2-9-2-14 1" custom={0.15} />
      <P variants={drawVariants} d="M18 20c3-2 6-2 8 0M46 20c-3-2-6-2-8 0" custom={0.3} />
    </IconShell>
  );
}

export function ScrollIndicatorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 40" fill="none" {...props}>
      <rect x="1" y="1" width="22" height="38" rx="11" stroke="currentColor" strokeWidth="1.2" opacity={0.5} />
      <motion.circle
        cx="12"
        cy="10"
        r="3"
        fill="currentColor"
        animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}
