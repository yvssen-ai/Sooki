"use client";

import { useMemo, useState } from "react";
import { motion, Reorder } from "framer-motion";
import { RotateCcw, Trash2, ShoppingBag, ArrowLeft, GripVertical, X } from "lucide-react";
import Link from "next/link";
import NecklaceCanvas from "@/components/design/NecklaceCanvas";
import MagneticButton from "@/components/MagneticButton";
import RevealText from "@/components/RevealText";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import {
  CHAIN_STYLES,
  CHARMS,
  BEADS,
  BEAD_COLORS,
  BASE_NECKLACE_PRICE,
  MAX_PLACED_ITEMS,
  type ChainId,
  type Material,
  type PlacedItem,
} from "@/lib/necklace-data";
import { AnkhIcon, EyeOfHorusIcon, ScarabIcon, FalconIcon } from "@/components/icons/EgyptIcons";
import type { CharmIconId } from "@/lib/necklace-data";

const CHARM_ICONS: Record<CharmIconId, typeof AnkhIcon> = {
  ankh: AnkhIcon,
  eye: EyeOfHorusIcon,
  scarab: ScarabIcon,
  falcon: FalconIcon,
};

export default function DesignStudio() {
  const [chainId, setChainId] = useState<ChainId>("gold");
  const [items, setItems] = useState<PlacedItem[]>([]);
  const { toast } = useToast();

  const chain = CHAIN_STYLES.find((c) => c.id === chainId)!;

  const total = useMemo(() => {
    const materialsTotal = items.reduce((sum, item) => sum + item.material.price, 0);
    return BASE_NECKLACE_PRICE + chain.priceModifier + materialsTotal;
  }, [items, chain]);

  const isFull = items.length >= MAX_PLACED_ITEMS;

  const addMaterial = (material: Material) => {
    if (isFull) return;
    setItems((prev) => [...prev, { instanceId: `${material.id}-${Date.now()}-${Math.random()}`, material }]);
  };

  const removeItem = (instanceId: string) => {
    setItems((prev) => prev.filter((item) => item.instanceId !== instanceId));
  };

  const undoLast = () => setItems((prev) => prev.slice(0, -1));
  const clearAll = () => setItems([]);

  const handleAddToCart = () => {
    toast({
      title: "Added to your bag",
      description: `Your one-of-a-kind necklace — ${chain.name}, ${items.length} piece${items.length === 1 ? "" : "s"} — $${total.toFixed(2)}`,
    });
  };

  return (
    <section className="bg-grain relative overflow-hidden bg-black px-5 py-24 sm:px-8 sm:py-28 lg:px-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,_hsl(var(--gold)/0.1),_transparent_55%)]" />

      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          data-cursor="link"
          className="mb-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="mb-4 flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.4em] text-gold/80">
            <span className="h-px w-6 bg-gold/60" /> Design Studio <span className="h-px w-6 bg-gold/60" />
          </span>
          <h1 className="font-headline text-[clamp(2rem,6vw,4rem)] font-semibold leading-[1.05] text-foreground">
            <RevealText text="CRAFT YOUR OWN" className="block" delay={0.05} />
            <RevealText text="LEGACY" className="block text-gold" delay={0.15} />
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
            Choose a chain, then click charms and beads to build a necklace that&rsquo;s entirely yours. Drag a piece
            in the list below to reorder it, or click it on the chain to remove it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          {/* Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center justify-center rounded-3xl border border-gold/15 bg-gradient-to-b from-[#0e0e0e] to-black p-6 sm:p-10"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_at_50%_30%,_hsl(var(--gold)/0.12),_transparent_65%)]" />
            <div className="aspect-[460/300] w-full">
              <NecklaceCanvas chain={chain} items={items} onRemove={removeItem} />
            </div>

            {items.length === 0 && (
              <p className="mt-4 text-center text-xs text-muted-foreground/70">
                Your necklace is empty — add a charm or bead to begin.
              </p>
            )}

            {items.length > 0 && (
              <div className="mt-5 w-full">
                <p className="mb-2 text-center text-[9px] uppercase tracking-[0.25em] text-muted-foreground/60">
                  Drag to reorder
                </p>
                <Reorder.Group
                  as="div"
                  axis="x"
                  values={items}
                  onReorder={setItems}
                  className="flex flex-wrap items-center justify-center gap-2"
                >
                  {items.map((item) => {
                    const isCharm = item.material.kind === "charm";
                    const CharmIcon = isCharm ? CHARM_ICONS[item.material.render as CharmIconId] : null;
                    return (
                      <Reorder.Item
                        key={item.instanceId}
                        value={item}
                        data-cursor="link"
                        className="flex cursor-grab items-center gap-1.5 rounded-full border border-gold/20 bg-black/40 py-1.5 pl-2 pr-1.5 active:cursor-grabbing"
                      >
                        <GripVertical className="h-3 w-3 shrink-0 text-gold/40" />
                        {CharmIcon ? (
                          <CharmIcon className="h-4 w-4 shrink-0 text-gold" />
                        ) : (
                          <span
                            className="h-3.5 w-3.5 shrink-0 rounded-full border border-black/30"
                            style={{ backgroundColor: BEAD_COLORS[item.material.render as keyof typeof BEAD_COLORS] }}
                          />
                        )}
                        <button
                          onClick={() => removeItem(item.instanceId)}
                          aria-label={`Remove ${item.material.name}`}
                          data-cursor="link"
                          className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-gold"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Reorder.Item>
                    );
                  })}
                </Reorder.Group>
              </div>
            )}

            <div className="mt-6 flex w-full items-center justify-between border-t border-gold/10 pt-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Your Design</p>
                <p className="font-headline text-2xl text-gold">${total.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={undoLast}
                  disabled={items.length === 0}
                  data-cursor="link"
                  aria-label="Undo last piece"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 text-gold transition-all hover:border-gold hover:bg-gold/10 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={clearAll}
                  disabled={items.length === 0}
                  data-cursor="link"
                  aria-label="Clear all pieces"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 text-gold transition-all hover:border-gold hover:bg-gold/10 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <MagneticButton className="mt-6 w-full" onClick={handleAddToCart}>
              <span className="inline-flex items-center gap-2">
                <ShoppingBag className="h-3.5 w-3.5" /> Add To Cart
              </span>
            </MagneticButton>
          </motion.div>

          {/* Materials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-10"
          >
            <div>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">1. Choose Your Chain</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {CHAIN_STYLES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setChainId(c.id)}
                    data-cursor="link"
                    className={cn(
                      "flex flex-col items-center gap-2 rounded-xl border p-3 transition-all",
                      chainId === c.id ? "border-gold bg-gold/10" : "border-gold/15 hover:border-gold/40"
                    )}
                  >
                    <span
                      className="h-6 w-6 rounded-full border border-black/30"
                      style={{ backgroundColor: c.color }}
                    />
                    <span className="text-center text-[10px] uppercase tracking-wide text-foreground/90">{c.name}</span>
                    <span className="text-[10px] text-gold/80">{c.priceModifier > 0 ? `+$${c.priceModifier}` : "Included"}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">2. Add Charms</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {CHARMS.map((material) => {
                  const Icon = CHARM_ICONS[material.render as CharmIconId];
                  return (
                    <button
                      key={material.id}
                      onClick={() => addMaterial(material)}
                      disabled={isFull}
                      data-cursor="link"
                      className="flex flex-col items-center gap-2 rounded-xl border border-gold/15 p-3 transition-all hover:border-gold/50 hover:bg-gold/5 disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      <Icon className="h-7 w-7 text-gold" />
                      <span className="text-center text-[10px] uppercase tracking-wide text-foreground/90">{material.name}</span>
                      <span className="text-[10px] text-gold/80">+${material.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">3. Add Beads</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {BEADS.map((material) => (
                  <button
                    key={material.id}
                    onClick={() => addMaterial(material)}
                    disabled={isFull}
                    data-cursor="link"
                    className="flex flex-col items-center gap-2 rounded-xl border border-gold/15 p-3 transition-all hover:border-gold/50 hover:bg-gold/5 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <span
                      className="h-7 w-7 rounded-full border border-black/30"
                      style={{ backgroundColor: BEAD_COLORS[material.render as keyof typeof BEAD_COLORS] }}
                    />
                    <span className="text-center text-[10px] uppercase tracking-wide text-foreground/90">{material.name}</span>
                    <span className="text-[10px] text-gold/80">+${material.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {isFull && (
              <p className="text-center text-xs text-gold/70">
                Your necklace is at its finest — {MAX_PLACED_ITEMS} pieces. Remove one to add another.
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
