"use client";
import { useState, useEffect } from "react";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Subscribe from "./Subscribe";

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
			price: "Coming soon",
			description: "Perfect for individual property owners",
			features: [
				"Up to 2 properties",
				"Basic filing management",
				"Document storage",
				"Email support",
				"Mobile app access",
			],
			cta: "Get Started Free",
			mostPopular: false,
		},
		{
			name: "Professional",
			id: "professional",
			price: "Coming soon",
			// price: isYearly ? 290 : 29,
			description: "Ideal for property investors and managers",
			features: [
				"Up to 10 properties",
				"Advanced filing management",
				"Unlimited document storage",
				"Priority support",
				"Payment tracking",
				"Custom notifications",
				"Filing history reports",
			],
			cta: "Start Free Trial",
			mostPopular: true,
		},
		{
			name: "Enterprise",
			id: "enterprise",
			price: "Coming soon",
			description: "For large portfolios and property management companies",
			features: [
				"Unlimited properties",
				"Custom integrations",
				"Dedicated account manager",
				"API access",
				"Bulk operations",
				"Advanced analytics",
				"White-label options",
			],
			cta: "Contact Sales",
			mostPopular: false,
		},
	];

	return (
		<section className="relative py-20 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-200">
			{/* Background elements */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/40 via-white to-white dark:from-indigo-900/20 dark:via-gray-900 dark:to-gray-900"></div>
			<div
				className={`absolute top-40 -left-20 w-72 h-72 rounded-full bg-gradient-to-r from-purple-300/30 to-blue-300/30 dark:from-purple-600/20 dark:to-blue-600/20 blur-3xl ${
					isLoaded ? "animate-glow" : ""
				}`}></div>
			<div
				className={`absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-pink-300/30 to-orange-200/30 dark:from-pink-600/20 dark:to-orange-500/20 blur-3xl ${
					isLoaded ? "animate-glow-delayed" : ""
				}`}></div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-5xl mx-auto">
					{/* Header */}
					<div
						className={`text-center space-y-4 mb-16 ${
							isLoaded ? "animate-reveal" : "opacity-0"
						}`}>
						<div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/50 dark:to-purple-900/50 border border-red-300/50 dark:border-violet-700/50 backdrop-blur-sm mb-4">
							<span className="text-sm font-medium text-red-800 dark:text-red-300">
								Flexible Pricing Options
							</span>
						</div>

						<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
							Choose Your{" "}
							<span className="bg-gradient-to-r from-red-600 to-red-600 dark:from-red-500 dark:to-indigo-400 bg-clip-text text-transparent">
								Plan
							</span>
						</h2>

						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
							Flexible pricing that grows with your property portfolio. Start
							free and upgrade as your needs expand.{" "}
						</p>

						{/* Billing toggle */}
						<div className="flex items-center justify-center mt-8 space-x-4">
							<span
								className={`text-sm font-medium ${
									!isYearly
										? "text-gray-900 dark:text-gray-100"
										: "text-gray-500 dark:text-gray-400"
								}`}>
								Monthly
							</span>
							<button
								type="button"
								className={`relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
									isYearly
										? "bg-red-600 dark:bg-red-500"
										: "bg-gray-200 dark:bg-gray-700"
								}`}
								onClick={() => setIsYearly(!isYearly)}>
								<span className="sr-only">Use setting</span>
								<span
									aria-hidden="true"
									className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white dark:bg-gray-100 shadow ring-0 transition duration-200 ease-in-out ${
										isYearly ? "translate-x-6" : "translate-x-0"
									}`}
								/>
							</button>
							<span
								className={`text-sm font-medium flex items-center ${
									isYearly
										? "text-gray-900 dark:text-gray-100"
										: "text-gray-500 dark:text-gray-400"
								}`}>
								Yearly
								<span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/60 dark:text-green-300">
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
										? "border-2 border-red-500 dark:border-red-400 shadow-lg shadow-violet-100 dark:shadow-red-900/20 bg-white dark:bg-gray-800 z-10 transform md:-translate-y-4"
										: "border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80"
								} p-8 transition-all duration-300 hover:shadow-xl hover:shadow-red-100/50 dark:hover:shadow-red-900/30 ${
									isLoaded ? `animate-fade-in-up delay-${index}00` : "opacity-0"
								}`}>
								{tier.mostPopular && (
									<div className="absolute top-0 -translate-y-1/2 inset-x-0 flex justify-center">
										<span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-red-600 to-red-600 dark:from-red-500 dark:to-red-500 text-white shadow-md">
											<Zap className="w-4 h-4 mr-1" />
											Most Popular
										</span>
									</div>
								)}

								<div className="text-center">
									<h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
										{tier.name}
									</h3>
									<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
										{tier.description}
									</p>
									<div className="mt-6">
										<span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
											{tier.price}
										</span>
										<span className="text-base text-gray-500 dark:text-gray-400">
											/{isYearly ? "year" : "month"}
										</span>
									</div>
								</div>

								<ul className="mt-8 space-y-4">
									{tier.features.map((feature) => (
										<li key={feature} className="flex items-start">
											<div
												className={`flex-shrink-0 ${
													tier.mostPopular
														? "text-red-600 dark:text-red-400"
														: "text-gray-500 dark:text-gray-400"
												}`}>
												<Check className="h-5 w-5" />
											</div>
											<p className="ml-3 text-sm text-gray-600 dark:text-gray-300">
												{feature}
											</p>
										</li>
									))}
								</ul>

								<div className="mt-8">
									<Link
										href={"https://revalio.hellorovamo.com/"}
										target="_blank">
										<Button
											className={`w-full py-6 text-base font-medium cursor-pointer  rounded-xl group ${
												tier.mostPopular
													? "bg-gradient-to-r from-red-600 to-red-600 hover:from-red-500 hover:to-red-500 dark:from-red-500 dark:to-red-500 dark:hover:from-red-400 dark:hover:to-red-400 text-white shadow-lg shadow-red-500/20 dark:shadow-red-900/30"
													: "bg-white dark:bg-gray-800 border-2 border-red-500/30 dark:border-red-400/30 text-red-700 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/30"
											}`}>
											<span className="flex items-center justify-center">
												{tier.cta}
												<ArrowRight
													className={`ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 ${
														tier.mostPopular
															? "text-white"
															: "text-red-600 dark:text-red-400"
													}`}
												/>
											</span>
										</Button>
									</Link>
								</div>
							</div>
						))}
					</div>

					{/* Enterprise callout */}

					<Subscribe />

					{/* FAQ teaser */}
					<div
						className={`mt-20 text-center ${
							isLoaded ? "animate-fade-in-up delay-500" : "opacity-0"
						}`}>
						<h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
							Have questions?
						</h3>
						<p className="mt-2 text-gray-600 dark:text-gray-300">
							Check our{" "}
							<a
								href="#faq"
								className="text-red-600 dark:text-red-400 font-medium hover:text-red-700 dark:hover:text-red-300">
								frequently asked questions
							</a>{" "}
							or contact our support team.
						</p>
					</div>
				</div>
			</div>

			{/* Animated gradient border at bottom */}
			<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-400 to-red-500 dark:from-red-600 dark:via-red-500 dark:to-red-600 animate-gradient-x"></div>
		</section>
	);
};

export default PricingComponent;
