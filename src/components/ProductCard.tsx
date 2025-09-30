import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useUser } from "@/context/UserContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: string;
    originalPrice?: string;
    image: string;
    rating: number;
    badge?: string;
    brand: string;
    colors: string[];
    description: string;
    specs: Array<{
      icon: any;
      label: string;
      value: string;
    }>;
    reviews?: Array<{
      name: string;
      rating: number;
      comment: string;
    }>;
  };
  showFeatures?: boolean;
}

const ProductCard = ({ product, showFeatures = false }: ProductCardProps) => {
  const { isLoggedIn, addToWishlist, removeFromWishlist, isInWishlist, addToCart } = useUser();
  const { toast } = useToast();

  const handleWishlistToggle = () => {
    if (!isLoggedIn) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to add items to your wishlist.",
        variant: "destructive",
      });
      return;
    }

    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist(product.id);
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product.id);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Link to={`/product/${product.id}`} className="block h-full">
      <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full cursor-pointer">
        {/* Product Image - Optimized Size */}
        <div className="relative overflow-hidden bg-gradient-to-br from-muted/20 to-muted/5">
          <div className="aspect-[4/3] relative p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            />

            {/* Floating Badge */}
            {product.badge && (
              <div className="absolute top-3 left-3">
                <Badge className="bg-primary text-primary-foreground shadow-lg text-xs">
                  {product.badge}
                </Badge>
              </div>
            )}

            {/* Action Buttons - Show on Hover */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 z-10">
              <div className="flex flex-col gap-1">
                <Button
                  size="icon"
                  variant="secondary"
                  className={`bg-background/90 backdrop-blur-sm shadow-lg w-8 h-8 ${
                    isLoggedIn && isInWishlist(product.id) ? 'text-red-500' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleWishlistToggle();
                  }}
                >
                  <Heart className={`h-3 w-3 ${
                    isLoggedIn && isInWishlist(product.id) ? 'fill-red-500' : ''
                  }`} />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="bg-background/90 backdrop-blur-sm shadow-lg w-8 h-8"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Info - Compact */}
        <div className="p-4 space-y-2.5">
        {/* Brand & Rating */}
        <div className="flex items-center justify-between gap-2">
          <Badge variant="outline" className="text-xs font-medium">{product.brand}</Badge>
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
              ))}
            </div>
            <span className="text-xs font-medium ml-1">{product.rating}</span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2 leading-snug min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* Product Description */}
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 min-h-[2.25rem]">
          {product.description}
        </p>

        {/* Price */}
        <div className="space-y-1 pt-1">
          <div className="text-lg font-bold text-primary">
            {product.price}
          </div>
          {product.originalPrice && (
            <div className="flex items-center gap-2">
              <div className="text-xs text-muted-foreground  line-through leading-none">
                {product.originalPrice}
              </div>
              <Badge variant="secondary" className="text-xs px-1.5 py-0.5 leading-none">
                Save {((parseFloat(product.originalPrice.replace('RM ', '').replace(',', '')) - parseFloat(product.price.replace('RM ', '').replace(',', ''))) / 1000).toFixed(1)}k
              </Badge>
            </div>
          )}
        </div>

        {/* Default State - Show basic info only */}
        <div className="group-hover:opacity-0 transition-opacity duration-300">
          <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
            <span>Hover for specs</span>
            <span>{product.colors.length} colors</span>
          </div>
        </div>

        {/* Hover Preview - Compact 50% Bottom */}
        <div className="absolute left-4 right-4 bottom-4 h-[50%] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 bg-background/98 backdrop-blur-md rounded-lg p-3 border shadow-xl">
          {/* Quick Specs Preview */}
          <div className="mb-2">
            <div className="text-xs font-semibold text-foreground mb-1.5">Specifications</div>
            <div className="space-y-1.5">
              {product.specs.slice(0, 4).map((spec, idx) => (
                <div key={idx} className="flex items-start gap-1.5">
                  <spec.icon className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-medium text-foreground">{spec.label}</div>
                    <div className="text-xs text-muted-foreground">{spec.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Color Options */}
          <div className="pt-2 border-t">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-foreground">Available Colors</span>
              <div className="flex items-center gap-1.5">
                {product.colors.slice(0, 5).map((color, idx) => (
                  <div
                    key={idx}
                    className="w-4 h-4 rounded-full border-2 border-border cursor-pointer hover:scale-125 transition-all duration-200 shadow-sm"
                    style={{ backgroundColor: color }}
                    title={`${product.brand} ${color}`}
                  />
                ))}
                {product.colors.length > 5 && (
                  <span className="text-xs text-muted-foreground ml-1">+{product.colors.length - 5}</span>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </Card>
    </Link>
  );
};

export default ProductCard;