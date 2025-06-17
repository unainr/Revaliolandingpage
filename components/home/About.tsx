'use client'

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Award, Users, Shield, Clock, Building } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAchievement, setActiveAchievement] = useState(null);
  const sectionRef = useRef(null);

  const achievements = [
    { 
      text: "1000+ Properties Managed", 
      icon: Building, 
      color: "#ef4444",
      description: "Trusted by property owners across the country for reliable tax management"
    },
    { 
      text: "99.9% Filing Success Rate", 
      icon: CheckCircle, 
      color: "#ef4444",
      description: "Accurate filings with comprehensive error checking and validation"
    },
    { 
      text: "24/7 Expert Support", 
      icon: Clock, 
      color: "#ef4444",
      description: "Dedicated tax professionals available whenever you need assistance"
    },
    { 
      text: "Bank-Level Security", 
      icon: Shield, 
      color: "#ef4444",
      description: "Your sensitive tax information is protected with enterprise-grade encryption"
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
      id="about" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ef4444]/30 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ef4444]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#ef4444]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div 
              className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="inline-block px-4 py-1 bg-[#ef4444]/10 rounded-full text-[#ef4444] font-medium text-sm mb-2 border border-[#ef4444]/20">
                About Revalio
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Trusted by <span className="bg-gradient-to-r from-[#ef4444] to-[#dc2626] bg-clip-text text-transparent">Property Owners</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We've revolutionized property tax management for thousands of property owners, making complex tax filings simple, secure, and stress-free.
              </p>
            </div>
            
            <div 
              className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              {achievements.map((achievement, index:any) => (
                <div 
                  key={index} 
                  className="flex flex-col space-y-3 p-4 rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
                  onMouseEnter={() => setActiveAchievement(index)}
                  onMouseLeave={() => setActiveAchievement(null)}
                >
                  <div className="flex items-center space-x-3">
                    <div 
                      className="h-10 w-10 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{ 
                        backgroundColor: activeAchievement === index ? achievement.color : `${achievement.color}20`,
                        transform: activeAchievement === index ? 'scale(1.1)' : 'scale(1)'
                      }}
                    >
                      {React.createElement(achievement.icon, { 
                        className: "h-5 w-5 transition-all duration-300",
                        style: { color: activeAchievement === index ? 'white' : achievement.color }
                      })}
                    </div>
                    <span 
                      className="font-medium transition-all duration-300"
                      style={{ color: activeAchievement === index ? achievement.color : 'inherit' }}
                    >
                      {achievement.text}
                    </span>
                  </div>
                  
                  <div 
                    className="text-sm text-muted-foreground pl-12 transition-all duration-300"
                    style={{ 
                      maxHeight: activeAchievement === index ? '100px' : '0',
                      opacity: activeAchievement === index ? 1 : 0,
                      overflow: 'hidden'
                    }}
                  >
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
            
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button 
                size="lg" 
                className="group bg-[#ef4444] hover:bg-[#dc2626] text-white px-8 py-4 h-auto rounded-xl shadow-lg shadow-[#ef4444]/20 hover:shadow-xl hover:shadow-[#ef4444]/30 transition-all duration-300"
              >
                Try Free Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div 
            className={`relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {/* Main card */}
            <div className="aspect-square bg-gradient-to-br from-[#ef4444]/20 to-[#ef4444]/10 rounded-2xl p-8 relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 right-0 h-px bg-white"></div>
                <div className="absolute top-1/4 left-0 right-0 h-px bg-white"></div>
                <div className="absolute top-2/4 left-0 right-0 h-px bg-white"></div>
                <div className="absolute top-3/4 left-0 right-0 h-px bg-white"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-white"></div>
                
                <div className="absolute left-0 top-0 bottom-0 w-px bg-white"></div>
                <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white"></div>
                <div className="absolute left-2/4 top-0 bottom-0 w-px bg-white"></div>
                <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white"></div>
                <div className="absolute right-0 top-0 bottom-0 w-px bg-white"></div>
              </div>
              
              <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl flex items-center justify-center relative z-10 overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ef4444]/5 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#ef4444]/5 rounded-tr-full"></div>
                
                <div className="text-center space-y-6 p-8 max-w-xs">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#ef4444] to-[#dc2626] rounded-2xl flex items-center justify-center mx-auto rotate-12 shadow-lg">
                      <Building className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                      ✓
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground">Simplicity First</h3>
                  
                  <p className="text-muted-foreground">
                    Every feature is designed with property owners in mind, making complex tax management surprisingly simple and stress-free.
                  </p>
                  
                  {/* Testimonial quote */}
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                    <p className="italic text-sm text-muted-foreground">
                      "Revalio transformed our property tax management. Never missed a deadline since we started using it."
                    </p>
                    <p className="mt-2 font-medium text-sm">— Michael Chen, Property Investor</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#ef4444]/10 rounded-lg rotate-12 border border-[#ef4444]/30"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-[#ef4444]/10 rounded-full border border-[#ef4444]/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;