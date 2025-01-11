import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Corporate Event Services",
    image: "/lovable-uploads/191c7fa9-b075-4c29-9464-0030905367f7.png",
    description: "Professional corporate event planning and management services."
  },
  {
    title: "Catering Services",
    image: "/lovable-uploads/59d76808-8ea6-4040-9005-bf0559a2fa49.png",
    description: "Exceptional catering solutions for all types of events."
  },
  {
    title: "Weddings and Personal Celebrations",
    image: "/lovable-uploads/3feadfbf-adb1-47e9-8d2b-5e3a350a752c.png",
    description: "Creating magical moments for your special occasions."
  },
  {
    title: "Event Design and Decoration",
    image: "/lovable-uploads/04b9d313-cb7f-4af9-acf2-d0bf5e51583b.png",
    description: "Transforming spaces into stunning event venues."
  },
  {
    title: "Specialized Event Services",
    image: "/lovable-uploads/145aec7f-9f0d-43cf-aaf8-5bdad28f378c.png",
    description: "Tailored solutions for unique event requirements."
  }
];

const ServiceSection = ({ isHomePage = false }) => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-display text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-lg ${
                isHomePage && index > 2 ? 'hidden' : ''
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-display mb-2">{service.title}</h3>
                <p className="text-secondary-foreground mb-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services">
            <Button
              size="lg"
              className="bg-accent text-primary hover:bg-accent/90"
            >
              Learn More About Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;