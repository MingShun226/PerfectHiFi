import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  Star, 
  Truck, 
  Shield, 
  RotateCcw, 
  Phone,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Volume2,
  Zap,
  Award
} from "lucide-react";
import { products } from "@/components/ProductsData";
import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";
import speaker3 from "@/assets/speaker-3.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedFinish, setSelectedFinish] = useState("Walnut");

  // Get product from centralized data or fallback to first product
  const productData = products.find(p => p.id === parseInt(id || "1")) || products[0];

  const product = {
    ...productData,
    // Add additional product detail page specific data
    model: "Sonetto I G2",
    reviewCount: productData.reviews?.length || 0,
    inStock: true,
  images: [
    speaker1,
    speaker2, 
    speaker3,
    speaker1,
    speaker2
  ],
    finishes: ["Walnut", "Piano Black", "Graphite"],
    features: [
      {
        icon: Volume2,
        title: "Flower Patterned Surround",
        description: "Unique floral pattern that reduces interference and improves sound dispersion with asymmetric shape breaking circular modes."
      },
      {
        icon: Zap,
        title: "Intono Technology", 
        description: "Construction solution designed to eliminate unwanted frequencies within the cabinet for quieter performance."
      },
      {
        icon: Award,
        title: "Reflex Duct",
        description: "Newly optimized duct design for enhanced flexibility in speaker placement with superior airflow control."
      }
    ],
    specifications: {
      system: "2.0 way midwoofer front vented box",
      tweeter: '1.1" DAD™ Arrow Point extended frequency tweeter, Copper shorting ring',
      midwoofer: '1x 5" Midwoofer, Aluminum demodulation ring',
      crossover: "2100 Hz",
      frequency: "52 Hz - 40,000 Hz",
      sensitivity: "86 dB SPL (2.83 V/1m)",
      impedance: "4 Ohm",
      power: "30 W - 150 W",
      dimensions: "377 x 200 x 304 mm (each)",
      weight: "8.4 kg (each)",
      standDimensions: "687 x 355 x 406 mm",
      standWeight: "6.50 kg"
    }
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative group">
              <Card className="overflow-hidden glass">
                <div className="aspect-square relative">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Navigation Arrows */}
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/80 backdrop-blur-sm"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/80 backdrop-blur-sm"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((image, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer overflow-hidden transition-all duration-300 ${
                    selectedImage === index 
                      ? "ring-2 ring-primary shadow-lg scale-105" 
                      : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full aspect-square object-cover"
                  />
                </Card>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="secondary">{product.badge}</Badge>
                <span className="text-sm text-primary font-medium">{product.brand}</span>
              </div>
              
              <h1 className="text-4xl font-bold mb-4 animate-fade-in">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < product.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>

              <p className="text-muted-foreground mb-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
                {product.description}
              </p>
            </div>

            <Separator />

            {/* Price */}
            <div className="animate-fade-in" style={{animationDelay: "0.3s"}}>
              <div className="text-2xl font-bold text-primary mb-2">
                {product.price}
              </div>
              {product.originalPrice && (
                <div className="text-lg text-muted-foreground line-through">
                  {product.originalPrice}
                </div>
              )}
            </div>

            <Separator />

            {/* Options */}
            <div className="space-y-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
              <div>
                <label className="text-sm font-medium mb-2 block">Finishing:</label>
                <div className="flex space-x-2">
                  {product.finishes.map((finish) => (
                    <Button
                      key={finish}
                      variant={selectedFinish === finish ? "default" : "outline"}
                      onClick={() => setSelectedFinish(finish)}
                      className="transition-all duration-200"
                    >
                      {finish}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Quantity:</label>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-16 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon" 
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Separator />

            {/* Action Buttons */}
            <div className="space-y-4 animate-fade-in" style={{animationDelay: "0.5s"}}>
              <Button size="lg" className="w-full text-lg py-6 ">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart - {product.price}
              </Button>
              
              <div className="flex space-x-3">
                <Button variant="outline" size="lg" className="flex-1">
                  <Heart className="mr-2 h-4 w-4" />
                  Add to Wishlist
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            {/* Guarantees */}
            <Card className="p-4 glass animate-fade-in" style={{animationDelay: "0.6s"}}>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Truck className="h-4 w-4 text-primary" />
                  <span className="text-sm">Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm">2 Year Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RotateCcw className="h-4 w-4 text-primary" />
                  <span className="text-sm">30-Day Returns</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm">Expert Support</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <Card key={index} className="p-6 glass hover:shadow-xl transition-all duration-300 group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Details Tabs */}
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-8">
            <Card className="p-8 glass">
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold mb-6">COMPACT BUT UNCOMPROMISING</h3>
                <p className="text-lg mb-6">
                  The Sonus faber Sonetto I G2 represents the perfect marriage of Italian craftsmanship and cutting-edge audio technology. 
                  Designed for audiophiles who demand uncompromising sound quality in a compact form factor.
                </p>
                
                <h4 className="text-xl font-semibold mb-4">Open Pore Wood Finish</h4>
                <p className="mb-6">
                  The open pore fine wood finish showcases the natural beauty of the wood grain while providing a tactile and 
                  visually appealing texture. This finish enhances the organic feel of the speakers, creating a harmonious blend 
                  of aesthetics and craftsmanship in tune with Sonus faber Natural Sound.
                </p>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="specifications" className="mt-8">
            <Card className="p-8 glass">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Audio Specifications</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">System:</span>
                      <span>{product.specifications.system}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tweeter:</span>
                      <span className="text-right">{product.specifications.tweeter}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Midwoofer:</span>
                      <span className="text-right">{product.specifications.midwoofer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Crossover:</span>
                      <span>{product.specifications.crossover}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Frequency Response:</span>
                      <span>{product.specifications.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sensitivity:</span>
                      <span>{product.specifications.sensitivity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Impedance:</span>
                      <span>{product.specifications.impedance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Recommended Power:</span>
                      <span>{product.specifications.power}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Physical Specifications</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Dimensions (each):</span>
                      <span>{product.specifications.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Weight (each):</span>
                      <span>{product.specifications.weight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Stand Dimensions:</span>
                      <span className="text-right">{product.specifications.standDimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Stand Weight:</span>
                      <span>{product.specifications.standWeight}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-4">
              {/* Reviews Summary Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-medium">Product Reviews</span>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-orange-400 fill-orange-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-orange-500">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">Write Review</Button>
              </div>

              {/* Rating Overview */}
              <Card className="p-4 bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
                <div className="grid grid-cols-5 gap-2">
                  {[5,4,3,2,1].map((stars) => (
                    <div key={stars} className="flex items-center gap-1">
                      <span className="text-xs">{stars}</span>
                      <Star className="h-3 w-3 text-orange-400 fill-orange-400" />
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-orange-400 h-2 rounded-full"
                          style={{ width: stars === 5 ? '70%' : stars === 4 ? '25%' : '5%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Individual Reviews - Shopee/Lazada Style */}
              <div className="space-y-3">
                {product.reviews?.map((review, idx) => (
                  <Card key={idx} className="p-4 hover:shadow-sm transition-shadow">
                    <div className="flex gap-3">
                      {/* Profile Avatar */}
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {review.name.charAt(0)}
                      </div>

                      <div className="flex-1">
                        {/* User Info */}
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium">{review.name}</span>
                          <Badge variant="secondary" className="text-xs px-2 py-0">Verified</Badge>
                        </div>

                        {/* Rating and Date */}
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-3 w-3 ${i < review.rating ? 'text-orange-400 fill-orange-400' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
                        </div>

                        {/* Review Content */}
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2">{review.comment}</p>

                        {/* Review Actions */}
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <button className="hover:text-blue-500 transition-colors">👍 Helpful ({Math.floor(Math.random() * 10) + 1})</button>
                          <button className="hover:text-blue-500 transition-colors">Reply</button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Load More Reviews */}
              <div className="text-center pt-4">
                <Button variant="outline" size="sm">
                  View All Reviews ({product.reviewCount})
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
{/* Similar Products Section */}        <section className="mt-16">          <h2 className="text-3xl font-bold mb-8">Similar Products You May Like</h2>          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">            {products              .filter(p => p.id !== product.id && p.category === product.category)              .slice(0, 4)              .map((similarProduct) => (                <Card key={similarProduct.id} className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1">                  <Link to={`/product/${similarProduct.id}`}>                    <div className="relative overflow-hidden bg-gradient-to-br from-muted/20 to-muted/5">                      <div className="aspect-square relative p-4">                        <img src={similarProduct.image} alt={similarProduct.name} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />                        {similarProduct.badge && (                          <div className="absolute top-3 left-3"><Badge className="bg-primary text-primary-foreground shadow-lg text-xs">{similarProduct.badge}</Badge></div>                        )}                      </div>                    </div>                    <div className="p-4 space-y-2">                      <div className="flex items-center justify-between"><Badge variant="outline" className="text-xs">{similarProduct.brand}</Badge><div className="flex items-center gap-1">{[...Array(5)].map((_, i) => (<Star key={i} className={`h-3 w-3 ${i < Math.floor(similarProduct.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />))}</div></div>                      <h3 className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2 min-h-[2.5rem]">{similarProduct.name}</h3>                      <div className="text-lg font-bold text-primary">{similarProduct.price}</div>                      {similarProduct.originalPrice && (<div className="text-xs text-muted-foreground line-through">{similarProduct.originalPrice}</div>)}                    </div>                  </Link>                </Card>              ))}          </div>        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;