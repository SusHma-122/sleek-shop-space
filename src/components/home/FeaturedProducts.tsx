
import { useState, useEffect } from "react";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductCardSkeleton } from "@/components/ui/skeleton-loader";
import { ArrowRight } from "lucide-react";

const featuredProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones with Noise Cancellation",
    price: 199.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 1200,
    isOnSale: true,
  },
  {
    id: "2",
    name: "Smart Watch Series 8 - GPS + Cellular",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 850,
    isOnSale: false,
  },
  {
    id: "3",
    name: "MacBook Pro 14-inch M3 Pro - Space Gray",
    price: 1999.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 2100,
    isOnSale: false,
  },
  {
    id: "4",
    name: "iPhone 15 Pro 256GB - Natural Titanium",
    price: 999.99,
    originalPrice: 1099.99,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 3200,
    isOnSale: true,
  },
  {
    id: "5",
    name: "Gaming Mechanical Keyboard RGB Backlit",
    price: 129.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 1850,
    isOnSale: true,
  },
  {
    id: "6",
    name: "Wireless Mouse Ergonomic Design",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 920,
    isOnSale: false,
  },
];

export const FeaturedProducts = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-2">Featured Products</h2>
            <p className="text-lg text-muted-foreground">
              Handpicked items just for you
            </p>
          </div>
          <button className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-200 group">
            View All
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {loading ? (
            // Show skeleton loaders while loading
            Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          ) : (
            // Show actual products
            featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
