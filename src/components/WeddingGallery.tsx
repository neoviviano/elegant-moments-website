import { Card, CardContent } from "@/components/ui/card";

const WeddingGallery = () => {
  const images = [
    "/lovable-uploads/dcba3e3b-f432-4637-9994-6f1070b2a45c.png",
    "/lovable-uploads/6b41f579-8ca2-4a6d-b1bc-48397e02863b.png",
    "/lovable-uploads/9453c29a-a330-49b7-9a70-d75ef626a4bf.png",
    "/lovable-uploads/84059584-07ca-4635-b1a3-3807e9f57840.png",
    "/lovable-uploads/7e830366-eeec-46aa-95eb-0b446d31a804.png",
    "/lovable-uploads/8b7822c6-3390-4ea5-b8a7-09a0ff136de6.png",
    "/lovable-uploads/3100b604-530d-4322-9369-99c7403aa3be.png",
    "/lovable-uploads/bfc4eabd-a594-4708-95e1-34c77ae0776d.png",
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-display text-center mb-12">Wedding Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={image}
                  alt={`Wedding decoration ${index + 1}`}
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

export default WeddingGallery;