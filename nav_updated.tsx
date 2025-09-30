import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Search, ShoppingCart, User, Sun, Moon, Heart, LogOut } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useUser } from "@/context/UserContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, isLoggedIn, logout, wishlist } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Products", href: "/products" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Best Sellers", href: "/best-sellers" },
    { name: "Promotions", href: "/promotions" },
    { name: "Brands", href: "/brands" },
    { name: "About", href: "/about" }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass backdrop-blur-lg border-b border-border/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
                <span className="text-gradient">Perfect</span>
                <span className="text-foreground ml-1">Hi-Fi</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <Search className="h-4 w-4" />
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="transition-all duration-300 hover:bg-accent/20"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Button variant="ghost" size="sm" className="relative" asChild>
                <Link to="/cart">
                  <ShoppingCart className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    2
                  </span>
                </Link>
              </Button>

              {isLoggedIn ? (
                <>
                  {/* Wishlist Button */}
                  <Button variant="ghost" size="sm" className="hidden sm:flex relative" asChild>
                    <Link to="/profile?tab=wishlist">
                      <Heart className="h-4 w-4" />
                      {wishlist.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {wishlist.length}
                        </span>
                      )}
                    </Link>
                  </Button>

                  {/* User Profile */}
                  <Button variant="ghost" size="sm" className="hidden sm:flex" asChild>
                    <Link to="/profile">
                      <User className="h-4 w-4" />
                    </Link>
                  </Button>
                </>
              ) : (
                <Button variant="ghost" size="sm" className="hidden sm:flex" asChild>
                  <Link to="/login">
                    <User className="h-4 w-4" />
                  </Link>
                </Button>
              )}

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass backdrop-blur-lg border-t border-border/10">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-border/10">
                <Button variant="ghost" size="sm" className="w-full justify-start mb-2">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start mb-2">
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={toggleTheme}
                >
                  {theme === 'dark' ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16" />
    </>
  );
};

export default Navigation;
