import Navbar from "@/components/Navbar";
import WeddingGallery from "@/components/WeddingGallery";
import BirthdayGallery from "@/components/BirthdayGallery";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 md:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-display text-center mb-12">Our Gallery</h1>
        <Tabs defaultValue="weddings" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="weddings">Weddings</TabsTrigger>
            <TabsTrigger value="birthdays">Birthdays</TabsTrigger>
          </TabsList>
          <TabsContent value="weddings">
            <WeddingGallery />
          </TabsContent>
          <TabsContent value="birthdays">
            <BirthdayGallery />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Gallery;