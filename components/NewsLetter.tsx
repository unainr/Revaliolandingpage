'use client'
import { Calendar, Play } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const FinalCTA = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleStartDemo = async () => {
    setIsLoading(true);
    // Simulate API call or redirect to demo
    setTimeout(() => {
      setIsLoading(false);
      // Here you would redirect to demo or open a modal
      console.log("Starting free demo...");
    }, 1000);
  };

  const handleScheduleConsultation = () => {
    // Here you would open a calendar widget or redirect to booking page
    console.log("Opening consultation scheduler...");
  };

  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Ready to Simplify Your Property Tax Management?
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of property owners who trust Revalio to handle their tax filings efficiently and accurately. Start your free demo today.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href={"https://revalio.hellorovamo.com/"}
						target="_blank">

            <Button
              onClick={handleStartDemo}
              disabled={isLoading}
              size="lg"
              className="px-8 py-4  bg-red-500 cursor-pointer text-white hover:bg-red-400 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[200px]"
              >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Loading...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Start Free Demo
                </div>
              )}
            </Button>
              </Link>
            
            <Button
              onClick={handleScheduleConsultation}
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg cursor-pointer font-semibold rounded-xl border-2 hover:bg-primary/5 transition-all duration-300 min-w-[200px]"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>No credit card required</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground/30 rounded-full" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>5-minute setup</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground/30 rounded-full" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>Instant access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;