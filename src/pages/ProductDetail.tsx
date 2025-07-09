
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";
import { ProductInfo } from "@/components/products/ProductInfo";
import { ProductTabs } from "@/components/products/ProductTabs";
import { RelatedProducts } from "@/components/products/RelatedProducts";
import { ProductActions } from "@/components/products/ProductActions";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock product data - in real app, this would come from API
  const mockProduct = {
    id: "1",
    name: "Premium Wireless Headphones with Noise Cancellation",
    price: 199.99,
    originalPrice: 299.99,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&h=600&fit=crop"
    ],
    rating: 4.5,
    reviews: 1200,
    isOnSale: true,
    brand: "AudioTech",
    category: "Electronics",
    description: "Experience premium sound quality with our advanced noise-cancellation technology. These wireless headphones deliver crystal-clear audio and all-day comfort for your listening pleasure.",
    specifications: {
      "Battery Life": "30 hours",
      "Connectivity": "Bluetooth 5.0, USB-C",
      "Weight": "250g",
      "Drivers": "40mm dynamic drivers",
      "Frequency Response": "20Hz - 20kHz",
      "Charging Time": "2 hours"
    },
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Quick charge - 5 min for 2 hours",
      "Bluetooth 5.0 connectivity",
      "Premium leather ear cushions",
      "Foldable design"
    ],
    inStock: true,
    stockCount: 15
  };

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setProduct(mockProduct);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="aspect-square bg-muted rounded-lg"></div>
              <div className="space-y-4">
                <div className="h-8 bg-muted rounded w-3/4"></div>
                <div className="h-6 bg-muted rounded w-1/2"></div>
                <div className="h-12 bg-muted rounded w-full"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-primary hover:text-primary/80 font-semibold"
          >
            Return to Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <button onClick={() => navigate('/')} className="hover:text-primary">
            Home
          </button>
          <span>/</span>
          <span className="capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ProductImageGallery images={product.images} productName={product.name} />
          
          <div className="space-y-6">
            <ProductInfo product={product} />
            <ProductActions product={product} />
          </div>
        </div>

        {/* Product Details Tabs */}
        <ProductTabs product={product} />

        {/* Related Products */}
        <RelatedProducts category={product.category} currentProductId={product.id} />
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
