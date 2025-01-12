import { Card, CardContent } from "@/components/ui/card";

const PersonalCelebrationsGallery = () => {
  const images = [
    "/lovable-uploads/4e9cdfb7-f8f1-4234-bdc7-2f1c0f107b86.png",
    "/lovable-uploads/78212b39-4802-4b64-bda0-f0332ee3dc98.png",
    "/lovable-uploads/7cc05538-cf9b-473c-a7cf-01dea2f9b0ea.png",
    "/lovable-uploads/af57c78e-1c0b-4abc-a771-95feb7bef975.png",
    "/lovable-uploads/c00409ec-e26b-4a3a-b860-87358f4d8b7d.png",
    "/lovable-uploads/c3b853f1-34b3-4bce-834d-c7f0f6de8628.png",
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={image}
                  alt={`Personal celebration ${index + 1}`}
                  className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalCelebrationsGallery;