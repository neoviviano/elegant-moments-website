import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const PreviewGallery = () => {
  const categories = [
    {
      title: "Weddings",
      images: [
        "/lovable-uploads/dcba3e3b-f432-4637-9994-6f1070b2a45c.png",
        "/lovable-uploads/6b41f579-8ca2-4a6d-b1bc-48397e02863b.png",
        "/lovable-uploads/9453c29a-a330-49b7-9a70-d75ef626a4bf.png",
      ],
    },
    {
      title: "Birthdays",
      images: [
        "/lovable-uploads/6657dfd9-9141-42bb-9de0-8f6996f5cc54.png",
        "/lovable-uploads/2b06902b-7d8d-49e3-9683-0939a022c1d6.png",
        "/lovable-uploads/0980fe79-2fbc-40b1-a866-57fef501d0dd.png",
      ],
    },
    {
      title: "Personal Celebrations",
      images: [
        "/lovable-uploads/4e9cdfb7-f8f1-4234-bdc7-2f1c0f107b86.png",
        "/lovable-uploads/78212b39-4802-4b64-bda0-f0332ee3dc98.png",
        "/lovable-uploads/7cc05538-cf9b-473c-a7cf-01dea2f9b0ea.png",
      ],
    },
    {
      title: "Corporate Events",
      comingSoon: true,
    },
    {
      title: "Catering Events",
      images: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
        "https://images.unsplash.com/photo-1555244162-803834f70033",
        "https://images.unsplash.com/photo-1555244162-803834f70033",
      ],
    },
    {
      title: "Specialized Events",
      comingSoon: true,
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-12">Our Gallery</h2>
        
        <Tabs defaultValue="weddings" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8 overflow-x-auto">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.title} 
                value={category.title.toLowerCase().replace(" ", "-")}
                className="px-2 py-1 text-sm md:text-base whitespace-nowrap"
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent 
              key={category.title} 
              value={category.title.toLowerCase().replace(" ", "-")}
              className="mt-6"
            >
              {category.comingSoon ? (
                <div className="bg-muted rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-display mb-4">Coming Soon</h3>
                  <p className="text-muted-foreground">
                    We are currently curating an exceptional collection of {category.title.toLowerCase()}. 
                    Please check back soon to explore our premium event experiences.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.images?.map((image, imgIndex) => (
                    <Card key={imgIndex} className="overflow-hidden">
                      <CardContent className="p-0">
                        <img
                          src={image}
                          alt={`${category.title} ${imgIndex + 1}`}
                          className="w-full h-[250px] object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Link to="/gallery">
            <Button className="bg-accent text-primary hover:bg-accent/90 w-full md:w-auto">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PreviewGallery;