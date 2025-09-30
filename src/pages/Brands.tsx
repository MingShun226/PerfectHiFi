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
      country: "Italy",
      founded: 1983,
      category: "Speakers",
      logo: "/placeholder.svg",
      image: "/placeholder.svg",
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
      country: "United Kingdom",
      founded: 1961,
      category: "Speakers",
      logo: "/placeholder.svg",
      image: "/placeholder.svg",
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
      country: "United States",
      founded: 1949,
      category: "Amplifiers",
      logo: "/placeholder.svg",
      image: "/placeholder.svg",
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
      country: "United Kingdom",
      founded: 1968,
      category: "Amplifiers",
      logo: "/placeholder.svg",
      image: "/placeholder.svg",
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
      country: "United States",
      founded: 1970,
      category: "Amplifiers",
      logo: "/placeholder.svg",
      image: "/placeholder.svg",
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
      country: "United Kingdom",
      founded: 1966,
      category: "Speakers",
      logo: "/placeholder.svg",
      image: "/placeholder.svg",
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
      country: "United Kingdom",
      founded: 1973,
      category: "Turntables",
      logo: "/placeholder.svg",
      image: "/placeholder.svg",
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
      country: "France",
      founded: 1979,
      category: "Speakers",
      logo: "/placeholder.svg",
      image: "/placeholder.svg",
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

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-card/80" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary">Premium Audio Brands</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              World-Class Audio Brands
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Discover our carefully curated collection of premium audio brands, each chosen for
              their exceptional quality, innovation, and commitment to sonic excellence.
            </p>
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Premium Brands</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">400+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Brands</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our most prestigious partners representing the pinnacle of audio engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBrands.slice(0, 6).map((brand) => (
              <Card key={brand.id} className="p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Volume2 className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{brand.name}</h3>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-3 w-3" />
                    {brand.country}
                    <Calendar className="h-3 w-3 ml-2" />
                    Est. {brand.founded}
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <span className="font-medium">{brand.rating}</span>
                    <span className="text-sm text-muted-foreground">({brand.productCount} products)</span>
                  </div>
                  <Badge className={getPriceRangeColor(brand.priceRange)} variant="secondary">
                    {brand.priceRange}
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {brand.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium text-sm mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {brand.specialties.slice(0, 2).map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                    {brand.specialties.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{brand.specialties.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
                  <Card key={brand.id} className={`overflow-hidden hover:shadow-lg transition-all duration-300 group ${
                    viewMode === "list" ? "flex" : ""
                  }`}>
                    {viewMode === "grid" ? (
                      <>
                        <div className="aspect-video relative overflow-hidden bg-muted/50">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Volume2 className="h-12 w-12 text-primary/50" />
                          </div>
                          <div className="absolute top-4 left-4">
                            {brand.featured && (
                              <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                            )}
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg">{brand.name}</h3>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                              <span className="text-sm">{brand.rating}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <MapPin className="h-3 w-3" />
                            {brand.country}
                            <span>•</span>
                            <Calendar className="h-3 w-3" />
                            {brand.founded}
                          </div>

                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {brand.description}
                          </p>

                          <div className="flex items-center justify-between mb-4">
                            <Badge className={getPriceRangeColor(brand.priceRange)} variant="secondary">
                              {brand.priceRange}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {brand.productCount} products
                            </span>
                          </div>

                          <Button variant="outline" className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View Products
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-32 h-32 bg-muted/50 flex items-center justify-center flex-shrink-0">
                          <Volume2 className="h-8 w-8 text-primary/50" />
                        </div>

                        <div className="flex-1 p-6">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-lg mb-1">{brand.name}</h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                <MapPin className="h-3 w-3" />
                                {brand.country}
                                <span>•</span>
                                <Calendar className="h-3 w-3" />
                                Est. {brand.founded}
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                              <span className="text-sm">{brand.rating}</span>
                            </div>
                          </div>

                          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                            {brand.description}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Badge className={getPriceRangeColor(brand.priceRange)} variant="secondary">
                                {brand.priceRange}
                              </Badge>
                              {brand.featured && (
                                <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                              )}
                            </div>
                            <Button variant="outline" size="sm">
                              View Products
                            </Button>
                          </div>
                        </div>
                      </>
                    )}
                  </Card>
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