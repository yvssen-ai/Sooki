"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Collection", href: "#collection" },
  { name: "About", href: "#legacy" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-6 left-0 z-50 flex w-full items-center justify-between px-5 py-4 transition-all duration-500 sm:px-8 lg:px-16",
          isScrolled ? "top-0 glass shadow-[0_4px_30px_-10px_rgba(0,0,0,0.8)]" : "bg-transparent"
        )}
      >
        <Link href="#home" data-cursor="link" className="flex items-center gap-2.5">
          <Logo className="h-7 w-7 sm:h-8 sm:w-8" />
          <span className="flex flex-col leading-none">
            <span className="font-headline text-lg font-semibold tracking-[0.28em] text-foreground sm:text-xl">
              SOOKI
            </span>
            <span className="hidden text-[8px] tracking-[0.5em] text-gold/70 sm:block">
              ACCESSORIES
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              data-cursor="link"
              className="group relative text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-gold"
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-foreground sm:gap-5">
          <button data-cursor="link" aria-label="Search" className="hidden transition-colors hover:text-gold sm:block">
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button data-cursor="link" aria-label="Account" className="hidden transition-colors hover:text-gold sm:block">
            <User className="h-[18px] w-[18px]" />
          </button>
          <button data-cursor="link" aria-label="Cart" className="relative transition-colors hover:text-gold">
            <ShoppingBag className="h-[18px] w-[18px]" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-bold text-black">
              0
            </span>
          </button>
          <button
            className="ml-1 lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
            data-cursor="link"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="bg-grain fixed inset-0 z-[70] flex flex-col bg-black p-6 sm:p-10"
          >
            <div className="mb-16 flex items-center justify-between">
              <span className="flex items-center gap-2 font-headline text-xl font-semibold tracking-[0.28em]">
                <Logo className="h-7 w-7" /> SOOKI
              </span>
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close Menu">
                <X className="h-7 w-7" />
              </button>
            </div>

            <nav className="flex flex-col gap-7">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className="font-headline text-4xl font-light tracking-wide text-foreground transition-colors hover:text-gold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-auto border-t border-gold/15 pt-8 text-xs tracking-[0.2em] text-muted-foreground"
            >
              <p>hello@sooki.com</p>
              <p className="mt-2">+20 100 000 0000</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
