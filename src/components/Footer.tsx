import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  Learn more about E.E.M
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-display mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Phone: +27 123 456 789</li>
              <li>Email: info@eleganceevents.co.za</li>
              <li>Cape Town, South Africa</li>
            </ul>
            <Link to="/contact" className="inline-block mt-4">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-display mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-accent/20 text-center">
          <p>&copy; {new Date().getFullYear()} Elegance Events Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;