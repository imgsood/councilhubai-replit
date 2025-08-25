
export function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing council systems and databases. Our team handles the entire setup process.",
      bgColor: "bg-primary"
    },
    {
      number: 2,
      title: "AI Training & Customization",
      description: "Our AI learns your council's specific processes, terminology, and workflows to provide tailored automation.",
      bgColor: "bg-secondary"
    },
    {
      number: 3,
      title: "Launch & Optimize",
      description: "Go live with full support and continuous optimization to maximize efficiency and resident satisfaction.",
      bgColor: "bg-purple-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral mb-4">
            How CouncilHub AI Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple implementation, powerful results. Transform your council operations in three easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start space-x-4" data-testid={`step-${step.number}`}>
                <div className={`flex-shrink-0 w-12 h-12 ${step.bgColor} text-white rounded-full flex items-center justify-center text-xl font-bold`}>
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Advanced analytics dashboard for civic technology showing data visualization" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
