'use client'
import { Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState<null | "success" | "error">(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call an API to handle the subscription
    if (email && email.includes('@')) {
      setSubscriptionStatus("success");
      setEmail("");
      // Reset status after 3 seconds
      setTimeout(() => setSubscriptionStatus(null), 3000);
    } else {
      setSubscriptionStatus("error");
    }
  };

  return (
    <section className="bg-card py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Revalio</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter to receive the latest updates, insights, and exclusive offers.
          </p>
          
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <Button
    variant={'destructive'}
                type="submit"
                className=" p-6 px-6 rounded-lg "
              >
                Subscribe
              </Button>
            </div>
            
            {subscriptionStatus === "success" && (
              <p className="text-green-500 text-sm mt-2">Thank you for subscribing! We'll be in touch soon.</p>
            )}
            {subscriptionStatus === "error" && (
              <p className="text-red-500 text-sm mt-2">Please enter a valid email address.</p>
            )}
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
