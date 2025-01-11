import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WeddingGallery from "@/components/WeddingGallery";
import ServiceSection from "@/components/ServiceSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WeddingGallery />
      <ServiceSection />
    </div>
  );
};

export default Index;