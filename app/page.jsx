import HeroSection from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/sections/AbousUsSection";
import Features from "@/components/sections/Features";
import FooterSection from "@/components/sections/FooterSection";

export default function Landing() {
  return (
    <div>
      <HeroSection/>
      <Features/>
      <AboutUsSection/>
      <FooterSection/>
    </div>
  );
}