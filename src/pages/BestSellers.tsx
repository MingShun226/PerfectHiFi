import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/components/ProductsData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Award, Star } from "lucide-react";

const BestSellers = () => {
  const bestSellersProducts = products.filter(product =>
    product.section === "best-sellers"
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50/50 via-background to-orange-50/50 dark:from-amber-950/20 dark:to-orange-950/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
              <TrendingUp className="w-3 h-3 mr-1" />
              Most Popular
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Best Sellers</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our most loved products chosen by audiophiles worldwide. These are the speakers that have earned the trust and acclaim of our customers.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-center">1000+</div>
                <div className="text-sm text-muted-foreground text-center">Happy Customers</div>
              </Card>
              <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-center">4.8+</div>
                <div className="text-sm text-muted-foreground text-center">Average Rating</div>
              </Card>
              <Card className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-8 h-8 text-purple-500" />
                </div>
                <div className="text-2xl font-bold text-center">95%</div>
                <div className="text-sm text-muted-foreground text-center">Satisfaction Rate</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why These Products */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why These Are Our Best Sellers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These products have consistently delivered exceptional performance and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Award-Winning Sound</h3>
              <p className="text-sm text-muted-foreground">
                Recognized by audio professionals and publications worldwide for exceptional sound quality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Customer Approved</h3>
              <p className="text-sm text-muted-foreground">
                Highly rated by customers who have experienced these products firsthand.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Proven Performance</h3>
              <p className="text-sm text-muted-foreground">
                Consistently outperform competitors in blind listening tests and technical measurements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Top Selling Products</h2>
            <p className="text-muted-foreground">
              {bestSellersProducts.length} best-selling products in our collection
            </p>
          </div>

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
                We're analyzing customer preferences to bring you our most popular products.
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