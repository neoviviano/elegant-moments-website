import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Corporate Event Services",
    image: "/lovable-uploads/033a2e26-343a-4851-a51e-ce3654b5c9b8.png",
    description: "Professional corporate event planning and management services."
  },
  {
    title: "Catering Services",
    image: "/lovable-uploads/a134825c-f48a-4574-a36c-3b6d34584b3b.png",
    description: "Exceptional catering solutions for all types of events."
  },
  {
    title: "Weddings and Personal Celebrations",
    image: "/lovable-uploads/402c4a44-31f4-4d6a-8aaf-2f8d0f870422.png",
    description: "Creating magical moments for your special occasions."
  },
  {
    title: "Event Design and Decoration",
    image: "/lovable-uploads/ec04ab7c-4d39-4e16-ba45-73b89e6ba049.png",
    description: "Transforming spaces into stunning event venues."
  },
  {
    title: "Specialized Event Services",
    image: "/lovable-uploads/0ccea68b-af7f-4674-9fb7-5348c28506b5.png",
    description: "Tailored solutions for unique event requirements."
  }
];

const ServiceSection = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-display text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
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