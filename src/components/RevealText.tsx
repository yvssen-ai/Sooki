"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  text: string;
  as?: "span" | "div";
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  /** "view": trigger on scroll into view (default). "mount": trigger immediately on mount, useful for hero copy revealed right after the loading screen. */
  mode?: "view" | "mount";
}

const letterVariants: Variants = {
  hidden: { y: "110%" },
  visible: { y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

/** Splits text into characters and reveals each one via a clip-path mask, like a physical curtain lifting. */
export default function RevealText({
  text,
  as = "span",
  className,
  delay = 0,
  stagger = 0.028,
  once = true,
  mode = "view",
}: RevealTextProps) {
  const Wrapper = motion[as];
  const letters = Array.from(text);

  const containerProps =
    mode === "view"
      ? { whileInView: "visible", viewport: { once, amount: 0.6 } }
      : { animate: "visible" };

  return (
    <Wrapper
      className={cn("inline-block", className)}
      initial="hidden"
      {...containerProps}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {letters.map((ch, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span className="inline-block" variants={letterVariants}>
            {ch === " " ? " " : ch}
          </motion.span>
        </span>
      ))}
    </Wrapper>
  );
}
