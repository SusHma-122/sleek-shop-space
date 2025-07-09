
import { useState } from "react";
import { Heart, Star, ShoppingCart, Eye, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isOnSale: boolean;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlist, setIsWishlist] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Add cart logic here
    console.log('Added to cart:', product.name);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlist(!isWishlist);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Add quick view logic here
    console.log('Quick view:', product.name);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Add share logic here
    console.log('Share:', product.name);
  };

  return (
    <div 
      className="group bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-muted/20">
        {/* Skeleton loader */}
        {!imageLoaded && (
          <div className="w-full h-56 bg-muted animate-pulse" />
        )}
        
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-56 object-cover transition-all duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${isHovered ? 'scale-110' : 'scale-100'}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />

        {/* Overlay actions */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
            onClick={handleQuickView}
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Wishlist button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 rounded-full transition-all duration-200 ${
            isWishlist 
              ? "text-red-500 bg-background/90" 
              : "text-muted-foreground hover:text-red-500 bg-background/80 hover:bg-background/90"
          } backdrop-blur-sm shadow-sm hover:shadow-md hover:scale-110`}
          onClick={handleWishlistToggle}
        >
          <Heart className={`h-4 w-4 transition-all duration-200 ${isWishlist ? "fill-current scale-110" : ""}`} />
        </Button>

        {/* Sale badge */}
        {product.isOnSale && (
          <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600 text-white font-semibold px-2 py-1 rounded-lg shadow-sm">
            -{discount}% OFF
          </Badge>
        )}

        {/* Quick add to cart */}
        <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 transform ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <Button 
            className="w-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-foreground mb-3 line-clamp-2 leading-snug hover:text-primary transition-colors duration-200">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 transition-colors duration-200 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground font-medium">
            {product.rating} ({product.reviews.toLocaleString()})
          </span>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xl font-bold text-foreground">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          {product.isOnSale && (
            <span className="text-sm font-semibold text-green-600">
              Save ${(product.originalPrice! - product.price).toFixed(2)}
            </span>
          )}
        </div>
        
        {/* Add to cart button */}
        <Button 
          className="w-full rounded-xl hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md" 
          size="sm"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
