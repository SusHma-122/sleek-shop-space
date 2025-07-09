
import { useState, useRef, useEffect } from "react";
import { Search, X, Clock, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const popularSearches = [
  "iPhone 15", "MacBook Pro", "AirPods", "Samsung Galaxy", "Nike Shoes", 
  "PlayStation 5", "iPad", "Kindle", "Apple Watch", "Headphones"
];

const recentSearches = [
  "Wireless Mouse", "Gaming Chair", "Coffee Mug"
];

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}

export const SearchBar = ({ className = "", placeholder = "Search products..." }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      // Simulate API call for suggestions
      const filtered = popularSearches.filter(item => 
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSearch = (searchQuery: string = query) => {
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      setIsOpen(false);
      // Add search logic here
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    handleSearch(suggestion);
  };

  const clearSearch = () => {
    setQuery("");
    setSuggestions([]);
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder={placeholder}
          className="pl-12 pr-12 h-12 rounded-xl border-2 focus:border-primary/50 transition-all duration-200 shadow-sm focus:shadow-md"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 hover:bg-muted/50 rounded-full"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Search Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-xl shadow-xl z-50 max-h-96 overflow-y-auto">
          {/* Live Suggestions */}
          {suggestions.length > 0 && (
            <div className="p-4">
              <h4 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center">
                <Search className="h-4 w-4 mr-2" />
                Suggestions
              </h4>
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left p-2 hover:bg-muted/50 rounded-lg transition-colors duration-200 flex items-center"
                >
                  <Search className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="font-medium">{suggestion}</span>
                </button>
              ))}
            </div>
          )}

          {/* Recent Searches */}
          {query === "" && recentSearches.length > 0 && (
            <div className="p-4 border-t border-border">
              <h4 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Recent Searches
              </h4>
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(search)}
                  className="w-full text-left p-2 hover:bg-muted/50 rounded-lg transition-colors duration-200 flex items-center"
                >
                  <Clock className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span>{search}</span>
                </button>
              ))}
            </div>
          )}

          {/* Popular Searches */}
          {query === "" && (
            <div className="p-4 border-t border-border">
              <h4 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                Popular Searches
              </h4>
              <div className="flex flex-wrap gap-2">
                {popularSearches.slice(0, 6).map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(search)}
                    className="px-3 py-1 bg-muted/50 hover:bg-muted text-sm rounded-full transition-colors duration-200"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
