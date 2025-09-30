import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/components/ProductsData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Percent, Clock, Gift, Zap } from "lucide-react";

const Promotions = () => {
  const promotionProducts = products.filter(product =>
    product.section === "promotions" || product.originalPrice
  );

  const clearanceProducts = products.filter(product =>
    product.section === "clearance"
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-red-50/50 via-background to-pink-50/50 dark:from-red-950/20 dark:to-pink-950/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
              <Percent className="w-3 h-3 mr-1" />
              Limited Time Offers
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Special Promotions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Exclusive deals on premium audio equipment. Don't miss out on these limited-time offers from the world's finest audio brands.
            </p>

            {/* Promotional Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Percent className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div className="text-sm font-medium">Up to 30% Off</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-sm font-medium">Limited Time</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Gift className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-sm font-medium">Free Shipping</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-sm font-medium">Fast Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="py-8 bg-gradient-to-r from-red-500 to-pink-500 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">🔥 Flash Sale Alert!</h2>
              <p className="text-red-100">Limited time offer - Save up to RM 3,000 on selected premium speakers</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">23</div>
                  <div className="text-xs text-red-100">HOURS</div>
                </div>
                <div className="text-2xl">:</div>
                <div>
                  <div className="text-2xl font-bold">45</div>
                  <div className="text-xs text-red-100">MINS</div>
                </div>
                <div className="text-2xl">:</div>
                <div>
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-xs text-red-100">SECS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Products */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">🎯 Special Offers</h2>
            <p className="text-muted-foreground">
              {promotionProducts.length} products on special promotion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {promotionProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Clearance Section */}
      {clearanceProducts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-2xl font-bold">🏷️ Clearance Sale</h2>
                <Badge variant="destructive">Final Sale</Badge>
              </div>
              <p className="text-muted-foreground">
                Last chance to get these premium products at unbeatable prices
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {clearanceProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Don't Miss Out!</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These exclusive offers won't last long. Subscribe to our newsletter to be the first to know about new promotions and special deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email for exclusive offers"
              className="px-4 py-2 border rounded-lg flex-1"
            />
            <Button className="px-6 py-2">
              Get Exclusive Deals
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Promotions;