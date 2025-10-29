import HeroSection from "@/components/homepage/HeroSection";
import Brands from "@/components/homepage/Brands";
import Features from "@/components/homepage/Features";
import Services from "@/components/homepage/Services";
import Booking from "@/components/homepage/Booking";
import RecentWorks from "@/components/homepage/RecentWorks";
import Clients from "@/components/homepage/Clients";
import Contact from "@/components/homepage/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <Brands />
      <Features />
      <RecentWorks />
      <Services />
      <Booking />
      <Clients />
      <Contact />
    </div>
  );
}
