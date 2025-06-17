import About from "@/components/home/About";
import Features from "@/components/home/Featured";
import Hero from "@/components/home/HeroComponent";
import PricingComponent from "@/components/home/Pricing";
import Services from "@/components/home/Services";
import FinalCTA from "@/components/NewsLetter";

export default function Home() {
  return (
  <div>
    <Hero/>
    <Features/>
    <About/>
    {/* <Services/> */}
    <PricingComponent/>
    <FinalCTA/>
  </div>
  );
}
