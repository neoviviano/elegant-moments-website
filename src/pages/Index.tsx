import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PreviewGallery from "@/components/PreviewGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PreviewGallery />
      <Footer />
    </div>
  );
};

export default Index;