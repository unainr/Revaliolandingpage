"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface MockupProps {
	children: React.ReactNode;
	className?: string;
}

const Mockup: React.FC<MockupProps> = ({ children, className }) => {
	return (
		<div
			className={cn(
				"relative bg-background border rounded-xl overflow-hidden",
				"shadow-2xl backdrop-blur-sm",
				className
			)}>
			<div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/30">
				<div className="flex gap-2">
					<div className="w-3 h-3 rounded-full bg-red-500"></div>
					<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
					<div className="w-3 h-3 rounded-full bg-green-500"></div>
				</div>
				<div className="flex-1 text-center">
					<Link
						href={"https://revalio.hellorovamo.com/"}
						target="_blank"
						className="bg-muted rounded px-3 py-1 text-xs text-muted-foreground inline-block">
						https://revalio.hellorovamo.com/
					</Link>
				</div>
			</div>
			<div className="relative">{children}</div>
		</div>
	);
};

interface GlowProps {
	variant?: "above" | "below";
	className?: string;
}

const Glow: React.FC<GlowProps> = ({ variant = "above", className }) => {
	return (
		<div
			className={cn(
				"absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent",
				variant === "above" && "top-0",
				variant === "below" && "bottom-0",
				className
			)}
		/>
	);
};

interface Particle {
	width: number;
	height: number;
	top: number;
	left: number;
	opacity: number;
	duration: number;
	delay: number;
}

