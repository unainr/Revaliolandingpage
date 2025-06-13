'use client'

import { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Users, Sparkles, Target, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const sectionRef = useRef(null);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built for speed with modern architecture and optimized performance.",
      color: "#5f34f8",
      details: [
        "50% faster load times",
        "Optimized database queries",
        "Edge caching technology"
      ]
    },
    {
      icon: Shield,
      title: "Secure by Design",
      description: "Enterprise-grade security with end-to-end encryption and compliance.",
      color: "#7c4dff",
      details: [
        "End-to-end encryption",
        "SOC 2 & GDPR compliant",
        "Regular security audits"
      ]
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless collaboration tools for teams of all sizes.",
      color: "#9d71fd",
      details: [
        "Real-time editing",
        "Role-based permissions",
        "Activity tracking"
      ]
    },
    {
      icon: Sparkles,
      title: "AI-Powered",
      description: "Intelligent automation and insights powered by advanced AI.",
      color: "#5f34f8",
      details: [
        "Smart recommendations",
        "Predictive analytics",
        "Automated workflows"
      ]
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focus on what matters with smart goal tracking and analytics.",
      color: "#7c4dff",
      details: [
        "Custom KPI dashboards",
        "Progress visualization",
        "Milestone tracking"
      ]
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy anywhere with our worldwide infrastructure.",
      color: "#9d71fd",
      details: [
        "Multi-region deployment",
        "CDN integration",
        "Auto-scaling resources"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#5f34f8]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#5f34f8]/5 rounded-full blur-3xl"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-[#5f34f8]/10 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 border border-[#5f34f8]/10 rounded-full opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-block px-4 py-1 bg-[#5f34f8]/10 rounded-full text-[#5f34f8] font-medium text-sm mb-4 border border-[#5f34f8]/20">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful <span className="bg-gradient-to-r from-[#5f34f8] to-[#9d71fd] bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale your applications with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index:any) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:border-[${feature.color}]/30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0
              }}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              {/* Hover gradient overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${feature.color}10 0%, transparent 100%)` }}
              ></div>
              
              {/* Top accent line */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ backgroundColor: feature.color }}
              ></div>
              
              <CardHeader>
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: activeFeature === index ? feature.color : `${feature.color}15`,
                    boxShadow: activeFeature === index ? `0 10px 25px -5px ${feature.color}40` : 'none'
                  }}
                >
                  {React.createElement(feature.icon, { 
                    className: "h-7 w-7 transition-all duration-300",
                    style: { color: activeFeature === index ? 'white' : feature.color }
                  })}
                </div>
                <CardTitle 
                  className="text-xl font-bold transition-colors duration-300"
                  style={{ color: activeFeature === index ? feature.color : 'inherit' }}
                >
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
                
                {/* Feature details that appear on hover */}
                <div 
                  className="space-y-2 pt-4 transition-all duration-300 overflow-hidden"
                  style={{ 
                    maxHeight: activeFeature === index ? '200px' : '0',
                    opacity: activeFeature === index ? 1 : 0,
                    borderTop: activeFeature === index ? '1px solid #f0f0f0' : 'none'
                  }}
                >
                  {feature.details.map((detail, i) => (
                    <div key={i} className="flex items-start">
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${feature.color}15` }}
                      >
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: feature.color }}></div>
                      </div>
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                  
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-sm font-medium flex items-center mt-2 group/btn"
                    style={{ color: feature.color }}
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Featured highlight */}
        <div 
          className={`mt-20 p-8 rounded-2xl bg-gradient-to-r from-[#5f34f8]/10 to-[#9d71fd]/10 border border-[#5f34f8]/20 backdrop-blur-sm transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl font-bold">Ready to experience these features?</h3>
              <p className="text-muted-foreground">Start your free trial today and discover the power of our platform.</p>
            </div>
            <Button 
              size="lg" 
              className="bg-[#5f34f8] hover:bg-[#5f34f8]/90 text-white px-8 h-12 rounded-xl shadow-lg shadow-[#5f34f8]/20 hover:shadow-xl hover:shadow-[#5f34f8]/30 transition-all duration-300"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
