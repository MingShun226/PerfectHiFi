import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/components/ProductsData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Filter, Grid, List } from "lucide-react";

const categories = [
  "All Products",
  "Bookshelf Speaker",
  "Floorstanding Speakers",
  "Center Speakers",
  "Surround Speakers",
  "Ceiling Speakers",
  "Outdoor Speakers",
  "Wireless Speakers",
  "Soundbars",
  "Integrated Amplifier",
  "Network Player / Streamer",
  "Receivers",
  "Subwoofer",
  "Satellite System",
  "Headphones",
  "Earphones"
];

// Map URL parameters to category names
const categoryMap: Record<string, string> = {
  "portable": "Wireless Speakers",
  "wireless": "Wireless Speakers",
  "bookshelf": "Bookshelf Speaker",
  "floorstanding": "Floorstanding Speakers",
  "cables-all": "All Products",
  "speaker-cables": "All Products",
  "analogue": "All Products",
  "digital": "All Products",
  "power": "All Products",
  "amplifiers": "Integrated Amplifier",
  "cd-players": "Network Player / Streamer",
  "streamers": "Network Player / Streamer",
  "subwoofers": "Subwoofer",
  "power-conditioners": "All Products",
  "dacs": "Network Player / Streamer",
  "projectors": "All Products",
  "led-walls": "All Products",
  "av-furniture": "All Products",
};

const Products = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    const catParam = searchParams.get('cat');
    const brandParam = searchParams.get('brand');

    if (catParam && categoryMap[catParam]) {
      setSelectedCategory(categoryMap[catParam]);
    } else if (brandParam) {
      // Handle brand filtering if needed
      setSelectedCategory("All Products");
    }
  }, [searchParams]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc": {
        const priceA = parseFloat(a.price.replace('RM ', '').replace(',', ''));
        const priceB = parseFloat(b.price.replace('RM ', '').replace(',', ''));
        return priceA - priceB;
      }
      case "price-desc": {
        const priceA = parseFloat(a.price.replace('RM ', '').replace(',', ''));
        const priceB = parseFloat(b.price.replace('RM ', '').replace(',', ''));
        return priceB - priceA;
      }
      case "rating": return b.rating - a.rating;
      default: return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              {selectedCategory === "All Products" ? "Premium Audio Products" : selectedCategory}
            </h1>
            <p className="text-xl text-muted-foreground">
              {selectedCategory === "All Products"
                ? "Discover our curated collection of high-end audio equipment"
                : `Browse our selection of premium ${selectedCategory.toLowerCase()}`
              }
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Search */}
              <Card className="p-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
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
                {sortedProducts.length} products found
              </span>
              
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 bg-background border border-border rounded-lg text-sm"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rating</option>
                </select>
                
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

            {/* Products Grid */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;