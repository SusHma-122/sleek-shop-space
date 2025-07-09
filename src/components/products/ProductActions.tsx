
import { useState } from "react";
import { ShoppingCart, Heart, Share2, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

interface ProductActionsProps {
  product: Product;
}

export const ProductActions = ({ product }: ProductActionsProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
    // Add cart logic here
  };

  const handleBuyNow = () => {
    console.log(`Buy now: ${quantity} of ${product.name}`);
    // Add buy now logic here
  };

  const handleWishlistToggle = () => {
    setIsWishlist(!isWishlist);
    console.log(`${isWishlist ? 'Removed from' : 'Added to'} wishlist: ${product.name}`);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Check out this product: ${product.name}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      console.log('Product link copied to clipboard');
    }
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  return (
    <div className="space-y-6">
      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <label className="text-sm font-medium text-foreground">Quantity:</label>
        <div className="flex items-center border border-border rounded-lg">
          <Button
            variant="ghost"
            size="icon"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
            className="h-10 w-10 rounded-r-none"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="px-4 py-2 font-medium text-foreground min-w-[3rem] text-center">
            {quantity}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={increaseQuantity}
            className="h-10 w-10 rounded-l-none"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          onClick={handleBuyNow}
          disabled={!product.inStock}
          className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90"
        >
          Buy Now
        </Button>
        
        <Button
          variant="outline"
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full h-12 text-base font-semibold"
        >
          <ShoppingCart className="h-5 w-5 mr-2" />
          Add to Cart
        </Button>
      </div>

      {/* Secondary Actions */}
      <div className="flex gap-3">
        <Button
          variant="outline"
          size="icon"
          onClick={handleWishlistToggle}
          className={`h-12 w-12 ${
            isWishlist 
              ? "text-red-500 border-red-500 hover:bg-red-50" 
              : "hover:text-red-500"
          }`}
        >
          <Heart className={`h-5 w-5 ${isWishlist ? "fill-current" : ""}`} />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          onClick={handleShare}
          className="h-12 w-12"
        >
          <Share2 className="h-5 w-5" />
        </Button>
      </div>

      {!product.inStock && (
        <p className="text-sm text-red-600 font-medium">
          This item is currently out of stock
        </p>
      )}
    </div>
  );
};
