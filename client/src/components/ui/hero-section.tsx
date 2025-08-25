import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Revolutionizing
              <span className="block text-blue-200">Australian Local Government</span>
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-2xl">
              CouncilHub AI streamlines resident interactions, automates request management, and provides unprecedented insights for Australian councils.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-white text-primary hover:bg-gray-50 px-8 py-4 text-lg font-semibold shadow-lg"
                size="lg"
                data-testid="hero-early-access"
              >
                Get Early Access
              </Button>
              <Button 
                onClick={() => scrollToSection("features")}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold bg-transparent"
                size="lg"
                data-testid="hero-learn-more"
                style={{ color: 'white' }}
              >
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-blue-200">
              <div className="flex items-center">
                <Check className="w-5 h-5 mr-2" />
                <span className="text-sm">100% Australian</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 mr-2" />
                <span className="text-sm">Government Compliant</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 mr-2" />
                <span className="text-sm">AI-Powered</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern government building representing Australian local councils" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
