import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Play, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showcaseProducts = [
    {
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&h=600&fit=crop",
      name: "KEF Speakers",
      category: "Premium Audio"
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      name: "Sonus Faber",
      category: "Italian Excellence"
    },
    {
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      name: "McIntosh Amplifier",
      category: "American Classic"
    },
    {
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
      name: "Premium Setup",
      category: "Complete System"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % showcaseProducts.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [showcaseProducts.length]);

  return (
    <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-card/80" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(20 48% 35% / 0.4) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(46 70% 85% / 0.3) 0%, transparent 50%),
                           linear-gradient(90deg, transparent 49%, hsl(20 48% 35% / 0.15) 50%, transparent 51%),
                           linear-gradient(0deg, transparent 49%, hsl(46 70% 85% / 0.15) 50%, transparent 51%)`,
          backgroundSize: '200px 200px, 300px 300px, 100px 100px, 100px 100px',
          animation: 'gradient-shift 20s ease infinite'
        }} />
      </div>

      {/* Floating Audio Waveform Elements */}
      <div className="absolute inset-0">
        {/* Large floating orbs - responsive sizes */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />

        {/* Audio waveform bars */}
        <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-10 flex space-x-1 opacity-30">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-primary/60 rounded-full animate-pulse"
              style={{
                height: `${Math.random() * 60 + 15}px`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${1.5 + Math.random() * 1}s`
              }}
            />
          ))}
        </div>

        {/* Geometric shapes - responsive */}
        <div className="absolute top-1/3 right-4 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: "20s" }} />
        <div className="absolute bottom-1/3 left-4 sm:left-10 w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 border border-primary/30 rotate-45 animate-pulse" />
        
        {/* Floating particles - fewer on mobile */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary/40 rounded-full animate-float hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/40" />

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
              <span className="text-gradient">Perfect</span>
              <br />
              <span className="text-foreground">Audio</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Experience the ultimate in high-fidelity audio with our curated collection of premium speakers, amplifiers, and accessories.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-8 sm:mb-12">
              <Button size="lg" className="group px-6 sm:px-8 py-3 sm:py-4 text-base w-full sm:w-auto" asChild>
                <Link to="/products">
                  <Volume2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                  Explore Collection
                </Link>
              </Button>

              <Button variant="outline" size="lg" className="px-6 sm:px-8 py-3 sm:py-4 text-base glass hover:bg-primary/10 w-full sm:w-auto" asChild>
                <Link to="/book-demo">
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Book Demo
                </Link>
              </Button>
            </div>

            {/* Stats - responsive grid */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-xl font-bold text-gradient mb-1 sm:mb-2">50+</div>
                <div className="text-muted-foreground text-xs sm:text-sm">Premium Brands</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-xl font-bold text-gradient mb-1 sm:mb-2">1000+</div>
                <div className="text-muted-foreground text-xs sm:text-sm">Happy Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-xl font-bold text-gradient mb-1 sm:mb-2">25+</div>
                <div className="text-muted-foreground text-xs sm:text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right side - Auto-switching product showcase */}
          <div className="hidden lg:block relative">
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl" />

              {/* Image slider */}
              {showcaseProducts.map((product, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentImageIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-3xl"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-3xl" />

                  {/* Product label */}
                  <div className="absolute bottom-6 left-6 z-20 bg-background/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-xl">
                    <p className="text-base font-bold">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </div>
                </div>
              ))}

              {/* Indicator dots */}
              <div className="absolute bottom-6 right-6 z-20 flex gap-2">
                {showcaseProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-primary w-8"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>

      {/* Premium glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;