"use client";

import AboutUsSection from "@/components/sections/AbousUsSection";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import { useSession } from "next-auth/react";

export default function Landing() {
  const session = useSession();

  return (
    <div>
      {session.status === "loading" ? (
        <></>
      ) : (
        <>
          <HeroSection />
          <Features />
          <AboutUsSection />
          <Footer />
        </>
      )}
    </div>
  );
}
