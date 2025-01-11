import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Corporate Event Services",
    image: "/lovable-uploads/033a2e26-343a-4851-a51e-ce3654b5c9b8.png",
    description: "From concept to execution, we are committed to leaving a lasting impression on our clients. Our expert team meticulously handles every detail to guarantee a seamless and impactful experience. Whether you're planning a conference, product launch, or company celebration, we deliver tailored solutions that align with your brand and objectives."
  },
  {
    title: "Catering Services",
    image: "/lovable-uploads/a134825c-f48a-4574-a36c-3b6d34584b3b.png",
    description: "We provide quality food with custom menus for events of any size, from small gatherings to large celebrations. Our team handles every detail, making sure your guests have a memorable dining experience with great food and service."
  },
  {
    title: "Weddings and Personal Celebrations",
    image: "/lovable-uploads/402c4a44-31f4-4d6a-8aaf-2f8d0f870422.png",
    description: "We create unforgettable weddings and personal celebrations. From intimate gatherings to grand events, our team handles everything from venue selection to catering, ensuring a seamless and memorable experience that lets you enjoy your special day to the fullest."
  },
  {
    title: "Event Design and Decoration",
    image: "/lovable-uploads/ec04ab7c-4d39-4e16-ba45-73b89e6ba049.png",
    description: "We create beautiful and personalized settings for any occasion, bringing your vision to life with creative themes, elegant decor, and meticulous attention to detail. Whether it's a corporate event, wedding, or personal celebration, our team ensures every element reflects your style, making your event truly memorable and visually spectacular."
  },
  {
    title: "Specialized Event Services",
    image: "/lovable-uploads/0ccea68b-af7f-4674-9fb7-5348c28506b5.png",
    description: "We offer a range of specialized event services to meet your unique needs. From custom event planning and logistics to creative entertainment options, our expert team delivers tailored services that make your event exceptional and memorable. Whether it's a corporate function, wedding, or themed celebration, we provide the expertise and resources to ensure every detail is perfect and aligned with your vision."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display text-center mb-12">
            Be the star host, while we work behind the scenes
          </h1>
          
          <div className="space-y-16 my-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <h2 className="text-2xl font-display mb-4">{service.title}</h2>
                    <p className="text-secondary-foreground">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/">
              <Button
                size="lg"
                className="bg-accent text-primary hover:bg-accent/90"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;