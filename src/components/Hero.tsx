import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1431274172761-fca41d930114')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-6">
          Creating moments that
          <span className="block text-accent">last a lifetime</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Transform your events into unforgettable experiences with our bespoke planning and management services.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
          <Button
            size="lg"
            className="bg-accent text-primary hover:bg-accent/90 w-full md:w-auto"
          >
            Schedule Consultation
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="bg-accent/20 text-white hover:bg-accent/30 w-full md:w-auto"
          >
            View Our Services
          </Button>
        </div>
        
        {/* Founder Quote */}
        <div className="mt-16 max-w-2xl mx-auto bg-black/30 p-8 rounded-lg">
          <p className="text-white/90 font-display italic text-xl mb-4">
            "Creating long lasting memories has been my lifelong passion, Now I want to share my passion with others to embrace"
          </p>
          <p className="text-accent font-display text-lg">
            ~Jacinto Mandi, Founder
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;