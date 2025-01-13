import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const About = () => {
  const { toast } = useToast();

  const copyLink = () => {
    const link = `${window.location.origin}/about`;
    navigator.clipboard.writeText(link);
    toast({
      title: "Link copied!",
      description: "The link to this page has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <div className="flex justify-center mb-4">
          <Button 
            variant="outline" 
            onClick={copyLink}
            className="bg-accent text-primary hover:bg-accent/90"
          >
            Copy Link to About Page
          </Button>
        </div>
        <h1 className="text-4xl font-display font-bold text-center mb-2">Hello</h1>
        <h1 className="text-4xl font-display font-bold text-center mb-12">About Us</h1>
        
        {/* Origins Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-display font-semibold mb-4">Origins</h2>
            <p className="text-lg leading-relaxed">
              <span className="font-semibold">Elegance event management</span> was born out of a passion for creating <span className="text-primary font-semibold">magical moments</span> and <span className="text-primary font-semibold">unforgettable experiences</span>. Founder <span className="font-semibold">Jacinto</span>, has always had a knack for organizing and coordinating events, and he saw a gap in the market for event management that offers <span className="text-primary font-semibold">exceptional services</span>, tailored to the unique needs & our customers. With a vision to become the <span className="text-primary font-semibold">go-to destination</span> for socialites, party host, staff parties and any part of events in Cape town.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/lovable-uploads/d8c9fbe8-677a-4ead-8be8-08fd83534226.png" alt="Eiffel Tower" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-semibold text-center mb-12">So what's the difference? Why choose us?</h2>
          
          {/* Point A */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/2">
              <img src="/lovable-uploads/5c7f4ba9-39cd-4531-81b1-2d4141d37146.png" alt="Business commitment" className="rounded-lg shadow-lg w-full" />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg leading-relaxed">
                Our <span className="text-primary font-semibold">RELENTLESS</span> commitment to customer satisfaction
              </p>
            </div>
          </div>

          {/* Point B */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12">
            <div className="md:w-1/2">
              <img src="/lovable-uploads/e0e976ac-9a7b-4e88-9916-04cdf43baa1b.png" alt="Strategic planning" className="rounded-lg shadow-lg w-full" />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg leading-relaxed">
                <span className="text-primary font-semibold">UNDERSTANDING</span> that each unique event <span className="text-primary font-semibold">REQUIRES</span> personalized touch which is why we give customizable packages to meet the needs and preferences of our customers.
              </p>
            </div>
          </div>

          {/* Point C */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/2">
              <img src="/lovable-uploads/b40a5610-6ed2-49be-9077-7ee7cd28b5b3.png" alt="Delivery service" className="rounded-lg shadow-lg w-full" />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg leading-relaxed">
                Over delivery, our team will go <span className="text-primary font-semibold">above and beyond</span> to ensure every detail is taken care of from set up to clean up as well as our expert caterers who will leave no stone unturned and <span className="text-primary font-semibold">GUARANTEE</span> that our client enjoys their culinary experience
              </p>
            </div>
          </div>
        </div>

        {/* Financial Summary Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-semibold text-center mb-8">Financial Summary</h2>
          <div className="flex flex-col items-center gap-8">
            <img src="/lovable-uploads/4376c279-23f3-4232-9322-94ed2730ae39.png" alt="Financial growth" className="rounded-lg shadow-lg w-full md:w-2/3 mb-8" />
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                In terms of financial projections, we anticipate generating a revenue of <span className="text-primary font-semibold">R 200,000</span> in our first year of operation. We are also confident in our business model and expect a remarkable <span className="text-primary font-semibold">growth rate of 80%</span> in the coming years.
              </p>
              <p>
                This growth will be driven by our <span className="text-primary font-semibold">exceptional services</span>, excellent customer relationships and strategic marketing efforts.
              </p>
              <p>
                We have carefully analyzed the market demand and believe Cape Town presents a <span className="text-primary font-semibold">lucrative opportunity</span> for our business to thrive.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="text-center mb-16">
          <p className="text-xl font-display">
            In Conclusion: <span className="text-primary font-semibold">Elegance Events Management</span> is poised to become the <span className="text-primary font-semibold">leading event management company</span> in Cape Town. We are excited to embark on this journey and look forward to making every event unforgettable.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant="outline"
            onClick={() => {
              window.scrollTo(0, 0);
              window.location.href = "/";
            }}
          >
            Return Home
          </Button>
          <Button className="bg-primary text-white">
            Schedule Meeting
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;