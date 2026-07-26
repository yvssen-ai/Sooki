"use client";

import { motion } from "framer-motion";

const HEAD_POINTS =
  "100,0 118,50 150,28 182,50 200,0 208,70 190,86 196,140 178,150 163,230 150,248 137,230 122,150 104,140 110,86 92,70";

const BODY_POINTS = "120,225 180,225 210,270 240,310 250,420 50,420 60,310 90,270";

function range(n: number) {
  return Array.from({ length: n }, (_, i) => i);
}

export default function AnubisFigure({ className }: { className?: string }) {
  const collarLines = range(20);

  return (
    <div className={className}>
      <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-gold/15 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="animate-float-slow"
      >
        <svg viewBox="0 0 300 420" className="h-full w-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]">
          <defs>
            <linearGradient id="anubisBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#050505" />
              <stop offset="55%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#0b0b0b" />
            </linearGradient>
            <clipPath id="anubisBodyClip">
              <polygon points={BODY_POINTS} />
            </clipPath>
          </defs>

          {/* Body / robe */}
          <polygon points={BODY_POINTS} fill="url(#anubisBody)" stroke="#D4AF37" strokeOpacity={0.45} strokeWidth={1.5} />
          <g clipPath="url(#anubisBodyClip)">
            {collarLines.map((i) => {
              const cx = 150;
              const cy = 250;
              const angle = (i / (collarLines.length - 1)) * Math.PI - Math.PI / 2;
              const x2 = Number((cx + Math.sin(angle) * 130).toFixed(2));
              const y2 = Number((cy + Math.cos(angle) * 60 + 40).toFixed(2));
              return (
                <line
                  key={i}
                  x1={cx}
                  y1={cy + 10}
                  x2={x2}
                  y2={y2}
                  stroke="#FFD66B"
                  strokeOpacity={i % 2 === 0 ? 0.45 : 0.2}
                  strokeWidth={1.2}
                />
              );
            })}
            <line x1="30" y1="360" x2="270" y2="360" stroke="#D4AF37" strokeOpacity={0.5} strokeWidth={2} />
          </g>

          {/* Head + ears + snout */}
          <polygon points={HEAD_POINTS} fill="url(#anubisBody)" stroke="#D4AF37" strokeOpacity={0.55} strokeWidth={1.5} />
          {/* Ear inner gold trim */}
          <line x1="100" y1="0" x2="118" y2="50" stroke="#FFD66B" strokeOpacity={0.4} strokeWidth={1} />
          <line x1="200" y1="0" x2="182" y2="50" stroke="#FFD66B" strokeOpacity={0.4} strokeWidth={1} />
          {/* Eyes */}
          <ellipse cx="128" cy="98" rx="4.5" ry="3" fill="#FFD66B" />
          <ellipse cx="172" cy="98" rx="4.5" ry="3" fill="#FFD66B" />
          {/* Snout ridge line */}
          <line x1="150" y1="145" x2="150" y2="240" stroke="#D4AF37" strokeOpacity={0.35} strokeWidth={1} />
        </svg>
      </motion.div>

      {/* Flickering torch glows */}
      <motion.div
        className="absolute -left-6 top-1/4 -z-10 h-24 w-24 rounded-full bg-gold-glow/40 blur-3xl"
        animate={{ opacity: [0.3, 0.7, 0.4, 0.6, 0.3], scale: [1, 1.1, 0.95, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-6 bottom-1/4 -z-10 h-20 w-20 rounded-full bg-gold/40 blur-3xl"
        animate={{ opacity: [0.4, 0.6, 0.3, 0.7, 0.4], scale: [1, 0.95, 1.1, 1, 1] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      />
    </div>
  );
}
