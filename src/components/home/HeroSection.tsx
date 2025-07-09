
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Discover Amazing
            <span className="text-primary block">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Shop from millions of products with fast delivery, great prices, and exceptional customer service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Browse Categories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
