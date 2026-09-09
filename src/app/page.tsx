import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import FeaturedPostcards from "@/components/FeaturedPostcards";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F2E8] px-6 text-stone-800">
      <div className="mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <HowItWorks />
        <FeaturedPostcards />
      </div>
    </main>
  );
}