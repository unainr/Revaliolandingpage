"use client"

import { ArrowRight, Play, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef, useMemo } from "react"
import { motion } from "framer-motion"

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const parallaxOffset = {
    x: mousePosition.x * 20 - 10,
    y: mousePosition.y * 20 - 10,
  }

  const particles = useMemo(() => {
  return Array.from({ length: 20 }).map((_, i) => ({
    width: Math.random() * 6 + 2,
    height: Math.random() * 6 + 2,
    top: Math.random() * 100,
    left: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.3,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));
}, []);


  return (
  <section ref={heroRef} className="relative min-h-screen py-20 flex items-center justify-center overflow-hidden">
  {/* Animated gradient blobs background */}
  <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/10 z-0">
    <div className="absolute inset-0 opacity-30">
      {[
        { className: "top-20 left-10", delay: 0, color: "bg-primary/30" },
        { className: "bottom-20 right-10", delay: 2, color: "bg-secondary/20" },
        { className: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", delay: 4, color: "bg-accent/20" },
        { className: "bottom-1/3 left-1/4", delay: 3, color: "bg-purple-500/20" },
      ].map((b, i) => (
        <div
          key={i}
          className={`absolute ${b.className} w-96 h-96 ${b.color} rounded-full blur-3xl animate-blob`}
          style={{ animationDelay: `${b.delay}s` }}
        />
      ))}
    </div>
  </div>

  {/* Grid overlay with parallax */}
  <div
    className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"
    style={{
      willChange: 'transform',
      transform: `translate(${parallaxOffset.x * 15}px, ${parallaxOffset.y * 15}px)`,
    }}
  />

  {/* Floating particles */}
  <div className="absolute inset-0 z-0">
    {particles.map((p, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-primary/20"
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

  {/* Floating motion shapes */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    {[
      {
        className: "absolute -top-20 -right-20",
        bg: "from-primary/10 to-transparent",
        border: "border-primary/20",
        y: scrollY * 0.1,
        rotate: scrollY * 0.05,
        x: parallaxOffset.x * 5,
        yOffset: parallaxOffset.y * 5,
      },
      {
        className: "absolute top-1/3 -left-20",
        bg: "from-secondary/10 to-transparent",
        border: "border-secondary/20",
        y: scrollY * -0.05,
        x: parallaxOffset.x * -5,
        yOffset: parallaxOffset.y * -5,
      },
      {
        className: "absolute bottom-1/4 right-1/4",
        bg: "from-accent/10 to-transparent",
        border: "border-accent/20",
        y: scrollY * 0.08,
        x: parallaxOffset.x * 3,
        yOffset: parallaxOffset.y * 3,
      },
    ].map((m, i) => (
      <motion.div
        key={i}
        className={`${m.className} w-64 h-64 md:w-96 md:h-96 bg-gradient-to-bl ${m.bg} rounded-full ${m.border}`}
        style={{
          translateY: m.y,
          rotate: m.rotate,
          x: m.x,
          y: m.yOffset,
        }}
      />
    ))}
  </div>

  {/* 3D mockup layers */}
  <div
    className="absolute right-0 bottom-0 w-full md:w-1/2 h-1/2 z-0 opacity-70 pointer-events-none"
    style={{
      transform: `translate(${parallaxOffset.x * 15}px, ${parallaxOffset.y * 15}px)`,
    }}
  >
    <div className="relative w-full h-full">
      {["primary", "secondary", "accent"].map((color, i) => (
        <div
          key={color}
          className={`absolute right-${10 + i * 10} bottom-${10 + i * 10} w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-${color}/5 to-transparent rounded-2xl border border-${color}/10 backdrop-blur-sm rotate-${6 * (i + 1)} translate-y-${5 * (i + 1)}`}
        />
      ))}
    </div>
  </div>

  {/* Content */}
  <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl space-y-10">
    {/* Badge */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="px-4 py-1.5 text-sm rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary font-medium backdrop-blur-sm">
        ✨ Launching Soon • Join the Waitlist
      </span>
    </motion.div>

    {/* Headline & Subtext */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-6"
    >
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
        Build Better{" "}
        <span className="relative ml-2 inline-block">
          <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
            Solutions
          </span>
          <svg
            className="absolute -bottom-2 left-0 w-full h-3 text-primary/40 hidden md:block"
            viewBox="0 0 100 12"
            preserveAspectRatio="none"
          >
            <path d="M0,0 Q50,12 100,0" stroke="currentColor" strokeWidth="3" fill="none">
              <animate
                attributeName="d"
                values="M0,0 Q50,12 100,0;M0,5 Q50,0 100,5;M0,0 Q50,12 100,0"
                dur="10s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Transform your ideas into powerful digital experiences with our cutting-edge technology and expert guidance.
      </p>
    </motion.div>

    {/* CTA Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-5 justify-center items-center"
    >
      <Button size="lg" className="group relative bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 h-14 px-8">
        <span className="relative z-10">Get Started</span>
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        <span className="absolute inset-0 rounded-md bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </Button>
      <Button variant="outline" size="lg" className="group relative border-2 h-14 px-8 hover:bg-background/50 backdrop-blur-sm transition-all duration-300">
        <Play className="mr-2 h-5 w-5 text-primary" />
        Watch Demo
        <span className="absolute inset-0 rounded-md bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </Button>
    </motion.div>

    {/* Social Proof */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="pt-10"
    >
      <p className="text-sm text-muted-foreground mb-4">Trusted by innovative teams worldwide</p>
      <div className="flex flex-wrap justify-center items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
        {[24, 20, 28, 24].map((w, i) => (
          <div key={i} className={`h-8 w-${w} bg-gradient-to-r from-muted to-muted/70 rounded flex items-center justify-center transition-transform hover:scale-105`}>
            <div className={`h-4 ${w < 25 ? 'w-12' : 'w-16'} bg-muted-foreground/30 rounded`}></div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="flex flex-col items-center text-muted-foreground"
    >
      <span className="text-xs mb-2">Scroll to explore</span>
      <ChevronDown className="h-5 w-5" />
    </motion.div>
  </div>
</section>

  )
}

export default Hero
