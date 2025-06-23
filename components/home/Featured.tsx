'use client'

import { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Users, Sparkles, Target, Globe, ArrowRight, Home, FileText, CreditCard, BarChart3, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  const features = [
    {
      icon: Home,
      title: "Multi-Property Dashboard",
      description: "Manage multiple properties from a single, intuitive dashboard. Track active filings, payment status, and important deadlines across your entire portfolio.",
      color: "#ee0820",
      details: [
        "Track active filings across properties",
        "Monitor payment status in real-time",
        "Never miss important deadlines"
      ]
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Securely store, organize, and access all your property tax documents. Upload authorizations, view filings, and download invoices whenever you need them.",
      color: "#ee0820",
      details: [
        "Secure document storage",
        "Easy upload and organization",
        "Instant access to all filings"
      ]
    },
    {
      icon: CreditCard,
      title: "Payment Tracking",
      description: "Never miss a payment again. Track invoice status, manage payment methods, and receive notifications for upcoming due dates.",
      color: "#ee0820",
      details: [
        "Invoice status tracking",
        "Multiple payment methods",
        "Automated due date reminders"
      ]
    },
    {
      icon: Smartphone,
      title: "Real-Time Updates",
      description: "Get instant notifications about filing status changes, payment confirmations, and important deadlines through our integrated messaging system.",
      color: "#ee0820",
      details: [
        "Instant status notifications",
        "Payment confirmations",
        "Deadline alerts"
      ]
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Your sensitive tax information is protected with bank-level security. All documents are encrypted and accessible only to you and our support team.",
      color: "#ee0820",
      details: [
        "Bank-level security",
        "End-to-end encryption",
        "Restricted access controls"
      ]
    },
    {
      icon: BarChart3,
      title: "Filing History",
      description: "Access complete filing history for each property. Track past filings, review outcomes, and maintain detailed records for your tax planning.",
      color: "#ee0820",
      details: [
        "Complete filing history",
        "Detailed analytics",
        "Comprehensive reporting"
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#ee0820]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#ee0820]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-20 w-64 h-64 border border-[#ee0820]/10 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 border border-[#ee0820]/10 rounded-full opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Everything You Need to <br />
            <span className="bg-gradient-to-r from-[#ee0820] to-[#ee0820] bg-clip-text text-transparent">
              Manage Property Taxes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From filing to payment tracking, Revalio handles all aspects of your property tax management with ease and precision. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index:any) => {
            const isActive = isMobile || activeFeature === index;
            return (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:border-[${feature.color}]/30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0
                }}
                onMouseEnter={!isMobile ? () => setActiveFeature(index) : undefined}
                onMouseLeave={!isMobile ? () => setActiveFeature(null) : undefined}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${feature.color}10 0%, transparent 100%)` }}
                ></div>
                <div className="absolute top-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: feature.color }}
                ></div>

                <CardHeader>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: isActive ? feature.color : `${feature.color}15`,
                      boxShadow: isActive ? `0 10px 25px -5px ${feature.color}40` : 'none'
                    }}
                  >
                    {React.createElement(feature.icon, {
                      className: "h-7 w-7 transition-all duration-300",
                      style: { color: isActive ? 'white' : feature.color }
                    })}
                  </div>
                  <CardTitle className="text-xl font-bold transition-colors duration-300"
                    style={{ color: isActive ? feature.color : 'inherit' }}
                  >
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>

                  <div className="space-y-2 pt-4 transition-all duration-300 overflow-hidden"
                    style={{ 
                      maxHeight: isActive ? '200px' : '0',
                      opacity: isActive ? 1 : 0,
                      borderTop: isActive ? '1px solid #f0f0f0' : 'none'
                    }}
                  >
                    {feature.details.map((detail, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${feature.color}15` }}
                        >
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: feature.color }}></div>
                        </div>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className={`mt-20 p-8 rounded-2xl bg-gradient-to-r from-[#ee0820]/10 to-[#ee0820]/10 border border-[#ee0820]/20 backdrop-blur-sm transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl font-bold">Ready to experience these features?</h3>
              <p className="text-muted-foreground">Start your free trial today and discover the power of our platform.</p>
            </div>
            <Button 
              size="lg" 
              className="bg-[#ee0820] hover:bg-[#ee0820]/90 text-white px-8 h-12 rounded-xl shadow-lg shadow-[#ee0820]/20 hover:shadow-xl hover:shadow-[#ee0820]/30 transition-all duration-300"
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