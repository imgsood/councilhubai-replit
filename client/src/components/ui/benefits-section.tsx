import { Check } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      title: "60% Faster Response Times",
      description: "Automated routing and AI-powered responses significantly reduce resolution times for resident requests."
    },
    {
      title: "40% Reduction in Administrative Costs",
      description: "Streamlined workflows and automation eliminate manual processes, reducing operational expenses."
    },
    {
      title: "95% Resident Satisfaction",
      description: "Improved transparency and faster service delivery leads to higher resident satisfaction scores."
    }
  ];

  const stats = [
    { number: "150+", label: "Australian Councils" },
    { number: "2.5M+", label: "Requests Processed" },
    { number: "98%", label: "Uptime Guarantee" },
    { number: "$12M+", label: "Cost Savings" }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral mb-4">
            Transform Your Council Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join forward-thinking Australian councils already benefiting from CouncilHub AI's powerful capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Australian Parliament House representing government technology advancement" 
              className="rounded-2xl shadow-xl w-full h-auto" 
            />
          </div>
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4" data-testid={`benefit-${index}`}>
                <div className="flex-shrink-0 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-${index}`}>
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
