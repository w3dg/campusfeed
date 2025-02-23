import HeroSection from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/sections/AbousUsSection";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";

export default function Landing() {
  return (
    <div>
      <HeroSection />
      <Features />
      <AboutUsSection />
      <Footer />
    </div>
  );
}
