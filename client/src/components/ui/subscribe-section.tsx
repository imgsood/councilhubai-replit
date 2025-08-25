import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSubscriptionSchema, type InsertSubscription } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin } from "lucide-react";

export function SubscribeSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertSubscription>({
    resolver: zodResolver(insertSubscriptionSchema),
    defaultValues: {
      councilName: "",
      contactName: "",
      email: "",
      position: "",
    },
  });

  const subscriptionMutation = useMutation({
    mutationFn: async (data: InsertSubscription) => {
      const response = await apiRequest("POST", "/api/subscriptions", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message,
        variant: "default",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/subscriptions"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit subscription. Please try again.",
        variant: "destructive",
      });
      console.error("Subscription error:", error);
    },
  });

  const onSubmit = (data: InsertSubscription) => {
    subscriptionMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Email Us",
      details: ["hello@councilhub.ai", "enterprise@councilhub.ai"]
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: "Call Us",
      details: ["1800 COUNCIL (1800 268 624)", "Available Mon-Fri 9AM-5PM AEST"]
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Visit Us",
      details: ["Level 12, 123 Collins Street", "Melbourne VIC 3000, Australia"]
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Let's Discuss Your Council's Needs</h3>
            <div className="space-y-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-4" data-testid={`contact-info-${index}`}>
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{contact.title}</h4>
                    {contact.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-blue-100">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-neutral mb-6">Get Early Access</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                  disabled={subscriptionMutation.isPending}
                  data-testid="button-submit-subscription"
                >
                  {subscriptionMutation.isPending ? "Submitting..." : "Join Early Access Program"}
                </Button>
              </form>
            </Form>
            <p className="text-sm text-gray-500 mt-4 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
