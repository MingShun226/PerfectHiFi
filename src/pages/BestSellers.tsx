import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/components/ProductsData";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const BestSellers = () => {
  const bestSellersProducts = products.filter(product =>
    product.section === "best-sellers"
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Simplified */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
              <TrendingUp className="w-3 h-3 mr-1" />
              Most Popular
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Best Sellers</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover our most popular products loved by audiophiles worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bestSellersProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {bestSellersProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Best Sellers Coming Soon</h3>
              <p className="text-muted-foreground">
                We're curating our most popular products for you.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BestSellers;