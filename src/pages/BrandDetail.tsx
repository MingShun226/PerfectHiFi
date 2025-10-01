import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import {
  MapPin,
  Calendar,
  Award,
  Star,
  ArrowRight,
  Volume2,
  Headphones,
  Radio,
  Speaker
} from "lucide-react";
import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";
import speaker3 from "@/assets/speaker-3.jpg";
import speaker4 from "@/assets/speaker-4.jpg";

const BrandDetail = () => {
  const { brandId } = useParams();

  // Brand database
  const brandDatabase: Record<string, any> = {
    kef: {
      name: "KEF",
      country: "United Kingdom",
      founded: 1961,
      logo: "/placeholder.svg",
      heroImage: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1600&q=80",
      description: "KEF is a British loudspeaker manufacturer known for innovative driver technology and acoustic research. Founded by Raymond Cooke in 1961, KEF has been at the forefront of loudspeaker design for over 60 years.",
      fullStory: "KEF's mission has always been to create the best possible sound without compromise. From the revolutionary UniQ driver array to the latest wireless speakers, KEF continues to push the boundaries of what's possible in audio engineering. The company's commitment to innovation and quality has made them one of the most respected names in high-fidelity audio.",
      heritage: "60+ years of acoustic innovation",
      specialties: ["UniQ Driver Technology", "Wireless Speakers", "Home Theater", "Bookshelf Speakers"],
      priceRange: "Mid to Premium",
      rating: 4.8,
      totalProducts: 67,
      awards: ["EISA Award Winner", "What Hi-Fi? Awards", "CES Innovation Award"],
      features: [
        {
          icon: Award,
          title: "Award Winning",
          description: "Multiple industry awards for innovation and sound quality"
        },
        {
          icon: Speaker,
          title: "UniQ Technology",
          description: "Revolutionary point-source driver array for precise imaging"
        },
        {
          icon: Headphones,
          title: "Wireless Audio",
          description: "Leading the way in high-quality wireless speaker systems"
        },
        {
          icon: Radio,
          title: "Studio Reference",
          description: "Trusted by recording studios worldwide"
        }
      ]
    },
    "tivoli-audio": {
      name: "Tivoli Audio",
      country: "United States",
      founded: 2000,
      logo: "/placeholder.svg",
      heroImage: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=1600&q=80",
      description: "Tivoli Audio combines timeless design with superior sound quality. Founded by Tom DeVesto, the brand is known for its elegant, minimalist radios and speakers.",
      fullStory: "Tivoli Audio was founded with a simple mission: to create beautiful audio products that sound as good as they look. Each product is carefully crafted with attention to both aesthetic and acoustic excellence.",
      heritage: "Timeless design meets modern technology",
      specialties: ["Tabletop Radios", "Wireless Speakers", "Portable Audio", "Home Audio"],
      priceRange: "Entry to Mid",
      rating: 4.6,
      totalProducts: 28,
      awards: ["Red Dot Design Award", "iF Design Award"],
      features: [
        {
          icon: Award,
          title: "Design Excellence",
          description: "Multiple international design awards"
        },
        {
          icon: Speaker,
          title: "Premium Sound",
          description: "Audiophile-grade components in elegant packages"
        },
        {
          icon: Radio,
          title: "Radio Heritage",
          description: "Modern takes on classic radio design"
        },
        {
          icon: Headphones,
          title: "Portable Audio",
          description: "Take premium sound anywhere"
        }
      ]
    },
    goldenear: {
      name: "GoldenEar",
      country: "United States",
      founded: 2010,
      logo: "/placeholder.svg",
      heroImage: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1600&q=80",
      description: "GoldenEar Technology creates high-performance loudspeakers that deliver extraordinary sound quality at accessible prices.",
      fullStory: "Founded by audio industry veterans, GoldenEar Technology brings decades of experience in loudspeaker design to create products that punch well above their price point.",
      heritage: "Performance without compromise",
      specialties: ["Tower Speakers", "Bookshelf Speakers", "Soundbars", "Subwoofers"],
      priceRange: "Mid to Premium",
      rating: 4.7,
      totalProducts: 32,
      awards: ["TAS Editors' Choice", "The Absolute Sound Product of the Year"],
      features: [
        {
          icon: Award,
          title: "Industry Recognition",
          description: "Consistently awarded by audio critics"
        },
        {
          icon: Speaker,
          title: "Value Leader",
          description: "High-end performance at mid-range prices"
        },
        {
          icon: Radio,
          title: "Innovative Design",
          description: "Proprietary driver and cabinet technology"
        },
        {
          icon: Headphones,
          title: "Full Range",
          description: "Complete home audio solutions"
        }
      ]
    }
  };

  // Get brand data or default
  const brand = brandDatabase[brandId || ""] || {
    name: brandId?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    country: "Unknown",
    founded: 0,
    heroImage: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1600&q=80",
    description: `${brandId?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} is a premium audio brand known for exceptional quality and innovation.`,
    fullStory: "This brand represents excellence in audio engineering and design.",
    heritage: "Commitment to audio excellence",
    specialties: ["Premium Audio", "Innovation", "Quality"],
    priceRange: "Premium",
    rating: 4.8,
    totalProducts: 0,
    awards: [],
    features: [
      {
        icon: Award,
        title: "Premium Quality",
        description: "Exceptional build and sound quality"
      },
      {
        icon: Speaker,
        title: "Innovative Design",
        description: "Cutting-edge audio technology"
      }
    ]
  };

  // Sample products for the brand
  const brandProducts = [
    {
      id: 1,
      name: `${brand.name} Premium Bookshelf Speaker`,
      price: "RM 12,320",
      originalPrice: "RM 13,500",
      image: speaker1,
      rating: 4.9,
      badge: "Bestseller",
      brand: brand.name,
      colors: ["#8B4513", "#000000", "#FFFFFF"],
      description: "Premium bookshelf speakers with exceptional clarity and powerful bass response.",
      specs: [
        { icon: Speaker, label: "Driver", value: "5.25\" Woofer" },
        { icon: Radio, label: "Frequency", value: "45Hz - 28kHz" },
        { icon: Volume2, label: "Power", value: "150W RMS" },
        { icon: Award, label: "Impedance", value: "8 Ohms" }
      ]
    },
    {
      id: 2,
      name: `${brand.name} Floorstanding Speaker`,
      price: "RM 18,880",
      originalPrice: "RM 21,000",
      image: speaker2,
      rating: 4.8,
      badge: "New",
      brand: brand.name,
      colors: ["#000000", "#8B4513", "#696969"],
      description: "High-performance floorstanding speakers designed for audiophiles.",
      specs: [
        { icon: Speaker, label: "Driver", value: "Dual 6.5\"" },
        { icon: Radio, label: "Frequency", value: "35Hz - 30kHz" },
        { icon: Volume2, label: "Power", value: "200W RMS" },
        { icon: Award, label: "Impedance", value: "6 Ohms" }
      ]
    },
    {
      id: 3,
      name: `${brand.name} Wireless Speaker`,
      price: "RM 5,880",
      image: speaker3,
      rating: 4.7,
      brand: brand.name,
      colors: ["#FFFFFF", "#000000", "#C0C0C0"],
      description: "Compact wireless speaker with premium sound quality and modern connectivity.",
      specs: [
        { icon: Speaker, label: "Driver", value: "4\" Full Range" },
        { icon: Radio, label: "Frequency", value: "55Hz - 25kHz" },
        { icon: Volume2, label: "Power", value: "80W RMS" },
        { icon: Award, label: "Connectivity", value: "WiFi, Bluetooth" }
      ]
    },
    {
      id: 4,
      name: `${brand.name} Center Channel Speaker`,
      price: "RM 8,500",
      image: speaker4,
      rating: 4.8,
      brand: brand.name,
      colors: ["#000000", "#8B4513"],
      description: "Premium center channel speaker for immersive home theater experience.",
      specs: [
        { icon: Speaker, label: "Driver", value: "Dual 4.5\"" },
        { icon: Radio, label: "Frequency", value: "50Hz - 28kHz" },
        { icon: Volume2, label: "Power", value: "120W RMS" },
        { icon: Award, label: "Impedance", value: "8 Ohms" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={brand.heroImage}
            alt={brand.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>

        <div className="relative container mx-auto px-6 h-full flex items-end pb-16">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              {brand.heritage}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {brand.name}
            </h1>
            <div className="flex items-center gap-6 text-white/90 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span className="text-lg">{brand.country}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="text-lg">Est. {brand.founded}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                <span className="text-lg font-medium">{brand.rating}</span>
              </div>
            </div>
            <p className="text-xl text-white/95 leading-relaxed max-w-3xl">
              {brand.description}
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The {brand.name} Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {brand.fullStory}
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {brand.specialties.map((specialty: string, idx: number) => (
                      <Badge key={idx} variant="outline" className="text-sm">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                {brand.awards.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-2">Awards & Recognition</h3>
                    <div className="flex flex-wrap gap-2">
                      {brand.awards.map((award: string, idx: number) => (
                        <Badge key={idx} className="bg-amber-100 text-amber-800">
                          <Award className="h-3 w-3 mr-1" />
                          {award}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {brand.features.map((feature: any, idx: number) => (
                <Card key={idx} className="p-6">
                  <feature.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {brand.name} Products
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our collection of {brand.totalProducts} premium {brand.name} products
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to={`/products?brand=${brandId}`}>
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/10 to-primary/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience {brand.name}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Visit our showroom to experience the full range of {brand.name} products and speak with our audio experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/brands">
                  Browse All Brands
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandDetail;
