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

  return (
    <section id="subscribe" className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Council?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join the waitlist for early access to CouncilHub AI. Be among the first councils to revolutionize resident services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Contemporary Australian local government building showcasing modern civic architecture" 
              className="rounded-xl shadow-2xl w-full h-auto" 
            />
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
