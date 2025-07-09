
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Laptop, 
  Shirt, 
  Home, 
  BookOpen, 
  Gamepad2,
  Watch,
  Camera
} from "lucide-react";

const categories = [
  { name: "Electronics", icon: Smartphone, color: "bg-blue-500/10 text-blue-600" },
  { name: "Computers", icon: Laptop, color: "bg-purple-500/10 text-purple-600" },
  { name: "Fashion", icon: Shirt, color: "bg-pink-500/10 text-pink-600" },
  { name: "Home & Garden", icon: Home, color: "bg-green-500/10 text-green-600" },
  { name: "Books", icon: BookOpen, color: "bg-orange-500/10 text-orange-600" },
  { name: "Gaming", icon: Gamepad2, color: "bg-red-500/10 text-red-600" },
  { name: "Watches", icon: Watch, color: "bg-yellow-500/10 text-yellow-600" },
  { name: "Photography", icon: Camera, color: "bg-teal-500/10 text-teal-600" },
];

export const CategoryGrid = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="ghost"
              className={`h-24 flex-col space-y-2 rounded-xl ${category.color} hover:scale-105 transition-transform`}
            >
              <category.icon className="h-6 w-6" />
              <span className="text-xs font-medium">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
