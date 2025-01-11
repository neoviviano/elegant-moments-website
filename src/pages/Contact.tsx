import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Facebook, Twitter, Landmark } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid phone number");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    toast.success("Thank you for your message! We'll be in touch soon.");
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-center mb-8">
            Do you want to be seen as the Star host of your next event?
            <span className="block text-accent mt-2">Then it's time you take action!</span>
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            <div>
              <Input
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[150px]"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-primary hover:bg-accent/90"
            >
              Send Message
            </Button>
          </form>

          <div className="flex justify-center gap-4 mb-12">
            <Button variant="outline" size="icon">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
            <Link to="/about">
              <Button variant="outline" size="icon">
                <Landmark className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          <section className="space-y-12">
            <h2 className="text-3xl font-display text-center">Getting in Touch Process</h2>

            <div className="space-y-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/lovable-uploads/476b16c6-f7b6-478f-bd72-5fababba5f1b.png"
                  alt="Getting to know you"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-display mb-4">01. Getting to know you:</h3>
                  <p className="text-secondary-foreground">
                    We schedule a meeting to meet with you either virtually or in person. This step us for us to get to know each other. We get to know your visions, goals and expectations for the event. It is at this early stage that you share your preferred destination and inspiration images.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/lovable-uploads/1bec0353-7024-4e29-8869-2e4ac8892a0c.png"
                  alt="Logistics and planning"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-display mb-4">02. Logistics and planning:</h3>
                  <p className="text-secondary-foreground">
                    The second meeting is to map our the process. We will include the questionnaire in detail. This will include venue selection, budget, number of guest. Dates, vendor selection. Permits, accommodation and production.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/lovable-uploads/df5c168d-2c8f-4d68-a763-0c357e806701.png"
                  alt="Design"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-display mb-4">Finally:</h3>
                  <p className="text-secondary-foreground">
                    This is where we bring your concept to life by working with your visuals like colour plate and textures. Every design is personalized to your style, from florals, lighting, furniture, decor, food and drinks. Making sure that you and your guest experience the best of every small detail. Making you seem like the star!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;