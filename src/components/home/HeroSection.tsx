
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    title: "Discover Amazing",
    subtitle: "Products",
    description: "Shop from millions of products with fast delivery, great prices, and exceptional customer service.",
    bgGradient: "from-primary/10 to-secondary/10",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Latest Electronics",
    subtitle: "& Gadgets",
    description: "Explore cutting-edge technology and smart devices that make your life easier.",
    bgGradient: "from-blue-500/10 to-purple-500/10",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Fashion Forward",
    subtitle: "Trends",
    description: "Stay ahead with the latest fashion trends and timeless classics.",
    bgGradient: "from-pink-500/10 to-orange-500/10",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=600&fit=crop"
  }
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative overflow-hidden">
      <div className={`relative bg-gradient-to-r ${currentSlideData.bgGradient} transition-all duration-1000 ease-in-out`}>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <img
            src={currentSlideData.image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-1000 ease-in-out transform hover:scale-105"
          />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="transform transition-all duration-700 ease-out">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
                {currentSlideData.title}
                <span className="text-primary block">{currentSlideData.subtitle}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in">
                {currentSlideData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                <Button 
                  size="lg" 
                  className="text-lg px-8 hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 hover:scale-105 transition-transform duration-200 border-2"
                >
                  Browse Categories
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-background/90 transition-all duration-200 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-background/90 transition-all duration-200 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-primary scale-125' 
                  : 'bg-background/50 hover:bg-background/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
