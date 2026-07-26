"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const SILHOUETTE_POINTS =
  "114,0 186,0 198,30 192,54 234,78 264,165 252,234 300,276 300,400 0,400 0,276 48,234 36,165 66,78 108,54 102,30";

function range(n: number) {
  return Array.from({ length: n }, (_, i) => i);
}

export default function PharaohMask({ className }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 60, damping: 15 });
  const springY = useSpring(mvY, { stiffness: 60, damping: 15 });
  const rotateX = useTransform(springY, [-1, 1], [8, -8]);
  const rotateY = useTransform(springX, [-1, 1], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mvX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    mvY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };
  const handleMouseLeave = () => {
    mvX.set(0);
    mvY.set(0);
  };

  const stripeYs = range(11).map((i) => 44 + i * 24);
  const collarLines = range(24);

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ perspective: 1200 }}
    >
      {/* Ambient glow behind the mask */}
      <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-gold/25 blur-[90px]" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 animate-[spin_50s_linear_infinite] rounded-full border border-gold/10" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 animate-[spin_70s_linear_infinite_reverse] rounded-full border border-dashed border-gold/10" />

      <motion.div
        className="animate-float-slow"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      >
        <svg viewBox="0 0 300 400" className="h-full w-full drop-shadow-[0_30px_60px_rgba(212,175,55,0.25)]">
          <defs>
            <linearGradient id="goldBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8a6412" />
              <stop offset="30%" stopColor="#D4AF37" />
              <stop offset="55%" stopColor="#FFEFC2" />
              <stop offset="75%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#7a5a12" />
            </linearGradient>
            <radialGradient id="faceWell" cx="50%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#1a1206" />
              <stop offset="100%" stopColor="#050505" />
            </radialGradient>
            <clipPath id="silhouetteClip">
              <polygon points={SILHOUETTE_POINTS} />
            </clipPath>
          </defs>

          {/* Base silhouette */}
          <polygon points={SILHOUETTE_POINTS} fill="url(#goldBody)" stroke="#FFD66B" strokeOpacity={0.5} strokeWidth={1} />

          {/* Nemes headdress stripes, clipped to silhouette */}
          <g clipPath="url(#silhouetteClip)">
            {stripeYs.map((y, i) => (
              <rect key={i} x={0} y={y} width={300} height={10} fill="black" fillOpacity={0.32} />
            ))}
            {/* Vertical shading for depth */}
            <rect x={0} y={0} width={110} height={400} fill="black" fillOpacity={0.18} />
            <rect x={190} y={0} width={110} height={400} fill="white" fillOpacity={0.05} />
          </g>

          {/* Uraeus cobra crest */}
          <g>
            <ellipse cx="150" cy="10" rx="11" ry="15" fill="url(#goldBody)" stroke="#FFD66B" strokeWidth={0.8} />
            <polygon points="150,-8 143,10 157,10" fill="url(#goldBody)" />
          </g>

          {/* Face well */}
          <ellipse cx="150" cy="150" rx="46" ry="56" fill="url(#faceWell)" stroke="#D4AF37" strokeOpacity={0.6} strokeWidth={1.5} />

          {/* Eyes */}
          <ellipse cx="130" cy="140" rx="9" ry="3.4" fill="#FFD66B" />
          <ellipse cx="170" cy="140" rx="9" ry="3.4" fill="#FFD66B" />
          <ellipse cx="130" cy="140" rx="2.6" ry="2.6" fill="#050505" />
          <ellipse cx="170" cy="140" rx="2.6" ry="2.6" fill="#050505" />

          {/* Brow lines */}
          <line x1="119" y1="130" x2="141" y2="126" stroke="#D4AF37" strokeWidth={2} strokeLinecap="round" />
          <line x1="181" y1="130" x2="159" y2="126" stroke="#D4AF37" strokeWidth={2} strokeLinecap="round" />

          {/* Nose */}
          <line x1="150" y1="146" x2="150" y2="176" stroke="#D4AF37" strokeWidth={2} strokeLinecap="round" />
          {/* Mouth */}
          <line x1="136" y1="188" x2="164" y2="188" stroke="#D4AF37" strokeWidth={2} strokeLinecap="round" />

          {/* Divine beard */}
          <polygon points="134,206 166,206 150,264" fill="url(#goldBody)" stroke="#FFD66B" strokeOpacity={0.5} strokeWidth={1} />
          {range(6).map((i) => (
            <line
              key={i}
              x1={140 + i * 4}
              y1={210 + i * 2}
              x2={140 + i * 4}
              y2={252}
              stroke="black"
              strokeOpacity={0.2}
              strokeWidth={0.6}
            />
          ))}

          {/* Broad collar / shoulders, radiating sunburst */}
          <g clipPath="url(#silhouetteClip)">
            {collarLines.map((i) => {
              const angle = (i / (collarLines.length - 1)) * Math.PI - Math.PI / 2;
              const cx = 150;
              const cy = 300;
              const inner = 20;
              const outer = 190;
              const x1 = Number((cx + Math.sin(angle) * inner).toFixed(2));
              const y1 = Number((cy + Math.cos(angle) * inner * 0.3 + 30).toFixed(2));
              const x2 = Number((cx + Math.sin(angle) * outer).toFixed(2));
              const y2 = Number((cy + Math.cos(angle) * outer * 0.55 + 40).toFixed(2));
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={i % 2 === 0 ? "#050505" : "#FFD66B"}
                  strokeOpacity={i % 2 === 0 ? 0.35 : 0.55}
                  strokeWidth={1.4}
                />
              );
            })}
            <circle cx="150" cy="310" r="14" fill="none" stroke="#FFD66B" strokeOpacity={0.6} strokeWidth={1.5} />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
