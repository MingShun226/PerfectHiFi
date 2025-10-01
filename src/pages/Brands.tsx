import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  Star,
  MapPin,
  Calendar,
  Award,
  Users,
  Volume2,
  ArrowRight,
  Filter,
  Grid,
  List
} from "lucide-react";

const Brands = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    "All",
    "Speakers",
    "Amplifiers",
    "Digital Players",
    "Turntables",
    "Headphones",
    "Accessories"
  ];

  const brands = [
    {
      id: 1,
      name: "Sonus Faber",
      slug: "sonus-faber",
      country: "Italy",
      founded: 1983,
      category: "Speakers",
      logo: "/placeholder.svg",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      description: "Italian manufacturer of high-end audio systems including loudspeakers, headphones, and other audio accessories.",
      specialties: ["Bookshelf Speakers", "Floorstanding Speakers", "Center Channels"],
      priceRange: "Premium",
      productCount: 45,
      rating: 4.9,
      featured: true,
      heritage: "Handcrafted Italian excellence since 1983"
    },
    {
      id: 2,
      name: "KEF",
      slug: "kef",
      country: "United Kingdom",
      founded: 1961,
      category: "Speakers",
      logo: "/placeholder.svg",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300&h=200&fit=crop",
      description: "British loudspeaker manufacturer known for innovative driver technology and acoustic research.",
      specialties: ["UniQ Driver Technology", "Wireless Speakers", "Home Theater"],
      priceRange: "Mid to Premium",
      productCount: 67,
      rating: 4.8,
      featured: true,
      heritage: "60+ years of acoustic innovation"
    },
    {
      id: 3,
      name: "McIntosh",
      slug: "mcintosh",
      country: "United States",
      founded: 1949,
      category: "Amplifiers",
      logo: "/placeholder.svg",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
      description: "American manufacturer of high-end audio equipment known for their distinctive blue meters and exceptional build quality.",
      specialties: ["Tube Amplifiers", "Solid State Amplifiers", "Pre-amplifiers"],
      priceRange: "Ultra Premium",
      productCount: 34,
      rating: 5.0,
      featured: true,
      heritage: "75 years of American audio craftsmanship"
    },
    {
      id: 4,
      name: "Cambridge Audio",
      slug: "cambridge-audio",
      country: "United Kingdom",
      founded: 1968,
      category: "Amplifiers",
      logo: "/placeholder.svg",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=200&fit=crop",
      description: "British audio company focused on creating high-quality, affordable audio equipment with exceptional engineering.",
      specialties: ["Integrated Amplifiers", "Network Players", "CD Players"],
      priceRange: "Entry to Mid",
      productCount: 52,
      rating: 4.7,
      featured: false,
      heritage: "British engineering excellence"
    },
    {
      id: 5,
      name: "Audio Research",
      slug: "audio-research",
      country: "United States",
      founded: 1970,
      category: "Amplifiers",
      logo: "/placeholder.svg",
      image: "https://images.unsplash.com/photo-1574666908499-2a2c8b04e7d0?w=300&h=200&fit=crop",
      description: "Pioneer in high-end tube audio equipment, known for their reference-level preamplifiers and power amplifiers.",
      specialties: ["Tube Preamplifiers", "Tube Power Amplifiers", "Reference Systems"],
      priceRange: "Ultra Premium",
      productCount: 28,
      rating: 4.9,
      featured: true,
      heritage: "The reference in tube amplification"
    },
    {
      id: 6,
      name: "Bowers & Wilkins",
      slug: "bowers-wilkins",
      country: "United Kingdom",
      founded: 1966,
      category: "Speakers",
      logo: "/placeholder.svg",
      image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=300&h=200&fit=crop",
      description: "British premium audio company known for their diamond tweeters and innovative cabinet designs.",
      specialties: ["Diamond Dome Tweeters", "Studio Monitors", "Wireless Speakers"],
      priceRange: "Premium to Ultra Premium",
      productCount: 41,
      rating: 4.8,
      featured: true,
      heritage: "The choice of Abbey Road Studios"
    },
    {
      id: 7,
      name: "Rega",
      slug: "rega",
      country: "United Kingdom",
      founded: 1973,
      category: "Turntables",
      logo: "/placeholder.svg",
      image: "https://images.unsplash.com/photo-1574666908764-c61ccd0ca095?w=300&h=200&fit=crop",
      description: "British manufacturer specializing in turntables, tonearms, and cartridges with minimal, functional design philosophy.",
      specialties: ["Turntables", "Tonearms", "Cartridges"],
      priceRange: "Entry to Premium",
      productCount: 23,
      rating: 4.8,
      featured: false,
      heritage: "50 years of analog excellence"
    },
    {
      id: 8,
      name: "Focal",
      slug: "focal",
      country: "France",
      founded: 1979,
      category: "Speakers",
      logo: "/placeholder.svg",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300&h=200&fit=crop",
      description: "French manufacturer of high-fidelity audio systems and professional studio monitors with distinctive design.",
      specialties: ["Beryllium Tweeters", "Studio Monitors", "Car Audio"],
      priceRange: "Mid to Ultra Premium",
      productCount: 56,
      rating: 4.7,
      featured: true,
      heritage: "French acoustic innovation"
    }
  ];

  const filteredBrands = brands.filter(brand => {
    const matchesCategory = selectedCategory === "All" || brand.category === selectedCategory;
    const matchesSearch = brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         brand.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         brand.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredBrands = brands.filter(brand => brand.featured);

  const getPriceRangeColor = (range: string) => {
    switch (range) {
      case "Entry to Mid":
      case "Entry to Premium":
        return "bg-green-100 text-green-800";
      case "Mid to Premium":
        return "bg-blue-100 text-blue-800";
      case "Premium":
      case "Premium to Ultra Premium":
        return "bg-purple-100 text-purple-800";
      case "Ultra Premium":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* All Brands Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Brands</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our complete collection of premium audio brands
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                {/* Search */}
                <Card className="p-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search brands..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </Card>

                {/* Categories */}
                <Card className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
                          selectedCategory === category
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm text-muted-foreground">
                  {filteredBrands.length} brands found
                </span>

                <div className="flex items-center space-x-4">
                  <div className="flex border border-border rounded-lg overflow-hidden">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className="rounded-none"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className="rounded-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Brands Grid/List */}
              <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-6"}>
                {filteredBrands.map((brand) => (
                  <Link key={brand.id} to={`/brands/${brand.slug}`}>
                    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
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
                              {brand.country}
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
                            {brand.specialties.join(", ")}
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
                          <span>{brand.country}</span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              {filteredBrands.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No brands found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our audio experts can help you find the perfect brand and product for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="" asChild>
                <Link to="/contact">
                  <Users className="mr-2 h-4 w-4" />
                  Speak to an Expert
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/products">
                  <Volume2 className="mr-2 h-4 w-4" />
                  Browse All Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Brands;