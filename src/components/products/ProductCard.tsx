
import { useState } from "react";
import { Heart, Star, ShoppingCart } from "lucide-react";
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
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-card rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 rounded-full ${
            isWishlist ? "text-red-500" : "text-muted-foreground"
          } hover:text-red-500 bg-background/80 backdrop-blur-sm`}
          onClick={() => setIsWishlist(!isWishlist)}
        >
          <Heart className={`h-4 w-4 ${isWishlist ? "fill-current" : ""}`} />
        </Button>
        {product.isOnSale && (
          <Badge className="absolute top-3 left-3 bg-red-500 text-white">
            -{discount}%
          </Badge>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-foreground">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
        
        <Button className="w-full" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
