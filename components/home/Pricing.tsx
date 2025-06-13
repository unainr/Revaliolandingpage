'use client'
import { useState, useEffect } from "react";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingComponent = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const tiers = [
    {
      name: "Starter",
      id: "starter",
      price: isYearly ? 199 : 19,
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "24/7 email support",
        "1 team member",
        "Standard integrations"
      ],
      cta: "Get Started",
      mostPopular: false
    },
    {
      name: "Professional",
      id: "professional",
      price: isYearly ? 499 : 49,
      description: "Ideal for growing businesses and teams",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "Up to 10 team members",
        "Advanced integrations",
        "Custom workflows",
        "API access"
      ],
      cta: "Go Professional",
      mostPopular: true
    },
    {
      name: "Enterprise",
      id: "enterprise",
      price: isYearly ? 999 : 99,
      description: "For large organizations with complex needs",
      features: [
        "Unlimited everything",
        "Dedicated account manager",
        "24/7 phone support",
        "Unlimited team members",
        "Custom integrations",
        "Advanced security",
        "SLA guarantees",
        "White-labeling options"
      ],
      cta: "Contact Sales",
      mostPopular: false
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/40 via-white to-white"></div>
      <div className={`absolute top-40 -left-20 w-72 h-72 rounded-full bg-gradient-to-r from-purple-300/30 to-blue-300/30 blur-3xl ${isLoaded ? 'animate-glow' : ''}`}></div>
      <div className={`absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-pink-300/30 to-orange-200/30 blur-3xl ${isLoaded ? 'animate-glow-delayed' : ''}`}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className={`text-center space-y-4 mb-16 ${isLoaded ? 'animate-reveal' : 'opacity-0'}`}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 border border-violet-300/50 backdrop-blur-sm mb-4">
              <span className="text-sm font-medium text-violet-800">Flexible Pricing Options</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800">
              Solutions for Every <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Scale</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan to power your digital transformation journey
            </p>
            
            {/* Billing toggle */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
              <button
                type="button"
                className={`relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${isYearly ? 'bg-indigo-600' : 'bg-gray-200'}`}
                onClick={() => setIsYearly(!isYearly)}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}
                />
              </button>
              <span className={`text-sm font-medium flex items-center ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
                Yearly
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
          
          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {tiers.map((tier, index) => (
              <div 
                key={tier.id}
                className={`relative rounded-2xl ${
                  tier.mostPopular 
                    ? 'border-2 border-violet-500 shadow-lg shadow-violet-100 bg-white z-10 transform md:-translate-y-4' 
                    : 'border border-gray-200 bg-white/80'
                } p-8 transition-all duration-300 hover:shadow-xl hover:shadow-violet-100/50 ${isLoaded ? `animate-fade-in-up delay-${index}00` : 'opacity-0'}`}
              >
                {tier.mostPopular && (
                  <div className="absolute top-0 -translate-y-1/2 inset-x-0 flex justify-center">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md">
                      <Zap className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{tier.description}</p>
                  <div className="mt-6">
                    <span className="text-5xl font-bold text-gray-900">${tier.price}</span>
                    <span className="text-base text-gray-500">/{isYearly ? 'year' : 'month'}</span>
                  </div>
                </div>
                
                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className={`flex-shrink-0 ${tier.mostPopular ? 'text-violet-600' : 'text-gray-500'}`}>
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="ml-3 text-sm text-gray-600">{feature}</p>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <Button 
                    className={`w-full py-6 text-base font-medium rounded-xl group ${
                      tier.mostPopular 
                        ? 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/20' 
                        : 'bg-white border-2 border-violet-500/30 text-violet-700 hover:bg-violet-50'
                    }`}
                  >
                    <span className="flex items-center justify-center">
                      {tier.cta}
                      <ArrowRight className={`ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 ${tier.mostPopular ? 'text-white' : 'text-violet-600'}`} />
                    </span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enterprise callout */}
          <div className={`mt-16 rounded-2xl bg-gradient-to-r from-violet-600/10 to-indigo-600/10 p-8 border border-violet-500/20 ${isLoaded ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Need a custom solution?</h3>
                <p className="mt-2 text-gray-600 max-w-2xl">
                  Our team of experts can build tailored digital solutions to meet your specific business requirements.
                </p>
              </div>
              <Button className="whitespace-nowrap px-8 py-6 bg-white text-violet-700 border-2 border-violet-500/30 hover:bg-violet-50 rounded-xl text-base font-medium shadow-lg shadow-violet-500/5">
                Contact Our Team
              </Button>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className={`mt-20 text-center ${isLoaded ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium text-white`}>
                    {/* Replace with actual customer avatars */}
                    {i}
                  </div>
                ))}
              </div>
              <p className="ml-4 text-sm text-gray-600">
                <span className="font-semibold text-gray-900">500+ customers</span> are already building better solutions
              </p>
            </div>
            <blockquote className="mt-6 max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 italic">
                "This platform has completely transformed how we approach digital solutions. The ROI has been incredible."
              </p>
              <footer className="mt-3">
                <div className="text-base font-medium text-gray-900">Sarah Johnson</div>
                <div className="text-sm text-gray-500">CTO at TechInnovate</div>
              </footer>
            </blockquote>
          </div>
          
          {/* FAQ teaser */}
          <div className={`mt-20 text-center ${isLoaded ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold text-gray-900">Have questions?</h3>
            <p className="mt-2 text-gray-600">
              Check our <a href="#faq" className="text-violet-600 font-medium hover:text-violet-700">frequently asked questions</a> or contact our support team.
            </p>
          </div>
        </div>
      </div>
      
      {/* Animated gradient border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-400 to-indigo-500 animate-gradient-x"></div>
    </section>
  );
};

export default PricingComponent;
