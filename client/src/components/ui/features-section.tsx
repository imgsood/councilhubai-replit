import { Users, ClipboardList, Smartphone } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Single Resident View",
      description: "Comprehensive 360-degree view of all resident interactions, history, and preferences across all council departments and services.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      bgColor: "bg-primary/10"
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-secondary" />,
      title: "Smart Request Management",
      description: "AI-powered request routing, automated workflows, and intelligent prioritization to ensure timely responses to resident inquiries.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      bgColor: "bg-secondary/10"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      title: "Residents Portal",
      description: "Self-service portal allowing residents to submit requests, track progress, access services, and engage with their local council 24/7.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral mb-4">
            Powerful Features for Modern Councils
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CouncilHub AI transforms how Australian councils manage resident interactions with cutting-edge technology and intuitive design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card bg-white rounded-xl shadow-lg p-8 border border-gray-200" data-testid={`feature-card-${index}`}>
              <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-neutral mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>
              <img 
                src={feature.image} 
                alt={`${feature.title} dashboard interface`} 
                className="rounded-lg w-full h-40 object-cover" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
