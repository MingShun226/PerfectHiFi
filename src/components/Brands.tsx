import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const brands = [
  {
    name: "SONUS FABER",
    origin: "Italy",
    founded: "1980",
    speciality: "Handcrafted speakers with Italian design philosophy",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    description: "Known for their beautiful wooden cabinets and musical presentation"
  },
  {
    name: "KEF",
    origin: "United Kingdom",
    founded: "1961",
    speciality: "Uni-Q driver technology and innovative acoustic engineering",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300&h=200&fit=crop",
    description: "Revolutionary coaxial drivers and cutting-edge wireless technology"
  },
  {
    name: "MCINTOSH",
    origin: "USA",
    founded: "1949",
    speciality: "Tube and solid-state amplifiers with iconic blue meters",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
    description: "American audio excellence with timeless design and reliability"
  },
  {
    name: "AUDIO RESEARCH",
    origin: "USA",
    founded: "1970",
    speciality: "High-end tube amplifiers and preamplifiers",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=200&fit=crop",
    description: "Pioneering vacuum tube technology for audiophile applications"
  },
  {
    name: "WILSON AUDIO",
    origin: "USA",
    founded: "1974",
    speciality: "Time-domain optimized loudspeakers",
    image: "https://images.unsplash.com/photo-1574666908499-2a2c8b04e7d0?w=300&h=200&fit=crop",
    description: "Hand-built in Utah with meticulous attention to sonic accuracy"
  },
  {
    name: "FOCAL",
    origin: "France",
    founded: "1979",
    speciality: "Beryllium tweeters and flax cone technology",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=300&h=200&fit=crop",
    description: "French engineering excellence in driver technology"
  },
  {
    name: "BOWERS & WILKINS",
    origin: "United Kingdom",
    founded: "1966",
    speciality: "Diamond tweeters and Continuum cone technology",
    image: "https://images.unsplash.com/photo-1574666908764-c61ccd0ca095?w=300&h=200&fit=crop",
    description: "Studio-quality monitors used by Abbey Road Studios"
  },
  {
    name: "DYNAUDIO",
    origin: "Denmark",
    founded: "1977",
    speciality: "Professional studio monitors and MSP drivers",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300&h=200&fit=crop",
    description: "Danish precision engineering for natural sound reproduction"
  }
];

const Brands = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Premium</span> Brands
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We represent the world's most prestigious audio manufacturers, each with their unique heritage and commitment to sonic excellence
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              {/* Brand Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-muted/20 to-muted/5">
                <img
                  src={brand.image}
                  alt={`${brand.name} speakers`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Brand Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {brand.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {brand.origin}
                    </Badge>
                    <Badge variant="outline" className="text-xs bg-white/20 border-white/30 text-white">
                      Est. {brand.founded}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Brand Information */}
              <div className="p-6 space-y-3">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-primary">Specialty</h4>
                  <p className="text-sm text-foreground leading-relaxed">
                    {brand.speciality}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {brand.description}
                  </p>
                </div>

                {/* Heritage Info */}
                <div className="pt-2 flex items-center justify-between text-xs text-muted-foreground border-t border-border">
                  <span>Founded in {brand.founded}</span>
                  <span>{brand.origin}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Experience these legendary brands at our showrooms
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card className="px-6 py-4 bg-primary/5">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Premium Brands</div>
              </div>
            </Card>
            <Card className="px-6 py-4 bg-primary/5">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">3</div>
                <div className="text-sm text-muted-foreground">Showroom Locations</div>
              </div>
            </Card>
            <Card className="px-6 py-4 bg-primary/5">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;