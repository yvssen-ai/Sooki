"use client";

import { AnkhIcon, EyeOfHorusIcon, FalconIcon, ScarabIcon } from "@/components/icons/EgyptIcons";

export type ProductShape = "ring" | "bracelet" | "necklace";
export type ProductSymbol = "ankh" | "eye" | "falcon" | "scarab";

const SYMBOLS: Record<ProductSymbol, typeof AnkhIcon> = {
  ankh: AnkhIcon,
  eye: EyeOfHorusIcon,
  falcon: FalconIcon,
  scarab: ScarabIcon,
};

interface ProductIconProps {
  shape: ProductShape;
  symbol?: ProductSymbol;
  className?: string;
}

export default function ProductIcon({ shape, symbol, className }: ProductIconProps) {
  const Symbol = symbol ? SYMBOLS[symbol] : null;

  return (
    <div className={className}>
      <svg viewBox="0 0 200 200" className="h-full w-full overflow-visible text-gold">
        <defs>
          <linearGradient id={`band-${shape}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B8860B" />
            <stop offset="45%" stopColor="#FFD66B" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>

        {shape === "ring" && (
          <>
            <ellipse cx="100" cy="118" rx="52" ry="46" fill="none" stroke={`url(#band-${shape})`} strokeWidth="7" />
            <ellipse cx="100" cy="118" rx="52" ry="46" fill="none" stroke="black" strokeOpacity={0.25} strokeWidth="1.5" />
            <polygon points="100,52 112,68 100,84 88,68" fill={`url(#band-${shape})`} stroke="#FFEFC2" strokeWidth={0.6} />
          </>
        )}

        {shape === "bracelet" && (
          <>
            <ellipse cx="100" cy="100" rx="72" ry="52" fill="none" stroke={`url(#band-${shape})`} strokeWidth="10" />
            <ellipse cx="100" cy="100" rx="72" ry="52" fill="none" stroke="black" strokeOpacity={0.2} strokeWidth="2" />
            {[-1, 0, 1].map((i) => (
              <line
                key={i}
                x1={100 + i * 28}
                y1={49}
                x2={100 + i * 28}
                y2={62}
                stroke="black"
                strokeOpacity={0.35}
                strokeWidth={2}
              />
            ))}
          </>
        )}

        {shape === "necklace" && (
          <>
            <path
              d="M40 34C40 34 55 78 100 78C145 78 160 34 160 34"
              fill="none"
              stroke={`url(#band-${shape})`}
              strokeWidth="3"
              strokeDasharray="1 9"
              strokeLinecap="round"
            />
            <path d="M100 78L100 108" stroke={`url(#band-${shape})`} strokeWidth="2.5" />
          </>
        )}

        {Symbol && (
          <Symbol
            x={shape === "necklace" ? 72 : 72}
            y={shape === "necklace" ? 100 : shape === "bracelet" ? 62 : 80}
            width={56}
            height={56}
            className="text-gold"
          />
        )}
      </svg>
    </div>
  );
}
