"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AnkhIcon, EyeOfHorusIcon, ScarabIcon, FalconIcon } from "@/components/icons/EgyptIcons";
import { BEAD_COLORS, type PlacedItem, type ChainStyle, type CharmIconId } from "@/lib/necklace-data";

const CHARM_ICONS: Record<CharmIconId, typeof AnkhIcon> = {
  ankh: AnkhIcon,
  eye: EyeOfHorusIcon,
  scarab: ScarabIcon,
  falcon: FalconIcon,
};

const P0 = { x: 50, y: 32 };
const P1 = { x: 230, y: 250 };
const P2 = { x: 410, y: 32 };

function pointOnCurve(t: number) {
  const mt = 1 - t;
  const x = mt * mt * P0.x + 2 * mt * t * P1.x + t * t * P2.x;
  const y = mt * mt * P0.y + 2 * mt * t * P1.y + t * t * P2.y;
  return { x: Number(x.toFixed(2)), y: Number(y.toFixed(2)) };
}

interface NecklaceCanvasProps {
  chain: ChainStyle;
  items: PlacedItem[];
  onRemove: (instanceId: string) => void;
}

export default function NecklaceCanvas({ chain, items, onRemove }: NecklaceCanvasProps) {
  const n = items.length;
  const tStart = 0.12;
  const tEnd = 0.88;

  return (
    <svg viewBox="0 0 460 300" className="h-full w-full overflow-visible">
      <defs>
        <radialGradient id="bead-shine" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="0.55" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Clasp anchors */}
      <circle cx={P0.x} cy={P0.y} r={5} fill={chain.color} opacity={0.8} />
      <circle cx={P2.x} cy={P2.y} r={5} fill={chain.color} opacity={0.8} />

      {/* Chain / cord */}
      {chain.id === "black-cord" ? (
        <path
          d={`M${P0.x},${P0.y} Q${P1.x},${P1.y} ${P2.x},${P2.y}`}
          fill="none"
          stroke={chain.color}
          strokeWidth={5}
          strokeLinecap="round"
        />
      ) : (
        <path
          d={`M${P0.x},${P0.y} Q${P1.x},${P1.y} ${P2.x},${P2.y}`}
          fill="none"
          stroke={chain.color}
          strokeWidth={2}
          strokeDasharray="1 7"
          strokeLinecap="round"
        />
      )}

      <AnimatePresence>
        {items.map((item, i) => {
          const t = n === 1 ? (tStart + tEnd) / 2 : tStart + ((tEnd - tStart) * i) / (n - 1);
          const { x, y } = pointOnCurve(t);
          const isCharm = item.material.kind === "charm";

          return (
            <motion.g
              key={item.instanceId}
              initial={{ opacity: 0, scale: 0, x, y: y - 20 }}
              animate={{ opacity: 1, scale: 1, x, y }}
              exit={{ opacity: 0, scale: 0, x, y }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="cursor-pointer"
              data-cursor="link"
              onClick={() => onRemove(item.instanceId)}
            >
              {isCharm ? (
                (() => {
                  const Icon = CHARM_ICONS[item.material.render as CharmIconId];
                  return <Icon x={-15} y={-6} width={30} height={30} className="text-gold drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" />;
                })()
              ) : (
                <>
                  <circle cx={0} cy={12} r={9} fill={BEAD_COLORS[item.material.render as keyof typeof BEAD_COLORS]} />
                  <circle cx={0} cy={12} r={9} fill="url(#bead-shine)" />
                </>
              )}
            </motion.g>
          );
        })}
      </AnimatePresence>
    </svg>
  );
}
