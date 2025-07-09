
import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "@/components/ui/skeleton-loader";

interface RelatedProductsProps {
  category: string;
  currentProductId: string;
}

export const RelatedProducts = ({ category, currentProductId }: RelatedProductsProps) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // Mock related products data
  const mockRelatedProducts = [
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
    {
      id: "7",
      name: "USB-C Hub with 7 Ports",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      rating: 4.3,
      reviews: 445,
      isOnSale: true,
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      // Filter out current product
      const filtered = mockRelatedProducts.filter(p => p.id !== currentProductId);
      setProducts(filtered);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentProductId]);

  return (
    <section className="mt-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-foreground">Related Products</h2>
        <button className="text-primary hover:text-primary/80 font-semibold text-sm">
          View All in {category}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        ) : (
          products.map((product, index) => (
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
    </section>
  );
};
