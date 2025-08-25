import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { HowItWorksSection } from "@/components/ui/how-it-works-section";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { SubscribeSection } from "@/components/ui/subscribe-section";
import { ContactSection } from "@/components/ui/contact-section";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <SubscribeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
