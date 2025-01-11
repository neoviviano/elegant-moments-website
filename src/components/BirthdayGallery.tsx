import { Card, CardContent } from "@/components/ui/card";

const BirthdayGallery = () => {
  const images = [
    "/lovable-uploads/6657dfd9-9141-42bb-9de0-8f6996f5cc54.png",
    "/lovable-uploads/2b06902b-7d8d-49e3-9683-0939a022c1d6.png",
    "/lovable-uploads/0980fe79-2fbc-40b1-a866-57fef501d0dd.png",
    "/lovable-uploads/3ed56ba3-9436-4f63-8409-355172e286bf.png",
    "/lovable-uploads/1a0ab269-2a4e-4a22-a3cf-a79b26cf4f8e.png",
    "/lovable-uploads/47221a30-fe28-4213-b707-04790a1662fd.png",
    "/lovable-uploads/e8dde31d-b925-4c04-8505-52e2f4ced30c.png",
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
                  alt={`Birthday celebration ${index + 1}`}
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

export default BirthdayGallery;