const HeroSection: React.FC = () => {
	const heroRef = useRef<HTMLElement>(null);
	const [scrollY, setScrollY] = useState(0);
	const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
	const [particles, setParticles] = useState<Particle[]>([]);

	useEffect(() => {
		const generateParticles = (): Particle[] => {
			return Array.from({ length: 15 }, () => ({
				width: Math.random() * 4 + 2,
				height: Math.random() * 4 + 2,
				top: Math.random() * 100,
				left: Math.random() * 100,
				opacity: Math.random() * 0.5 + 0.1,
				duration: Math.random() * 10 + 8,
				delay: Math.random() * 5,
			}));
		};

		setParticles(generateParticles());

		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		const handleMouseMove = (e: MouseEvent) => {
			const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
			const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
			setParallaxOffset({ x, y });
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<>
			<section
				ref={heroRef}
				className="relative min-h-screen py-32 flex items-center justify-center overflow-hidden bg-background">
				{/* Enhanced animated gradient blobs background */}
				<div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-red-500/5 z-0">
					<div className="absolute inset-0 opacity-30">
						{[
							{ className: "top-20 left-10", delay: 0, color: "bg-red-500/30" },
							{
								className: "bottom-20 right-10",
								delay: 2,
								color: "bg-red-400/25",
							},
							{
								className: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
								delay: 4,
								color: "bg-red-600/20",
							},
							{
								className: "bottom-1/3 left-1/4",
								delay: 3,
								color: "bg-red-500/25",
							},
							{
								className: "top-1/4 right-1/3",
								delay: 1,
								color: "bg-red-400/15",
							},
							{
								className: "bottom-1/2 right-1/4",
								delay: 5,
								color: "bg-red-500/15",
							},
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
					className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"
					style={{
						willChange: "transform",
						transform: `translate(${parallaxOffset.x * 20}px, ${
							parallaxOffset.y * 20
						}px)`,
					}}
				/>

				{/* Enhanced floating particles */}
				<div className="absolute inset-0 z-0">
					{particles.map((p, i) => (
						<div
							key={i}
							className="absolute rounded-full bg-red-500/20"
							style={{
								width: `${p.width}px`,
								height: `${p.height}px`,
								top: `${p.top}%`,
								left: `${p.left}%`,
								opacity: p.opacity,
								animation: `float ${p.duration}s ease-in-out infinite`,
								animationDelay: `${p.delay}s`,
								willChange: "transform",
							}}
						/>
					))}
				</div>

				{/* Enhanced floating motion shapes */}
				<div className="absolute inset-0 z-0 overflow-hidden">
					{[
						{
							className: "absolute -top-32 -right-32",
							bg: "from-red-500/10 to-transparent",
							border: "border-red-500/20",
							y: scrollY * 0.15,
							rotate: scrollY * 0.08,
							x: parallaxOffset.x * 8,
							yOffset: parallaxOffset.y * 8,
						},
						{
							className: "absolute top-1/3 -left-32",
							bg: "from-red-400/8 to-transparent",
							border: "border-red-400/15",
							y: scrollY * -0.08,
							x: parallaxOffset.x * -8,
							yOffset: parallaxOffset.y * -8,
						},
						{
							className: "absolute bottom-1/4 right-1/4",
							bg: "from-red-600/12 to-transparent",
							border: "border-red-600/20",
							y: scrollY * 0.12,
							x: parallaxOffset.x * 5,
							yOffset: parallaxOffset.y * 5,
						},
						{
							className: "absolute top-1/4 left-1/3",
							bg: "from-red-500/8 to-transparent",
							border: "border-red-500/15",
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
					className="absolute right-0 bottom-0 w-full md:w-1/2 h-1/2 z-0 opacity-40 pointer-events-none"
					style={{
						transform: `translate(${parallaxOffset.x * 25}px, ${
							parallaxOffset.y * 25
						}px)`,
					}}>
					<div className="relative w-full h-full">
						{["red-500", "red-400", "red-600", "red-500"].map(
							(color: string, i: number) => (
								<div
									key={i}
									className={`absolute w-72 h-72 md:w-[450px] md:h-[450px] bg-gradient-to-tr from-${color}/6 to-transparent rounded-3xl border border-${color}/10 backdrop-blur-sm`}
									style={{
										right: `${15 + i * 12}%`,
										bottom: `${15 + i * 12}%`,
										transform: `rotate(${8 * (i + 1)}deg) translateY(${
											8 * (i + 1)
										}px)`,
									}}
								/>
							)
						)}
					</div>
				</div>

				{/* Enhanced Content */}
				<div className="container mx-auto px-6 text-center relative z-10 max-w-5xl space-y-8">
					{/* Enhanced Badge */}
					<motion.div
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}>
						<span className="relative px-6 py-2 text-sm rounded-full bg-gradient-to-r from-red-500/15 to-red-400/10 border border-red-500/30 text-red-600 dark:text-red-400 font-medium backdrop-blur-sm overflow-hidden">
							<span className="relative z-10">
								✨ Launching Soon • Join the Waitlist
							</span>
							<span
								className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
								style={{ animation: "shine 3s infinite linear" }}
							/>
						</span>
					</motion.div>

					{/* Enhanced Headline & Subtext */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
						className="space-y-8">
						<h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
							Simplify Your Property Tax{" "}
							<span className="relative inline-block">
								<span
									className="bg-gradient-to-r from-red-500 via-red-600 to-red-400 bg-clip-text text-transparent"
									style={{
										backgroundSize: "200% 200%",
										animation: "gradient-shift 4s ease infinite",
									}}>
									Management
								</span>
								<svg
									className="absolute -bottom-4 left-0 w-full h-4 text-red-500/40 hidden md:block"
									viewBox="0 0 100 12"
									preserveAspectRatio="none">
									<path
										d="M0,0 Q50,12 100,0"
										stroke="currentColor"
										strokeWidth="2"
										fill="none">
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
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Streamline property tax filings, track payments, and manage
							multiple properties from one powerful dashboard. Save time, reduce
							stress, and never miss a deadline again.
						</p>
					</motion.div>

					{/* Enhanced CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
						className="flex flex-col sm:flex-row gap-6 justify-center items-center">
						<Link href={"https://revalio.hellorovamo.com/"} target="_blank">
							<Button className="group relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-xl shadow-red-500/25 hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-500 h-12 px-10 text-md text-white">
								<span className="relative z-10">Try Demo</span>
								<ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
								<span className="absolute inset-0 rounded-md bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
							</Button>
						</Link>
						<Button
							variant="outline"
							className="group relative border-2 h-12 px-10 text-md hover:bg-background/80 backdrop-blur-sm transition-all duration-500 hover:border-red-500/50">
							<Play className="mr-3 h-6 w-6 text-red-500" />
							Join Waitlist
							<span className="absolute inset-0 rounded-md bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
						</Button>
					</motion.div>

					{/* Enhanced Mockup Section */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: 50 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
						className="relative w-full pt-16 px-4 sm:px-6 lg:px-8">
						<Mockup
							className={cn(
								"shadow-[0_0_80px_-12px_rgba(239,68,68,0.3)] dark:shadow-[0_0_80px_-12px_rgba(239,68,68,0.2)]",
								"border-red-500/20 dark:border-red-500/10 mx-auto max-w-4xl"
							)}>
							<div className=" relative w-full  min-h-screen   bg-gradient-to-br from-background to-red-50 dark:to-red-950/20 flex items-center  justify-center">
								<Image
									src="/image.png"
									alt="Mockup"
									className="object-cover w-full h-full "
									fill={true}
								/>
							</div>
						</Mockup>
					</motion.div>
				</div>

				{/* Enhanced Scroll Indicator */}
				<div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
					<motion.div
						animate={{ y: [0, 15, 0] }}
						transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
						className="flex flex-col items-center text-muted-foreground">
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

export default HeroSection;
