
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Laptop, 
  Shirt, 
  Home, 
  BookOpen, 
  Gamepad2,
  Watch,
  Camera,
  Headphones,
  Car,
  Gift,
  Baby
} from "lucide-react";

const categories = [
  { name: "Electronics", icon: Smartphone, color: "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20", count: "12.5k+ items" },
  { name: "Computers", icon: Laptop, color: "bg-purple-500/10 text-purple-600 hover:bg-purple-500/20", count: "8.2k+ items" },
  { name: "Fashion", icon: Shirt, color: "bg-pink-500/10 text-pink-600 hover:bg-pink-500/20", count: "25k+ items" },
  { name: "Home & Garden", icon: Home, color: "bg-green-500/10 text-green-600 hover:bg-green-500/20", count: "15k+ items" },
  { name: "Books", icon: BookOpen, color: "bg-orange-500/10 text-orange-600 hover:bg-orange-500/20", count: "50k+ items" },
  { name: "Gaming", icon: Gamepad2, color: "bg-red-500/10 text-red-600 hover:bg-red-500/20", count: "5k+ items" },
  { name: "Watches", icon: Watch, color: "bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20", count: "3k+ items" },
  { name: "Photography", icon: Camera, color: "bg-teal-500/10 text-teal-600 hover:bg-teal-500/20", count: "4k+ items" },
  { name: "Audio", icon: Headphones, color: "bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20", count: "2k+ items" },
  { name: "Automotive", icon: Car, color: "bg-gray-500/10 text-gray-600 hover:bg-gray-500/20", count: "7k+ items" },
  { name: "Gifts", icon: Gift, color: "bg-rose-500/10 text-rose-600 hover:bg-rose-500/20", count: "10k+ items" },
  { name: "Baby & Kids", icon: Baby, color: "bg-cyan-500/10 text-cyan-600 hover:bg-cyan-500/20", count: "6k+ items" },
];

export const CategoryGrid = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover everything you need from electronics to fashion, all in one place
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Button
              key={category.name}
              variant="ghost"
              className={`h-32 flex-col space-y-3 rounded-2xl ${category.color} 
                transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg
                group relative overflow-hidden animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <category.icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
              <div className="text-center z-10">
                <span className="text-sm font-semibold block">{category.name}</span>
                <span className="text-xs opacity-70 mt-1">{category.count}</span>
              </div>
              
              {/* Subtle shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
