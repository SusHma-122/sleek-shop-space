
import { useState } from "react";
import { Star, MessageCircle, Package, RotateCcw } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

interface Product {
  description: string;
  specifications: Record<string, string>;
  features: string[];
  rating: number;
  reviews: number;
}

interface ProductTabsProps {
  product: Product;
}

export const ProductTabs = ({ product }: ProductTabsProps) => {
  const [helpfulReviews, setHelpfulReviews] = useState<Record<number, boolean>>({});

  const mockReviews = [
    {
      id: 1,
      author: "John D.",
      rating: 5,
      date: "2024-01-15",
      title: "Excellent sound quality!",
      content: "These headphones exceeded my expectations. The noise cancellation works perfectly and the battery life is amazing.",
      helpful: 12,
      verified: true
    },
    {
      id: 2,
      author: "Sarah M.",
      rating: 4,
      date: "2024-01-10",
      title: "Great for travel",
      content: "Very comfortable for long flights. The only minor issue is that they're a bit bulky when folded.",
      helpful: 8,
      verified: true
    },
    {
      id: 3,
      author: "Mike R.",
      rating: 5,
      date: "2024-01-08",
      title: "Worth every penny",
      content: "Premium build quality and fantastic sound. The quick charge feature is a lifesaver.",
      helpful: 15,
      verified: false
    }
  ];

  const toggleHelpful = (reviewId: number) => {
    setHelpfulReviews(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  return (
    <div className="mt-16">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
          <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="space-y-6">
          <div className="prose prose-gray max-w-none">
            <h3 className="text-xl font-semibold text-foreground mb-4">Product Description</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {product.description}
            </p>
            
            <h4 className="text-lg font-medium text-foreground mb-3">Key Features</h4>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="specifications" className="space-y-6">
          <h3 className="text-xl font-semibold text-foreground mb-4">Technical Specifications</h3>
          <div className="grid gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                <span className="font-medium text-foreground">{key}</span>
                <span className="text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-6">
          {/* Reviews Summary */}
          <div className="bg-muted/30 rounded-lg p-6">
            <div className="flex items-center gap-6 mb-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">{product.rating}</div>
                <div className="flex items-center justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  {product.reviews} reviews
                </div>
              </div>
              
              <div className="flex-1">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-muted-foreground w-8">{stars}★</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-yellow-400"
                        style={{ width: `${stars === 5 ? 60 : stars === 4 ? 25 : stars === 3 ? 10 : 3}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground w-8">
                      {stars === 5 ? 720 : stars === 4 ? 300 : stars === 3 ? 120 : stars === 2 ? 36 : 24}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-6">
            {mockReviews.map((review) => (
              <div key={review.id} className="border border-border rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-foreground">{review.author}</span>
                      {review.verified && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          Verified Purchase
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </div>
                
                <h4 className="font-semibold text-foreground mb-2">{review.title}</h4>
                <p className="text-muted-foreground mb-4">{review.content}</p>
                
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleHelpful(review.id)}
                    className={`text-sm ${
                      helpfulReviews[review.id] ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    👍 Helpful ({review.helpful + (helpfulReviews[review.id] ? 1 : 0)})
                  </Button>
                  <Button variant="ghost" size="sm" className="text-sm text-muted-foreground">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Reply
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="shipping" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Package className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Shipping Information</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Standard Shipping</h4>
                  <p className="text-sm text-muted-foreground">
                    5-7 business days • FREE on orders over $35
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Express Shipping</h4>
                  <p className="text-sm text-muted-foreground">
                    2-3 business days • $9.99
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Overnight Shipping</h4>
                  <p className="text-sm text-muted-foreground">
                    Next business day • $19.99
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <RotateCcw className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Return Policy</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">30-Day Returns</h4>
                  <p className="text-sm text-muted-foreground">
                    Free returns within 30 days of purchase
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Return Process</h4>
                  <p className="text-sm text-muted-foreground">
                    Easy online returns • Print prepaid label • Drop off at any location
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Refund Timeline</h4>
                  <p className="text-sm text-muted-foreground">
                    Refunds processed within 5-7 business days after we receive your return
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
