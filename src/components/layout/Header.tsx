
import { useState } from "react";
import { ShoppingCart, User, Menu, Heart, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SearchBar } from "@/components/search/SearchBar";

export const Header = () => {
  const [cartCount] = useState(3);
  const [wishlistCount] = useState(5);
  const [notificationCount] = useState(2);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-muted/50">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <h1 className="text-2xl font-bold text-primary hover:scale-105 transition-transform duration-200 cursor-pointer">
                ShopHub
              </h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <SearchBar />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-1">
            {/* Notifications */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex relative hover:bg-muted/50 hover:scale-105 transition-all duration-200"
            >
              <Bell className="h-5 w-5" />
              {notificationCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs font-bold"
                >
                  {notificationCount}
                </Badge>
              )}
            </Button>

            {/* Wishlist */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex relative hover:bg-muted/50 hover:scale-105 transition-all duration-200"
            >
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <Badge
                  variant="secondary"
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs font-bold"
                >
                  {wishlistCount}
                </Badge>
              )}
            </Button>

            {/* User Account */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-muted/50 hover:scale-105 transition-all duration-200"
            >
              <User className="h-5 w-5" />
            </Button>

            {/* Shopping Cart */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover:bg-muted/50 hover:scale-105 transition-all duration-200"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs font-bold animate-pulse"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="pb-4 md:hidden">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};
