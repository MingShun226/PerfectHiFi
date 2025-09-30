import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/components/ProductsData";

const NewArrivals = () => {
  const newArrivalsProducts = products.filter(product =>
    product.section === "new-arrivals"
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">New Arrivals</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover the latest additions to our premium audio collection. Fresh innovations and cutting-edge technology from the world's leading audio brands.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Latest Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Expert Curated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Recently Added Products</h2>
            <p className="text-muted-foreground">
              {newArrivalsProducts.length} new products available
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newArrivalsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {newArrivalsProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🎵</div>
              <h3 className="text-xl font-semibold mb-2">More New Products Coming Soon</h3>
              <p className="text-muted-foreground">
                We're constantly adding new premium audio products to our collection. Check back soon for the latest arrivals.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6">
            Be the first to know about our latest arrivals and exclusive product launches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border rounded-lg flex-1"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewArrivals;