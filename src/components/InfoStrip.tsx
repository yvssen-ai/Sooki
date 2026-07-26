"use client";

import { motion } from "framer-motion";
import { Truck, RotateCcw, ShieldCheck, Headset } from "lucide-react";

const ITEMS = [
  { icon: Truck, title: "Free Shipping", desc: "On all orders over $100" },
  { icon: RotateCcw, title: "Easy Returns", desc: "30-day money back guarantee" },
  { icon: ShieldCheck, title: "Secure Payment", desc: "Safe & encrypted checkout" },
  { icon: Headset, title: "24/7 Support", desc: "We're here to help" },
];

export default function InfoStrip() {
  return (
    <section className="border-t border-gold/10 bg-black px-5 py-12 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-6">
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="flex items-center gap-3.5"
          >
            <item.icon className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.5} />
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground sm:text-xs">
                {item.title}
              </h4>
              <p className="text-[10px] text-muted-foreground sm:text-[11px]">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
