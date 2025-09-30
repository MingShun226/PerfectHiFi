import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Headphones } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the finest audio equipment from world-renowned manufacturers"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Passionate audiophiles with decades of combined experience"
  },
  {
    icon: Clock,
    title: "25+ Years",
    description: "Serving the Malaysian audiophile community since 1999"
  },
  {
    icon: Headphones,
    title: "Personal Service",
    description: "Dedicated consultation to find your perfect audio setup"
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Crafting <span className="text-gradient">Audio</span>
                <br />
                Experiences
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over two decades, Perfect Hi-Fi has been Malaysia's premier destination 
                for high-end audio equipment. We believe that exceptional sound reproduction 
                is an art form, and our mission is to bring that artistry to your home.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="space-y-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="">
                Our Story
              </Button>
              <Button variant="outline" size="lg" className="glass hover:bg-primary/10">
                Visit Showroom
              </Button>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="card-premium p-0 overflow-hidden hover-scale">
                  <img 
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
                    alt="Audio Equipment"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="card-premium p-0 overflow-hidden hover-scale">
                  <img 
                    src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=200&fit=crop"
                    alt="Speakers"
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="card-premium p-0 overflow-hidden hover-scale">
                  <img 
                    src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=200&fit=crop"
                    alt="Premium Speakers"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="card-premium p-0 overflow-hidden hover-scale">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
                    alt="Audio Setup"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-8 -left-8 card-premium p-6 animate-float">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 card-premium p-6 animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Premium Brands</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;