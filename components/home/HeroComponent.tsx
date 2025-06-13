"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

// Utility function
function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Glow component
const Glow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: 'top' | 'above' | 'bottom' | 'below' | 'center' }
>(({ className, variant = 'top', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute w-full",
      variant === 'top' && "top-0",
      variant === 'above' && "-top-[128px]",
      variant === 'bottom' && "bottom-0",
      variant === 'below' && "-bottom-[128px]",
      variant === 'center' && "top-[50%]",
      className
    )}
    {...props}
  >
    <div
      className={cn(
        "absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/.5)_10%,_transparent_60%)] sm:h-[512px]",
        variant === "center" && "-translate-y-1/2",
      )}
    />
    <div
      className={cn(
        "absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/.3)_10%,_transparent_60%)] sm:h-[256px]",
        variant === "center" && "-translate-y-1/2",
      )}
    />
  </div>
));
Glow.displayName = "Glow";

// Mockup component
const Mockup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { type?: 'mobile' | 'responsive' }
>(({ className, type = 'responsive', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex relative z-10 overflow-hidden shadow-2xl border border-border/5 border-t-border/15",
      type === 'mobile' ? "rounded-[48px] max-w-[350px]" : "rounded-md",
      className
    )}
    {...props}
  />
));
Mockup.displayName = "Mockup";

interface Particle {
  width: number;
  height: number;
  top: number;
  left: number;
  opacity: number;
  duration: number;
  delay: number;
}

interface ParallaxOffset {
  x: number;
  y: number;
}

const HeroComponent = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState<ParallaxOffset>({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);

  const { scrollY: motionScrollY } = useScroll();

  useMotionValueEvent(motionScrollY, "change", (latest) => {
    setScrollY(latest);
  });

  // Generate particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          width: Math.random() * 4 + 1,
          height: Math.random() * 4 + 1,
          top: Math.random() * 100,
          left: Math.random() * 100,
          opacity: Math.random() * 0.5 + 0.1,
          duration: Math.random() * 10 + 5,
          delay: Math.random() * 5,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setParallaxOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <section 
        ref={heroRef} 
        className="relative min-h-screen py-32 flex items-center justify-center overflow-hidden bg-background"
      >
        {/* Enhanced animated gradient blobs background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/10 z-0">
          <div className="absolute inset-0 opacity-40">
            {[
              { className: "top-20 left-10", delay: 0, color: "bg-primary/40" },
              { className: "bottom-20 right-10", delay: 2, color: "bg-secondary/30" },
              { className: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", delay: 4, color: "bg-accent/30" },
              { className: "bottom-1/3 left-1/4", delay: 3, color: "bg-purple-500/30" },
              { className: "top-1/4 right-1/3", delay: 1, color: "bg-blue-500/20" },
              { className: "bottom-1/2 right-1/4", delay: 5, color: "bg-green-500/20" },
            ].map((b, i) => (
              <div
                key={i}
                className={`absolute ${b.className} w-96 h-96 ${b.color} rounded-full blur-3xl animate-blob`}
                style={{ animationDelay: `${b.delay}s` }}
              />
            ))}
          </div>
        </div>

        {/* Enhanced grid overlay with parallax */}
        <div
          className="absolute inset-0 bg-grid-pattern opacity-[0.05] z-0"
          style={{
            willChange: 'transform',
            transform: `translate(${parallaxOffset.x * 20}px, ${parallaxOffset.y * 20}px)`,
          }}
        />

        {/* Enhanced floating particles */}
        <div className="absolute inset-0 z-0">
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/30"
              style={{
                width: `${p.width}px`,
                height: `${p.height}px`,
                top: `${p.top}%`,
                left: `${p.left}%`,
                opacity: p.opacity,
                animation: `float ${p.duration}s ease-in-out infinite`,
                animationDelay: `${p.delay}s`,
                willChange: 'transform',
              }}
            />
          ))}
        </div>

        {/* Enhanced floating motion shapes */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[
            {
              className: "absolute -top-32 -right-32",
              bg: "from-primary/15 to-transparent",
              border: "border-primary/30",
              y: scrollY * 0.15,
              rotate: scrollY * 0.08,
              x: parallaxOffset.x * 8,
              yOffset: parallaxOffset.y * 8,
            },
            {
              className: "absolute top-1/3 -left-32",
              bg: "from-secondary/15 to-transparent",
              border: "border-secondary/30",
              y: scrollY * -0.08,
              x: parallaxOffset.x * -8,
              yOffset: parallaxOffset.y * -8,
            },
            {
              className: "absolute bottom-1/4 right-1/4",
              bg: "from-accent/15 to-transparent",
              border: "border-accent/30",
              y: scrollY * 0.12,
              x: parallaxOffset.x * 5,
              yOffset: parallaxOffset.y * 5,
            },
            {
              className: "absolute top-1/4 left-1/3",
              bg: "from-purple-500/15 to-transparent",
              border: "border-purple-500/30",
              y: scrollY * -0.1,
              x: parallaxOffset.x * -3,
              yOffset: parallaxOffset.y * -3,
            },
          ].map((m, i) => (
            <motion.div
              key={i}
              className={`${m.className} w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-bl ${m.bg} rounded-full border ${m.border} backdrop-blur-sm`}
              style={{
                translateY: m.y,
                rotate: m.rotate,
                x: m.x,
                y: m.yOffset,
              }}
            />
          ))}
        </div>

        {/* Enhanced 3D mockup layers */}
        <div
          className="absolute right-0 bottom-0 w-full md:w-1/2 h-1/2 z-0 opacity-60 pointer-events-none"
          style={{
            transform: `translate(${parallaxOffset.x * 25}px, ${parallaxOffset.y * 25}px)`,
          }}
        >
          <div className="relative w-full h-full">
            {["primary", "secondary", "accent", "purple-500"].map((color, i) => (
              <div
                key={color}
                className={`absolute w-72 h-72 md:w-[450px] md:h-[450px] bg-gradient-to-tr from-${color}/8 to-transparent rounded-3xl border border-${color}/15 backdrop-blur-sm`}
                style={{
                  right: `${15 + i * 12}%`,
                  bottom: `${15 + i * 12}%`,
                  transform: `rotate(${8 * (i + 1)}deg) translateY(${8 * (i + 1)}px)`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Content */}
        <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl space-y-8">
          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="relative px-6 py-2 text-sm rounded-full bg-gradient-to-r from-primary/25 to-secondary/25 border border-primary/40 text-primary font-medium backdrop-blur-sm overflow-hidden">
              <span className="relative z-10">✨ Launching Soon • Join the Waitlist</span>
              <span 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                style={{ animation: 'shine 3s infinite linear' }}
              />
            </span>
          </motion.div>

          {/* Enhanced Headline & Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Build Better{" "}
              <span className="relative inline-block">
                <span 
                  className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent"
                  style={{
                    backgroundSize: '200% 200%',
                    animation: 'gradient-shift 4s ease infinite'
                  }}
                >
                  Solutions
                </span>
                <svg
                  className="absolute -bottom-4 left-0 w-full h-4 text-primary/50 hidden md:block"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0 Q50,12 100,0" stroke="currentColor" strokeWidth="2" fill="none">
                    <animate
                      attributeName="d"
                      values="M0,0 Q50,12 100,0;M0,8 Q50,0 100,8;M0,0 Q50,12 100,0"
                      dur="8s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              </span>
            </h1>
            <p className="text-lg  text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into powerful digital experiences with our cutting-edge technology and expert guidance.
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button 
              className="group relative bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 h-12 px-10 text-md"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
              <span className="absolute inset-0 rounded-md bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Button>
            <Button 
              variant="outline" 
              className="group relative border-2 h-12 px-10 text-md hover:bg-background/80 backdrop-blur-sm transition-all duration-500 hover:border-primary/50"
            >
              <Play className="mr-3 h-6 w-6 text-primary" />
              Watch Demo
              <span className="absolute inset-0 rounded-md bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Button>
          </motion.div>
         

          {/* Enhanced Mockup Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
            className="relative w-full pt-16 px-4 sm:px-6 lg:px-8"
          >
            <Mockup
              className={cn(
                "shadow-[0_0_80px_-12px_rgba(0,0,0,0.4)] dark:shadow-[0_0_80px_-12px_rgba(255,255,255,0.15)]",
                "border-primary/20 dark:border-primary/10 mx-auto max-w-4xl",
              )}
            >
              <img
                src="/image.png"
                alt="Product Dashboard Preview"
                className="w-full h-auto rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </Mockup>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="flex flex-col items-center text-muted-foreground"
          >
            <span className="text-xs mb-3 font-medium">Scroll to explore</span>
            <ChevronDown className="h-6 w-6 opacity-70" />
          </motion.div>
        </div>

        {/* Background Glow Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Glow
            variant="above"
            className="animate-appear-zoom opacity-0 [animation-delay:2000ms]"
          />
        </div>
      </section>
    </>
  );
};

export default HeroComponent;
