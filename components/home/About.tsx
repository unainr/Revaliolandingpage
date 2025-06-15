'use client'

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Award, Users, Shield, Clock, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAchievement, setActiveAchievement] = useState(null);
  const sectionRef = useRef(null);

  const achievements = [
    { 
      text: "10M+ users worldwide", 
      icon: Users, 
      color: "#ee0820",
      description: "Trusted by millions of users across 150+ countries"
    },
    { 
      text: "99.9% uptime guarantee", 
      icon: Zap, 
      color: "#ee0820",
      description: "Reliable infrastructure with enterprise-grade stability"
    },
    { 
      text: "24/7 expert support", 
      icon: Clock, 
      color: "#ee0820",
      description: "Round-the-clock assistance from our dedicated team"
    },
    { 
      text: "Enterprise security", 
      icon: Shield, 
      color: "#ee0820",
      description: "Bank-level encryption and advanced security protocols"
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
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ee0820]/30 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ee0820]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#ee0820]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div 
              className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="inline-block px-4 py-1 bg-[#ee0820]/10 rounded-full text-[#ee0820] font-medium text-sm mb-2 border border-[#ee0820]/20">
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Trusted by <span className="bg-gradient-to-r from-[#ee0820] to-[#ee0820] bg-clip-text text-transparent">Industry Leaders</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We've helped thousands of companies transform their digital presence with our innovative solutions and expert guidance.
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
                className="group bg-[#ee0820] hover:bg-[#ee0820]/90 text-white px-8 py-6 h-auto rounded-xl shadow-lg shadow-[#ee0820]/20 hover:shadow-xl hover:shadow-[#ee0820]/30 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div 
            className={`relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {/* Main card */}
            <div className="aspect-square bg-gradient-to-br from-[#ee0820]/20 to-[#ee0820]/10 rounded-2xl p-8 relative overflow-hidden">
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
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ee0820]/5 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#ee0820]/5 rounded-tr-full"></div>
                
                <div className="text-center space-y-6 p-8 max-w-xs">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#ee0820] to-[#ee0820] rounded-2xl flex items-center justify-center mx-auto rotate-12 shadow-lg">
                      <Award className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-gray-900">
                      #1
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground">Quality First</h3>
                  
                  <p className="text-muted-foreground">
                    Every solution is crafted with precision and attention to detail, ensuring exceptional results for our clients.
                  </p>
                  
                  {/* Testimonial quote */}
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                    <p className="italic text-sm text-muted-foreground">
                      "Their commitment to quality and innovation has transformed our business operations completely."
                    </p>
                    <p className="mt-2 font-medium text-sm">— Sarah Johnson, CEO</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#ee0820]/10 rounded-lg rotate-12 border border-[#ee0820]/30"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-[#ee0820]/10 rounded-full border border-[#ee0820]/30"></div>
          </div>
        </div>
        
        
       
      </div>
    </section>
  );
};

export default About;
