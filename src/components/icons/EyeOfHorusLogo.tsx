import type { SVGProps } from "react";

/** Bold solid Eye of Horus mark used as the brand logo (as opposed to the thin line-art icon used decoratively elsewhere). */
export default function EyeOfHorusLogo(props: SVGProps<SVGSVGElement>) {
  const spiral = buildSpiral(54, 172, 22, 2.4, 44);

  return (
    <svg viewBox="0 0 240 220" fill="none" {...props}>
      {/* Wavy brow */}
      <path
        d="M14,36 Q46,14 78,36 T142,36 T206,36"
        stroke="currentColor"
        strokeWidth={12}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M10,60 Q46,38 82,60 T154,60 T222,54"
        stroke="currentColor"
        strokeWidth={12}
        strokeLinecap="round"
        fill="none"
      />

      {/* Almond eye */}
      <ellipse cx="120" cy="128" rx="95" ry="24" stroke="currentColor" strokeWidth={11} fill="none" />
      <circle cx="120" cy="128" r="15" fill="currentColor" />

      {/* Falcon cheek marking */}
      <path d="M197,113 L233,152 L203,135 Z" fill="currentColor" />

      {/* Spiral curl */}
      <path d={spiral} stroke="currentColor" strokeWidth={9} strokeLinecap="round" fill="none" />
    </svg>
  );
}

function buildSpiral(cx: number, cy: number, startRadius: number, turns: number, steps: number) {
  const points: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const angle = t * turns * Math.PI * 2;
    const radius = startRadius * (1 - t) + 2;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    points.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return points.join(" ");
}
