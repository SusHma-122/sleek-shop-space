
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">ShopHub</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Your one-stop destination for amazing products with exceptional service and fast delivery.
            </p>
            <div className="flex space-x-3">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Electronics</a></li>
              <li><a href="#" className="hover:text-primary">Fashion</a></li>
              <li><a href="#" className="hover:text-primary">Home & Garden</a></li>
              <li><a href="#" className="hover:text-primary">Books</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary">FAQ</a></li>
              <li><a href="#" className="hover:text-primary">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary">Returns</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Account</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">My Account</a></li>
              <li><a href="#" className="hover:text-primary">Order History</a></li>
              <li><a href="#" className="hover:text-primary">Wishlist</a></li>
              <li><a href="#" className="hover:text-primary">Track Order</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
