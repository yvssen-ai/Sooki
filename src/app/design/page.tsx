import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DesignStudio from "@/components/design/DesignStudio";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Design Your Own | SOOKI",
  description: "Build your own one-of-a-kind necklace — choose a chain, add charms and beads, and craft a piece that's entirely yours.",
};

export default function DesignPage() {
  return (
    <main className="relative overflow-x-hidden bg-black selection:bg-gold/30">
      <CustomCursor />
      <Navbar />
      <div className="pt-24 sm:pt-28">
        <DesignStudio />
      </div>
      <Footer />
    </main>
  );
}
