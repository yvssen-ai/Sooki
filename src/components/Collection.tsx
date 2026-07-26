"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Search, Sparkles } from "lucide-react";
import { COLLECTION_CATEGORIES, PRODUCTS } from "@/lib/collection-data";
import ProductIcon from "@/components/ProductIcon";
import MagneticButton from "@/components/MagneticButton";
import { cn } from "@/lib/utils";

export default function Collection() {
  const [active, setActive] = useState<(typeof COLLECTION_CATEGORIES)[number]>("All");
  const trackRef = useRef<HTMLDivElement>(null);

  const filtered = active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="collection" className="bg-grain relative bg-black px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-gold/5 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center sm:mb-14"
        >
          <span className="mb-4 flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.4em] text-gold/80">
            <span className="h-px w-6 bg-gold/60" /> Our Collection <span className="h-px w-6 bg-gold/60" />
          </span>
          <h2 className="font-headline text-3xl italic text-gold sm:text-5xl lg:text-6xl">Symbols of Power</h2>
        </motion.div>

        {/* Category tabs */}
        <div className="hide-scrollbar mb-10 flex justify-start gap-6 overflow-x-auto sm:mb-14 sm:justify-center">
          {COLLECTION_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              data-cursor="link"
              className={cn(
                "relative shrink-0 whitespace-nowrap pb-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors",
                active === cat ? "text-gold" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
              {active === cat && (
                <motion.span
                  layoutId="collection-tab-underline"
                  className="absolute -bottom-0.5 left-0 h-px w-full bg-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* Product carousel */}
        <div className="relative">
          <button
            onClick={() => scroll(-1)}
            data-cursor="link"
            aria-label="Previous"
            className="absolute left-0 top-1/2 z-20 hidden h-10 w-10 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-black/70 text-gold backdrop-blur transition-all hover:border-gold hover:bg-gold/10 sm:flex"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll(1)}
            data-cursor="link"
            aria-label="Next"
            className="absolute right-0 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 translate-x-4 items-center justify-center rounded-full border border-gold/30 bg-black/70 text-gold backdrop-blur transition-all hover:border-gold hover:bg-gold/10 sm:flex"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div
            ref={trackRef}
            className="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, rotate: 1.5 }}
                  className="group w-[64vw] shrink-0 snap-start sm:w-[280px]"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-gold/15 bg-gradient-to-b from-[#0e0e0e] to-black transition-all duration-500 group-hover:border-gold/50 group-hover:shadow-[0_0_50px_-10px_hsl(var(--gold)/0.5)]">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_hsl(var(--gold)/0.18),_transparent_65%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                    {product.isNew && (
                      <span className="absolute left-3 top-3 z-10 rounded-full border border-gold/40 bg-black/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-gold">
                        New
                      </span>
                    )}
                    <button
                      data-cursor="link"
                      aria-label="Quick view"
                      className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 bg-black/60 text-gold opacity-0 transition-all duration-300 group-hover:opacity-100"
                    >
                      <Search className="h-3.5 w-3.5" />
                    </button>
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(min-width: 640px) 280px, 64vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center p-10"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ProductIcon
                          shape={product.shape}
                          symbol={product.symbol}
                          className="h-full w-full transition-transform duration-500 group-hover:scale-110"
                        />
                      </motion.div>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between px-1">
                    <h3 className="font-headline text-xs uppercase tracking-[0.15em] text-foreground sm:text-sm">
                      {product.name}
                    </h3>
                    <span className="text-xs font-medium text-gold sm:text-sm">${product.price.toFixed(2)}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <MagneticButton variant="outline">
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" /> View All Products
            </span>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
