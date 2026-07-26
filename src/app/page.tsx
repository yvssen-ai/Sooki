"use client";

import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import LegacyBanner from "@/components/LegacyBanner";
import Testimonials from "@/components/Testimonials";
import InfoStrip from "@/components/InfoStrip";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-black selection:bg-gold/30">
      <CustomCursor />
      <LoadingScreen />

      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Collection />
      <LegacyBanner />
      <Testimonials />
      <InfoStrip />
      <Footer />
    </main>
  );
}
