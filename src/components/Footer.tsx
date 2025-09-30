import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-gradient">Perfect</span>
                <span className="text-foreground ml-1">Hi-Fi</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Malaysia's premier destination for high-end audio equipment. 
                Bringing exceptional sound to audiophiles since 1999.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Products", "Brands", "About Us", "Contact", "Blog"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Categories</h3>
            <ul className="space-y-3">
              {[
                "Speakers",
                "Amplifiers", 
                "Turntables",
                "Headphones",
                "Cables",
                "Accessories"
              ].map((category) => (
                <li key={category}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-6">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+60 3-2141 8888</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>info@perfecthifi.com.my</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Kuala Lumpur, Malaysia</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Subscribe for latest audio news and exclusive offers
              </p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-background/50"
                />
                <Button size="sm" className="">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Perfect Hi-Fi. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Warranty
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };