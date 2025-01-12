import { Card, CardContent } from "@/components/ui/card";

const CateringGallery = () => {
  const images = [
    "/lovable-uploads/e11f5a78-f263-4292-94db-858ed49fdbdc.png",
    "/lovable-uploads/4efbd79a-a059-4a6b-be08-f725a2be574c.png",
    "/lovable-uploads/8a2f4e86-9148-49c6-b788-15a61660d24b.png",
    "/lovable-uploads/911d4c26-e741-4c15-bbe9-833475650d01.png",
    "/lovable-uploads/1e6ae136-d231-4a25-bc25-a02e6eca4e90.png",
    "/lovable-uploads/d0797990-d452-4501-a121-93342e9e758a.png",
    "/lovable-uploads/8473a33a-0179-4ba4-abb5-cd25a5a72861.png",
    "/lovable-uploads/d7b0e5c5-9bf6-4f8e-b9f4-1e94a79487c4.png",
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
                  alt={`Catering service ${index + 1}`}
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

export default CateringGallery;