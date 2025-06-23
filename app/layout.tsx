import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterComponent from "@/components/Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Revalio - Simplify Your Property Tax Management",
	description: "Simplify Your Property Tax Management with Revalio - Your Trusted Partner for Accurate Tax Filing and Expert Support. Experience hassle-free tax management with our user-friendly platform and dedicated support team. Get started today! ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					disableTransitionOnChange>
					<Header />
					{children}
					<Toaster />

					<FooterComponent />
				</ThemeProvider>
			</body>
		</html>
	);
}
