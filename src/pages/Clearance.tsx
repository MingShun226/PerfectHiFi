import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/components/ProductsData";
import { Badge } from "@/components/ui/badge";
import { Tag, TrendingDown, AlertCircle } from "lucide-react";

const Clearance = () => {
  const clearanceProducts = products.filter(product =>
    product.section === "clearance"
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-orange-50/50 via-background to-amber-50/50 dark:from-orange-950/20 dark:to-amber-950/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
              <Tag className="w-3 h-3 mr-1" />
              Clearance Sale
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Clearance Deals</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Incredible savings on discontinued models and final stock. Premium audio equipment at unbeatable prices - while supplies last!
            </p>

            {/* Clearance Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingDown className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="text-sm font-medium">Up to 50% Off</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-2">
                  <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div className="text-sm font-medium">Final Stock</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Tag className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="text-sm font-medium">Clearance Only</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clearance Products */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">🏷️ Clearance Items</h2>
            <p className="text-muted-foreground">Limited quantities available - grab them before they're gone!</p>
          </div>

          {clearanceProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {clearanceProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No clearance items available at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clearance;
