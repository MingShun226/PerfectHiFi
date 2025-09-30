import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const categories = [
  {
    id: 1,
    name: "Speakers",
    description: "Immersive, captivating sound",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    gradient: "from-orange-500/80 to-red-500/80"
  },
  {
    id: 2,
    name: "Subwoofers", 
    description: "Heart-pounding, theatre-like bass",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    gradient: "from-slate-600/80 to-slate-800/80"
  },
  {
    id: 3,
    name: "Cables",
    description: "Optimise your viewing and listening experience", 
    image: "https://images.unsplash.com/photo-1544473244-f6895e69ad8b?w=600&h=400&fit=crop",
    gradient: "from-red-600/80 to-red-800/80"
  },
  {
    id: 4,
    name: "All",
    description: "Browse ATLAS's range of products",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=400&fit=crop", 
    gradient: "from-slate-700/80 to-slate-900/80"
  }
];

const Categories = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Popular <span className="text-gradient">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover our range of premium audio solutions
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[Autoplay({ delay: 4000 })]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {categories.map((category, index) => (
              <CarouselItem key={category.id} className={`pl-4 ${index < 2 ? 'md:basis-1/2' : 'basis-full md:basis-1/2 lg:basis-1/2'}`}>
                <Card className="group cursor-pointer overflow-hidden border-0 bg-transparent">
                  <div className="relative h-80 overflow-hidden rounded-2xl">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} transition-opacity duration-300 group-hover:opacity-90`} />

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                      <h3 className="text-3xl font-bold mb-2 group-hover:transform group-hover:translate-y-[-4px] transition-transform duration-300">
                        {category.name}
                      </h3>
                      <p className="text-white/90 mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      <div className="flex items-center gap-2 text-white group-hover:gap-4 transition-all duration-300">
                        <span className="text-sm font-medium">Explore</span>
                        <ArrowRight className="h-4 w-4 group-hover:transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Categories;