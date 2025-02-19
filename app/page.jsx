import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import Features from "@/components/sections/Features";

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