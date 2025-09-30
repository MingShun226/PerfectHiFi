import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@/context/UserContext";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  Heart,
  ArrowLeft,
  Truck,
  Shield,
  Clock,
  CreditCard,
  Lock,
  Tag,
  Gift,
  CheckCircle
} from "lucide-react";
import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";
import speaker3 from "@/assets/speaker-3.jpg";

const Cart = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { isLoggedIn, addToWishlist } = useUser();
  const [promoCode, setPromoCode] = useState("");
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Sonus Faber Sonetto I G2 Bookshelf Speaker Made In Italy",
      price: 12320,
      originalPrice: null,
      image: speaker1,
      quantity: 1,
      inStock: true,
      finish: "Walnut",
      warranty: "2 Year International Warranty"
    },
    {
      id: 2,
      name: "Sonus Faber Lumina I Bookshelf Speaker 1 Pair",
      price: 5880,
      originalPrice: 6200,
      image: speaker3,
      quantity: 1,
      inStock: true,
      finish: "Piano Black",
      warranty: "2 Year International Warranty"
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Item Removed",
      description: "Product has been removed from your cart.",
    });
  };

  const moveToWishlist = (id: number) => {
    if (!isLoggedIn) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to add items to your wishlist.",
        variant: "destructive",
      });
      return;
    }

    addToWishlist(id);
    removeItem(id);
    toast({
      title: "Moved to Wishlist",
      description: "Product has been moved to your wishlist.",
    });
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      toast({
        title: "Promo Code Applied!",
        description: "10% discount has been applied to your order.",
      });
    } else {
      toast({
        title: "Invalid Promo Code",
        description: "Please check your promo code and try again.",
        variant: "destructive"
      });
    }
  };

  const handleCheckout = () => {
    if (!isLoggedIn) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to proceed to checkout.",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    // Proceed with checkout logic here
    toast({
      title: "Proceeding to Checkout",
      description: "Redirecting you to the checkout page...",
    });
    // Add navigation to checkout page when implemented
    // navigate("/checkout");
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => {
    return sum + ((item.originalPrice || item.price) - item.price) * item.quantity;
  }, 0);
  const shipping = subtotal > 10000 ? 0 : 299;
  const tax = Math.round(subtotal * 0.06);
  const total = subtotal + shipping + tax;

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over RM 10,000"
    },
    {
      icon: Shield,
      title: "2 Year Warranty",
      description: "International coverage"
    },
    {
      icon: Clock,
      title: "30-Day Returns",
      description: "Hassle-free returns"
    },
    {
      icon: Lock,
      title: "Secure Checkout",
      description: "SSL encrypted payments"
    }
  ];

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />

        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-md mx-auto">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button asChild>
              <Link to="/products">
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="py-6 border-b border-border/10 flex-shrink-0">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">Shopping Cart</h1>
              <p className="text-muted-foreground">
                {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="flex-1 overflow-hidden">
        <div className="container mx-auto px-6 py-6 h-full">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 h-full">
            {/* Cart Items - Scrollable */}
            <div className="xl:col-span-2 overflow-y-auto pr-2 space-y-4 max-h-full">
            {cartItems.map((item) => (
              <Card key={item.id} className="p-6">
                <div className="flex gap-6">
                  <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-semibold text-lg line-clamp-2">{item.name}</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="text-sm text-muted-foreground">
                        Finish: {item.finish}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.warranty}
                      </div>
                      <div className="flex items-center gap-2">
                        {item.inStock ? (
                          <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                        ) : (
                          <Badge variant="destructive">Out of Stock</Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-12 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="text-right">
                        <div className="text-xl font-bold text-primary">
                          RM {(item.price * item.quantity).toLocaleString()}
                        </div>
                        {item.originalPrice && (
                          <div className="text-sm text-muted-foreground line-through">
                            RM {(item.originalPrice * item.quantity).toLocaleString()}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => moveToWishlist(item.id)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Heart className="mr-1 h-3 w-3" />
                        Move to Wishlist
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Promo Code */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Tag className="mr-2 h-4 w-4" />
                Promo Code
              </h3>
              <div className="flex gap-3">
                <Input
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={applyPromoCode} variant="outline">
                  Apply
                </Button>
              </div>
              <div className="mt-3 text-sm text-muted-foreground">
                Try "WELCOME10" for 10% off your first order
              </div>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="p-4 text-center">
                  <feature.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-medium text-sm mb-1">{feature.title}</div>
                  <div className="text-xs text-muted-foreground">{feature.description}</div>
                </Card>
              ))}
            </div>
          </div>

            {/* Order Summary - Fixed */}
            <div className="space-y-4 overflow-y-auto max-h-full">
              <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>RM {subtotal.toLocaleString()}</span>
                </div>

                {savings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Savings</span>
                    <span>-RM {savings.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="flex items-center gap-1">
                    Shipping
                    {shipping === 0 && <Badge className="ml-1 text-xs">FREE</Badge>}
                  </span>
                  <span>{shipping === 0 ? 'FREE' : `RM ${shipping}`}</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax (6% SST)</span>
                  <span>RM {tax.toLocaleString()}</span>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">RM {total.toLocaleString()}</span>
                </div>
              </div>

              <Button size="lg" className="w-full mt-6" onClick={handleCheckout}>
                <CreditCard className="mr-2 h-4 w-4" />
                Proceed to Checkout
              </Button>

              <div className="mt-4 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Lock className="h-3 w-3" />
                  Secure 256-bit SSL encryption
                </div>
              </div>
            </Card>

            {/* Gift Message */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Gift className="mr-2 h-4 w-4" />
                Gift Message
              </h3>
              <textarea
                placeholder="Add a personal message for the recipient..."
                className="w-full p-3 border border-border rounded-lg bg-background text-sm"
                rows={3}
              />
              <div className="mt-2 text-xs text-muted-foreground">
                Gift messages are free and will be included with your order
              </div>
            </Card>

            {/* Recommended Products */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">You might also like</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <img
                    src={speaker2}
                    alt="Recommended product"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm line-clamp-2">
                      AudioQuest Rocket 11 Speaker Cable
                    </h4>
                    <div className="text-primary font-medium">RM 899</div>
                  </div>
                  <Button size="sm" variant="outline">Add</Button>
                </div>
              </div>
            </Card>
          </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;