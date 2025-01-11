import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WeddingGallery from "@/components/WeddingGallery";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WeddingGallery />
    </div>
  );
};

export default Index;