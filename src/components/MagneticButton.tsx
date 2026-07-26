"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "solid" | "outline";
  strength?: number;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = "solid",
  strength = 0.4,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const spawnRipple = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700);
    onClick?.();
  };

  const base =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 h-14 text-xs font-semibold uppercase tracking-[0.25em] transition-colors duration-300";
  const solid = "bg-gradient-to-r from-gold-antique via-gold to-gold-glow text-black hover:shadow-[0_0_45px_-6px_hsl(var(--gold)/0.7)]";
  const outline = "border border-gold/50 text-foreground hover:border-gold hover:bg-gold/10";

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={spawnRipple}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.94 }}
      whileHover={{ scale: 1.04 }}
      data-cursor="link"
      className={cn(base, variant === "solid" ? solid : outline, className)}
    >
      <span className="relative z-10">{children}</span>
      {variant === "solid" && (
        <span className="absolute inset-0 -z-0 animate-shimmer bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.5)_50%,transparent_65%)]" />
      )}
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          initial={{ scale: 0, opacity: 0.45 }}
          animate={{ scale: 5, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="pointer-events-none absolute z-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60"
          style={{ left: r.x, top: r.y }}
        />
      ))}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {inner}
      </Link>
    );
  }

  return inner;
}
