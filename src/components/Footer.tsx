"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, ArrowUp } from "lucide-react";
import { EyeOfHorusIcon } from "@/components/icons/EgyptIcons";

const NAV_COLUMNS = [
  {
    title: "Shop",
    links: [
      { name: "Rings", href: "/#collection" },
      { name: "Bracelets", href: "/#collection" },
      { name: "Necklaces", href: "/#collection" },
      { name: "Pendants", href: "/#collection" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Home", href: "/#home" },
      { name: "Our Legacy", href: "/#legacy" },
      { name: "Design Your Own", href: "/design" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Shipping", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="footer" className="bg-grain relative overflow-hidden bg-black px-5 pb-10 pt-20 sm:px-8 sm:pt-28 lg:px-16">
      {/* Floating watermark */}
      <motion.div
        className="pointer-events-none absolute -right-10 -top-10 -z-0 opacity-[0.05] sm:-right-4 sm:-top-4"
        animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <EyeOfHorusIcon className="h-40 w-40 text-gold sm:h-56 sm:w-56" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
          <div>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  data-cursor="link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 text-gold/80 transition-all hover:border-gold hover:bg-gold hover:text-black"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {NAV_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 font-headline text-xs uppercase tracking-[0.25em] text-gold">{col.title}</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} data-cursor="link" className="transition-colors hover:text-gold">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="divider-gold origin-left"
        />

        <div className="flex flex-col items-center justify-between gap-6 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Sooki Accessories. All legacies reserved.
          </p>
          <button
            onClick={scrollToTop}
            data-cursor="link"
            className="flex items-center gap-2 text-muted-foreground transition-all hover:text-gold"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.25em]">Back to top</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/25">
              <ArrowUp className="h-3 w-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
