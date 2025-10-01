import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Search, ShoppingCart, User, Sun, Moon, Heart, ChevronDown, ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useUser } from "@/context/UserContext";

// Data Types
type MenuLink = { label: string; href: string };
type MenuSection = { title: string; links: MenuLink[] };
type BrandTile = { name: string; href: string; img: string };

// Brands Data
const brandsTextColumns: MenuSection[] = [
  {
    title: "Speakers",
    links: [
      { label: "KEF", href: "/brands/kef" },
      { label: "Tivoli Audio", href: "/brands/tivoli-audio" },
      { label: "GoldenEar", href: "/brands/goldenear" },
      { label: "C Music By Celestion", href: "/brands/celestion" },
      { label: "Bose Professional", href: "/brands/bose-pro" },
      { label: "Devialet", href: "/brands/devialet" },
    ]
  },
  {
    title: "Amplifiers, Streamers, CD Players and More",
    links: [
      { label: "Accuphase", href: "/brands/accuphase" },
      { label: "Bluesound", href: "/brands/bluesound" },
      { label: "NAD", href: "/brands/nad" },
      { label: "Silent Angel", href: "/brands/silent-angel" },
    ]
  },
  {
    title: "AV Furniture, Projectors and LED Screens",
    links: [
      { label: "Norstone", href: "/brands/norstone" },
      { label: "Barco Residential", href: "/brands/barco" },
      { label: "Display Technologies", href: "/brands/display-tech" },
    ]
  },
];

