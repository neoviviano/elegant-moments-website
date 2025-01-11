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
        <div className="space-x-4">
          <Button
            size="lg"
            className="bg-accent text-primary hover:bg-accent/90"
          >
            Schedule Consultation
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            View Our Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;