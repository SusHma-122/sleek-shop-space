
import { Star, Shield, Truck, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  isOnSale: boolean;
  brand: string;
  description: string;
  inStock: boolean;
  stockCount: number;
}

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="space-y-6">
      {/* Brand */}
      <div className="text-sm text-primary font-medium">
        {product.brand}
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-foreground leading-tight">
        {product.name}
      </h1>

      {/* Rating and Reviews */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="font-semibold text-foreground">{product.rating}</span>
        </div>
        <button className="text-sm text-primary hover:text-primary/80 font-medium">
          ({product.reviews.toLocaleString()} reviews)
        </button>
      </div>

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold text-foreground">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <>
              <span className="text-lg text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
              <Badge className="bg-red-500 hover:bg-red-600 text-white">
                -{discount}% OFF
              </Badge>
            </>
          )}
        </div>
        {product.isOnSale && (
          <p className="text-sm text-green-600 font-semibold">
            You save ${(product.originalPrice! - product.price).toFixed(2)}
          </p>
        )}
      </div>

      {/* Stock Status */}
      <div className="flex items-center gap-2">
        {product.inStock ? (
          <>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-green-600 font-medium">
              In Stock ({product.stockCount} available)
            </span>
          </>
        ) : (
          <>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-sm text-red-600 font-medium">Out of Stock</span>
          </>
        )}
      </div>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="h-4 w-4 text-green-500" />
          <span>Secure Payment</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Truck className="h-4 w-4 text-blue-500" />
          <span>Fast Shipping</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <RotateCcw className="h-4 w-4 text-purple-500" />
          <span>Easy Returns</span>
        </div>
      </div>
    </div>
  );
};
