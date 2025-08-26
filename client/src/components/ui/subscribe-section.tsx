import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSubscriptionSchema, type InsertSubscription } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail } from "lucide-react";

export function SubscribeSection() {
  const { toast } = useToast();

  const form = useForm<InsertSubscription>({
    resolver: zodResolver(insertSubscriptionSchema),
    defaultValues: {
      councilName: "",
      contactName: "",
      email: "",
      position: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Helper function to encode form data for Netlify
  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const onSubmit = async (data: InsertSubscription) => {
    setIsSubmitting(true);
    
    try {
      // Prepare form data for Netlify
      const formData = {
        "form-name": "council-early-access",
        "council-name": data.councilName,
        "contact-name": data.contactName,
        "email": data.email,
        "position": data.position,
      };

      // Submit to Netlify
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(formData),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Thank you for joining our early access program! We'll be in touch soon.",
          variant: "default",
        });
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit subscription. Please try again.",
        variant: "destructive",
      });
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Email Us",
      details: ["hello@councilhub.ai"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Council?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Schedule a personalized demo to see how CouncilHub AI can transform your council operations. Join the waitlist for early access.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-neutral mb-6">Get Early Access</h3>
            <Form {...form}>
              <form 
                name="council-early-access"
                method="POST"
                data-netlify="true"
                onSubmit={form.handleSubmit(onSubmit)} 
                className="space-y-4"
              >
                {/* Hidden field for Netlify form detection */}
                <input type="hidden" name="form-name" value="council-early-access" />
                
                <FormField
                  control={form.control}
                  name="councilName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-neutral">Council Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your council name" 
                          {...field}
                          data-testid="input-council-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="contactName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-neutral">Contact Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your full name" 
                          {...field}
                          data-testid="input-contact-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-neutral">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your.email@council.gov.au" 
                          {...field}
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-neutral">Position/Role</FormLabel>
                      <Select name="position" onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-position">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="mayor">Mayor</SelectItem>
                          <SelectItem value="ceo">CEO/General Manager</SelectItem>
                          <SelectItem value="it-manager">IT Manager</SelectItem>
                          <SelectItem value="customer-service">Customer Service Manager</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors shadow-lg"
                  disabled={isSubmitting}
                  data-testid="button-submit-subscription"
                >
                  {isSubmitting ? "Submitting..." : "Join Early Access Program"}
                </Button>
              </form>
            </Form>
            <p className="text-sm text-gray-500 mt-4 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Let's Discuss Your Council's Needs</h3>
            <div className="flex justify-center">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-4" data-testid={`contact-info-${index}`}>
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{contact.title}</h4>
                    {contact.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-blue-100">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
