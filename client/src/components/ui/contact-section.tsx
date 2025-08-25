import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Us",
      details: ["hello@councilhub.ai", "enterprise@councilhub.ai"]
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Call Us",
      details: ["1800 COUNCIL (1800 268 624)", "Available Mon-Fri 9AM-5PM AEST"]
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Visit Us",
      details: ["Level 12, 123 Collins Street", "Melbourne VIC 3000, Australia"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral mb-4">
            Let's Discuss Your Council's Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule a personalized demo to see how CouncilHub AI can transform your council operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-4" data-testid={`contact-info-${index}`}>
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral mb-2">{contact.title}</h3>
                    {contact.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern Sydney government building showcasing contemporary Australian civic architecture" 
              className="rounded-2xl shadow-xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
