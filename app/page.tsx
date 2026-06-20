import { CTA } from "@/components/Landing Page/CTA";
import { Footer } from "@/components/Landing Page/Footer";
import { HeroSection } from "@/components/Landing Page/HeroSection";
import { Navbar } from "@/components/Landing Page/Navbar";
import { PricingSection } from "@/components/Landing Page/PricingSection";
import {
  FeaturesSection,
  HowItWorksSection,
  StatsSection,
} from "@/components/Landing Page/Sections";

export default function LandingPage() {
  return (
    <main className="bg-[#070b14] min-h-screen text-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <CTA />
      <Footer />
    </main>
  );
}