const brandsImageTiles: BrandTile[] = [
  { name: "KEF", href: "/brands/kef", img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80" },
  { name: "AudioQuest", href: "/brands/audioquest", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80" },
];

// Products Data
const productsColumns: MenuSection[] = [
  {
    title: "Speakers",
    links: [
      { label: "Portable", href: "/products?cat=portable" },
      { label: "Wireless", href: "/products?cat=wireless" },
      { label: "Bookshelf", href: "/products?cat=bookshelf" },
      { label: "Floorstanding", href: "/products?cat=floorstanding" },
    ]
  },
  {
    title: "Cables",
    links: [
      { label: "All", href: "/products?cat=cables-all" },
      { label: "Speaker Cables", href: "/products?cat=speaker-cables" },
      { label: "Analogue Interconnects", href: "/products?cat=analogue" },
      { label: "Digital Cables", href: "/products?cat=digital" },
      { label: "Power Cables", href: "/products?cat=power" },
    ]
  },
  {
    title: "Audio Components",
    links: [
      { label: "Amplifiers", href: "/products?cat=amplifiers" },
      { label: "CD Players", href: "/products?cat=cd-players" },
      { label: "Streamers", href: "/products?cat=streamers" },
      { label: "Subwoofers", href: "/products?cat=subwoofers" },
      { label: "Power Conditioners", href: "/products?cat=power-conditioners" },
      { label: "DACs, USB & Noise Filters", href: "/products?cat=dacs" },
    ]
  },
  {
    title: "Home Cinema",
    links: [
      { label: "Projectors & Screens", href: "/products?cat=projectors" },
      { label: "LED Video Walls", href: "/products?cat=led-walls" },
      { label: "AV Furniture", href: "/products?cat=av-furniture" },
    ]
  },
];

// Featured Items Data (for Featured dropdown)
interface FeaturedItem {
  name: string;
  href: string;
  img: string;
  subtitle?: string;
}

const featuredItems: FeaturedItem[] = [
  {
    name: "Best Sellers",
    href: "/best-sellers",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    subtitle: "Top rated products"
  },
  {
    name: "Promotions",
    href: "/promotions",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    subtitle: "Special offers"
  },
  {
    name: "New Arrivals",
    href: "/new-arrivals",
    img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
    subtitle: "Latest additions"
  },
  {
    name: "Clearance",
    href: "/clearance",
    img: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&q=80",
    subtitle: "Limited time deals"
  }
];

// Brand Tile Component
const BrandTile = ({ name, href, img }: BrandTile) => {
  return (
    <Link
      to={href}
      className="group relative block overflow-hidden rounded-xl aspect-[2/1] transition-all duration-300 hover:ring-2 hover:ring-primary/20 hover:shadow-xl hover:-translate-y-0.5"
    >
      <img
        src={img}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out will-change-transform group-hover:scale-105 group-hover:brightness-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute left-3 bottom-3 right-3 flex items-end justify-between gap-2">
        <div className="flex-1">
          <h3 className="text-white text-base font-bold drop-shadow-lg">
            {name}
          </h3>
        </div>
        <ArrowRight className="h-4 w-4 text-white transition-all duration-300 group-hover:translate-x-1 flex-shrink-0" />
      </div>
    </Link>
  );
};

// Featured Tile Component (for Featured dropdown)
const FeaturedTile = ({ name, href, img, subtitle }: FeaturedItem) => {
  return (
    <Link
      to={href}
      className="group relative block rounded-3xl aspect-[5/4] transition-all duration-300 hover:ring-2 hover:ring-primary/20 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transition-all duration-700 ease-out will-change-transform group-hover:scale-110 group-hover:brightness-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-3xl" />
      <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-3">
        <div className="flex-1">
          <h3 className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg mb-1">
            {name}
          </h3>
          {subtitle && (
            <p className="text-white/90 text-sm font-medium">{subtitle}</p>
          )}
        </div>
        <ArrowRight className="h-6 w-6 text-white transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 flex-shrink-0" />
      </div>
    </Link>
  );
};

// Brands Mega Panel
interface BrandsPanelProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const BrandsPanel = ({ isOpen, onMouseEnter, onMouseLeave }: BrandsPanelProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onMouseLeave();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onMouseLeave]);

  return (
    <div
      className={`fixed left-0 right-0 top-16 z-40 glass backdrop-blur-lg border-t border-border/10 transition-all duration-200 ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
      role="menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Text Columns - All in one row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brandsTextColumns.map((section, idx) => (
            <div
              key={idx}
              className={`transition-all duration-500 ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <h3 className="text-base font-semibold text-foreground mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      to={link.href}
                      className="relative inline-block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 pb-0.5 group"
                      onClick={() => onMouseLeave()}
                    >
                      {link.label}
                      <span className="absolute left-0 bottom-0 h-0.5 w-full bg-current transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* View All Brands CTA */}
        <div
          className={`mt-6 pt-6 border-t border-border/20 transition-all duration-500 ${
            isOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-4"
          }`}
          style={{ transitionDelay: `${brandsTextColumns.length * 80}ms` }}
        >
          <Link
            to="/brands"
            className="group flex items-center justify-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            onClick={() => onMouseLeave()}
          >
            View All Brands
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

// Products Mega Panel
interface ProductsPanelProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ProductsPanel = ({ isOpen, onMouseEnter, onMouseLeave }: ProductsPanelProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onMouseLeave();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onMouseLeave]);

  return (
    <div
      className={`fixed left-0 right-0 top-16 z-40 glass backdrop-blur-lg border-t border-border/10 transition-all duration-200 ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
      role="menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Main Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {productsColumns.map((section, idx) => (
          <div
            key={idx}
            className={`transition-all duration-500 ${
              isOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            <h3 className="text-base font-semibold text-foreground mb-3">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <Link
                    to={link.href}
                    className="relative inline-block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 pb-0.5 group"
                    onClick={() => onMouseLeave()}
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 h-0.5 w-full bg-current transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div
        className={`border-t border-border/20 mb-6 transition-all duration-500 ${
          isOpen ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`}
        style={{ transitionDelay: "320ms" }}
      />

      {/* Bottom CTA Row */}
      <div
        className={`flex items-center justify-center transition-all duration-500 ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-4"
        }`}
        style={{ transitionDelay: "400ms" }}
      >
        <Link
          to="/products"
          className="group flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          onClick={() => onMouseLeave()}
        >
          View All Products
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      </div>
    </div>
  );
};

// Featured Mega Panel (existing)
interface FeaturedPanelProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const FeaturedPanel = ({ isOpen, onMouseEnter, onMouseLeave }: FeaturedPanelProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onMouseLeave();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onMouseLeave]);

  return (
    <div
      className={`fixed left-0 right-0 top-16 z-40 glass backdrop-blur-lg border-t border-border/10 transition-all duration-300 ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
      role="menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {featuredItems.map((item, idx) => (
          <div
            key={item.name}
            className={`transition-all duration-500 ${
              isOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            <FeaturedTile {...item} />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

// Hook for managing dropdown state
const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const openTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    if (!isOpen) {
      openTimerRef.current = setTimeout(() => {
        setIsOpen(true);
      }, 100);
    }
  };

  const handleMouseLeave = () => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }

    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const handlePanelMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handlePanelMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const handleFocus = () => {
    handleMouseEnter();
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
      handleMouseLeave();
    }
  };

  return {
    isOpen,
    handleMouseEnter,
    handleMouseLeave,
    handlePanelMouseEnter,
    handlePanelMouseLeave,
    handleFocus,
    handleBlur,
  };
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileFeaturedOpen, setIsMobileFeaturedOpen] = useState(false);
  const [isMobileBrandsOpen, setIsMobileBrandsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, isLoggedIn, logout, wishlist, cart } = useUser();

  const featuredDropdown = useDropdown();
  const brandsDropdown = useDropdown();
  const productsDropdown = useDropdown();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartCount = cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;

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
              {/* Featured Mega Dropdown */}
              <button
                className="relative inline-block text-foreground pb-0.5 transition-colors duration-300 ease-in-out hover:text-primary font-medium flex items-center gap-1 group"
                aria-haspopup="menu"
                aria-expanded={featuredDropdown.isOpen}
                onMouseEnter={featuredDropdown.handleMouseEnter}
                onMouseLeave={featuredDropdown.handleMouseLeave}
                onFocus={featuredDropdown.handleFocus}
                onBlur={featuredDropdown.handleBlur}
              >
                Featured
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${featuredDropdown.isOpen ? 'rotate-180' : ''}`} />
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-current transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </button>

              {/* Products Mega Dropdown */}
              <button
                className="relative inline-block text-foreground pb-0.5 transition-colors duration-300 ease-in-out hover:text-primary font-medium flex items-center gap-1 group"
                aria-haspopup="menu"
                aria-expanded={productsDropdown.isOpen}
                onMouseEnter={productsDropdown.handleMouseEnter}
                onMouseLeave={productsDropdown.handleMouseLeave}
                onFocus={productsDropdown.handleFocus}
                onBlur={productsDropdown.handleBlur}
              >
                Products
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${productsDropdown.isOpen ? 'rotate-180' : ''}`} />
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-current transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </button>

              {/* Brands Mega Dropdown */}
              <button
                className="relative inline-block text-foreground pb-0.5 transition-colors duration-300 ease-in-out hover:text-primary font-medium flex items-center gap-1 group"
                aria-haspopup="menu"
                aria-expanded={brandsDropdown.isOpen}
                onMouseEnter={brandsDropdown.handleMouseEnter}
                onMouseLeave={brandsDropdown.handleMouseLeave}
                onFocus={brandsDropdown.handleFocus}
                onBlur={brandsDropdown.handleBlur}
              >
                Brands
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${brandsDropdown.isOpen ? 'rotate-180' : ''}`} />
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-current transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </button>

              {/* Solutions Link */}
              <Link
                to="/solutions"
                className="relative group inline-block text-foreground pb-0.5 transition-colors duration-300 ease-in-out hover:text-primary font-medium"
              >
                Solutions
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-current transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </Link>

              {/* About Link */}
              <Link
                to="/about"
                className="relative group inline-block text-foreground pb-0.5 transition-colors duration-300 ease-in-out hover:text-primary font-medium"
              >
                About
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-current transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </Link>

              {/* Book Demo Button */}
              <Link to="/book-demo">
                <Button size="sm" className="hidden lg:flex">
                  Book Demo
                </Button>
              </Link>
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
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
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
              {/* Mobile Featured Section */}
              <div>
                <button
                  onClick={() => setIsMobileFeaturedOpen(!isMobileFeaturedOpen)}
                  className="w-full flex items-center justify-between text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  aria-expanded={isMobileFeaturedOpen}
                  aria-haspopup="true"
                >
                  <span>Featured</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileFeaturedOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMobileFeaturedOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {featuredItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Products Section */}
              <div>
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className="w-full flex items-center justify-between text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  aria-expanded={isMobileProductsOpen}
                  aria-haspopup="true"
                >
                  <span>Products</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMobileProductsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      to="/products"
                      className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      All Products
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Brands Section */}
              <div>
                <button
                  onClick={() => setIsMobileBrandsOpen(!isMobileBrandsOpen)}
                  className="w-full flex items-center justify-between text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  aria-expanded={isMobileBrandsOpen}
                  aria-haspopup="true"
                >
                  <span>Brands</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileBrandsOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMobileBrandsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      to="/brands"
                      className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      All Brands
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

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

      {/* Mega Dropdown Panels - Outside nav for full width */}
      <FeaturedPanel
        isOpen={featuredDropdown.isOpen}
        onMouseEnter={featuredDropdown.handlePanelMouseEnter}
        onMouseLeave={featuredDropdown.handlePanelMouseLeave}
      />
      <ProductsPanel
        isOpen={productsDropdown.isOpen}
        onMouseEnter={productsDropdown.handlePanelMouseEnter}
        onMouseLeave={productsDropdown.handlePanelMouseLeave}
      />
      <BrandsPanel
        isOpen={brandsDropdown.isOpen}
        onMouseEnter={brandsDropdown.handlePanelMouseEnter}
        onMouseLeave={brandsDropdown.handlePanelMouseLeave}
      />

      {/* Spacer for fixed navigation */}
      <div className="h-16" />
    </>
  );
};

export default Navigation;
