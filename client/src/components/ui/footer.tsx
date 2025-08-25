import { Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-neutral text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold text-white">CouncilHub AI</span>
            </div>
            <p className="text-gray-300 max-w-md mb-6">
              Revolutionizing Australian local government through intelligent automation and resident-centered service delivery.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors" 
                data-testid="social-twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("features")}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                  data-testid="footer-features"
                >
                  Features
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-security">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-integrations">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-about">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-careers">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-privacy">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-terms">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 CouncilHub AI. All rights reserved. Built for Australian Local Government.
          </p>
          <p className="text-gray-300 text-sm mt-4 md:mt-0">
            🇦🇺 Proudly Australian
          </p>
        </div>
      </div>
    </footer>
  );
}
