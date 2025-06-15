import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Code,
	Palette,
	Smartphone,
	Cloud,
	Database,
	Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Services = () => {
	const services = [
		{
			icon: Code,
			title: "Web Development",
			description:
				"Custom web applications built with modern technologies and best practices.",
			price: "Starting at $5,000",
			highlight: false,
		},
		{
			icon: Smartphone,
			title: "Mobile Apps",
			description:
				"Native and cross-platform mobile applications for iOS and Android.",
			price: "Starting at $8,000",
			highlight: true,
		},
		{
			icon: Palette,
			title: "UI/UX Design",
			description:
				"Beautiful, user-centered designs that convert visitors into customers.",
			price: "Starting at $3,000",
			highlight: false,
		},
		{
			icon: Cloud,
			title: "Cloud Solutions",
			description: "Scalable cloud infrastructure and deployment strategies.",
			price: "Starting at $4,000",
			highlight: false,
		},
		{
			icon: Database,
			title: "Data Analytics",
			description:
				"Turn your data into actionable insights with advanced analytics.",
			price: "Starting at $6,000",
			highlight: false,
		},
		{
			icon: Settings,
			title: "Consulting",
			description:
				"Expert guidance on technology strategy and digital transformation.",
			price: "Starting at $2,000",
			highlight: false,
		},
	];

	return (
		<section
			id="services"
			className="py-24 ">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ee0820] via-[#ee0820] to-[#ee0830] mb-4">
						Our <span className="text-primary">Services</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Comprehensive solutions to help your business thrive in the digital
						world.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<Card
							key={index}
							className="group transition-all duration-300 border border-border/40 hover:border-[#ee0820]/40 relative overflow-hidden rounded-xl  backdrop-blur-md shadow-md hover:shadow-[0_8px_30px_rgba(95,52,248,0.2)]">
							{/* Animated top line */}
							<div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#ee0820] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

							<CardHeader>
								<div className="w-14 h-14 bg-[#ee0820]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#ee0820]/20 transition-all duration-300 transform group-hover:rotate-[8deg] shadow-inner">
									<service.icon className="h-6 w-6 text-[#ee0820]" />
								</div>
								<CardTitle className="text-xl font-semibold transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ee0820] group-hover:to-[#ee0820]">
									{service.title}
								</CardTitle>
								<CardDescription className="text-base leading-relaxed text-muted-foreground transition-opacity duration-300 group-hover:opacity-90">
									{service.description}
								</CardDescription>
							</CardHeader>

							<CardContent className="space-y-4">
								<div className="text-2xl font-bold text-[#ee0820] flex items-baseline">
									{service.price}
								</div>

								<Button className="w-full relative overflow-hidden rounded-md  border border-[#ee0820]  group-hover:text-white dark:group-hover:text-white transition-all duration-300 hover:shadow-md">
									<span className="relative z-10">Get Quote</span>
									<span className="absolute inset-0 bg-gradient-to-r from-[#ee0820] via-[#ee0820] to-[#ee0820] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
