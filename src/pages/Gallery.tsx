import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import WeddingGallery from "@/components/WeddingGallery";
import BirthdayGallery from "@/components/BirthdayGallery";
import PersonalCelebrationsGallery from "@/components/PersonalCelebrationsGallery";
import CorporateEventsGallery from "@/components/CorporateEventsGallery";
import CateringGallery from "@/components/CateringGallery";
import SpecializedEventsGallery from "@/components/SpecializedEventsGallery";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Home, Calendar } from "lucide-react";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 px-4 md:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-display text-center mb-12">Our Gallery</h1>
        <Tabs defaultValue="weddings" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-12">
            <TabsTrigger value="weddings">Weddings</TabsTrigger>
            <TabsTrigger value="birthdays">Birthdays</TabsTrigger>
            <TabsTrigger value="personal-celebrations">Personal Celebrations</TabsTrigger>
            <TabsTrigger value="corporate">Corporate Events</TabsTrigger>
            <TabsTrigger value="catering">Catering Events</TabsTrigger>
            <TabsTrigger value="specialized">Specialized Events</TabsTrigger>
          </TabsList>
          <TabsContent value="weddings">
            <WeddingGallery />
          </TabsContent>
          <TabsContent value="birthdays">
            <BirthdayGallery />
          </TabsContent>
          <TabsContent value="personal-celebrations">
            <PersonalCelebrationsGallery />
          </TabsContent>
          <TabsContent value="corporate">
            <CorporateEventsGallery />
          </TabsContent>
          <TabsContent value="catering">
            <CateringGallery />
          </TabsContent>
          <TabsContent value="specialized">
            <SpecializedEventsGallery />
          </TabsContent>
        </Tabs>

        <div className="flex justify-center gap-4 mt-12 mb-16">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <Home size={20} />
              Return Home
            </Button>
          </Link>
          <Button className="bg-accent text-primary hover:bg-accent/90 flex items-center gap-2">
            <Calendar size={20} />
            Schedule Meeting
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;