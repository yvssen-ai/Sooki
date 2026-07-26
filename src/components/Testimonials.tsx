"use client";

import { Star } from "lucide-react";

const TESTIMONIALS = [
  { name: "Amira K.", quote: "The Pharaoh Ring feels like it was pulled from a museum vault. Weight, finish, presence — all flawless.", role: "Cairo, EG" },
  { name: "Daniel R.", quote: "I've bought from a dozen luxury jewelers. Pharao's Ankh Pendant is the first piece that felt like a story, not a product.", role: "Dubai, UAE" },
  { name: "Sara M.", quote: "Unboxing this was cinematic in itself. The Horus Necklace is now the only thing I reach for.", role: "London, UK" },
  { name: "Youssef T.", quote: "Bold without being loud. The Egyptian Bracelet gets stopped and asked about constantly.", role: "New York, US" },
  { name: "Layla H.", quote: "Exclusive is not marketing here — it's real. Limited drops, real craftsmanship, real legacy.", role: "Riyadh, SA" },
];

export default function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="relative overflow-hidden border-y border-gold/10 bg-black py-20 sm:py-24">
      <div className="mx-auto mb-12 max-w-2xl px-5 text-center sm:mb-16">
        <span className="mb-4 flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.4em] text-gold/80">
          <span className="h-px w-6 bg-gold/60" /> Voices of the Elite <span className="h-px w-6 bg-gold/60" />
        </span>
        <h2 className="font-headline text-3xl italic text-gold sm:text-5xl">What They Say</h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent sm:w-32" />

        <div className="flex w-max animate-marquee-reverse gap-6 px-5">
          {loop.map((t, i) => (
            <div
              key={i}
              className="w-[78vw] shrink-0 rounded-2xl border border-gold/15 bg-gradient-to-b from-[#0e0e0e] to-black p-7 transition-colors hover:border-gold/40 sm:w-[360px]"
            >
              <div className="mb-4 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-gold" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-foreground/85">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 font-headline text-xs text-gold">
                  {t.name.charAt(0)}
                </div>
                <div className="leading-tight">
                  <p className="text-xs font-medium text-foreground">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
