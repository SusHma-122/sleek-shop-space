
import { ProductCard } from "@/components/products/ProductCard";

const featuredProducts = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 1200,
    isOnSale: true,
  },
  {
    id: "2",
    name: "Smart Watch Series 8",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 850,
    isOnSale: false,
  },
  {
    id: "3",
    name: "MacBook Pro 14-inch",
    price: 1999.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 2100,
    isOnSale: false,
  },
  {
    id: "4",
    name: "iPhone 15 Pro",
    price: 999.99,
    originalPrice: 1099.99,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 3200,
    isOnSale: true,
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">Featured Products</h2>
          <button className="text-primary hover:text-primary/80 font-medium">
            View All →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
