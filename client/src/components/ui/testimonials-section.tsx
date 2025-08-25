import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      quote: "CouncilHub AI has transformed how we serve our community. Response times have improved dramatically, and our residents are happier than ever with our service delivery.",
      author: "Sarah Mitchell",
      position: "Mayor, City of Melbourne"
    },
    {
      rating: 5,
      quote: "The implementation was seamless, and the results immediate. Our staff can now focus on strategic initiatives rather than routine administrative tasks.",
      author: "James Thompson",
      position: "CEO, Brisbane City Council"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex text-yellow-400 mr-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5" fill="currentColor" />
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral mb-4">
            Trusted by Australian Councils
          </h2>
          <p className="text-xl text-gray-600">
            See what council leaders are saying about CouncilHub AI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8" data-testid={`testimonial-${index}`}>
              <div className="flex items-center mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div>
                  <div className="font-semibold text-neutral">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
