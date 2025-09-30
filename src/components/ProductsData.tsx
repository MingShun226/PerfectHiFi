import { Speaker, Bluetooth, Wifi, Zap, Settings } from "lucide-react";

export const products = [
  {
    id: 1,
    name: "Sonus Faber Sonetto I G2 Bookshelf Speaker",
    price: "RM 12,320.00",
    originalPrice: "RM 13,500.00",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=600&fit=crop",
    rating: 4.8,
    badge: "Best Seller",
    brand: "Sonus Faber",
    colors: ["#8B4513", "#2F4F4F", "#000000"],
    description: "Handcrafted in Italy with premium walnut wood finish and silk dome tweeters for exceptional clarity.",
    specs: [
      { icon: Speaker, label: "Bookshelf Speaker", value: "Type" },
      { icon: Settings, label: "10-30 m²", value: "Optimal Room Size" },
      { icon: Zap, label: "20-200W", value: "Power Range" },
      { icon: Wifi, label: "Passive", value: "Connectivity" }
    ],
    category: "Bookshelf Speaker",
    section: "best-sellers",
    reviews: [
      { name: "David Chen", rating: 5, comment: "Absolutely stunning sound quality! The Italian craftsmanship really shows. Received the speakers in perfect condition and they sound amazing. Would definitely recommend to any audiophile looking for premium bookshelf speakers." },
      { name: "Sarah Kim", rating: 5, comment: "Best speakers I've ever owned. The clarity is incredible. Delivery was fast and packaging was excellent. Customer service was very helpful when I had questions about setup." },
      { name: "Michael Wong", rating: 4, comment: "Great speakers, though quite pricey. Worth it for the quality. The walnut finish is beautiful and they fit perfectly in my living room. Sound quality exceeds expectations." }
    ]
  },
  {
    id: 2,
    name: "KEF LS50 Wireless II Active Speakers",
    price: "RM 16,249.00",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&h=600&fit=crop",
    rating: 5.0,
    badge: "Premium Choice",
    brand: "KEF",
    colors: ["#1a1a1a", "#f5f5f5", "#8b7355", "#4169e1"],
    description: "Revolutionary wireless speakers with KEF's signature Uni-Q driver array and advanced DSP processing.",
    specs: [
      { icon: Speaker, label: "Active Speaker", value: "Type" },
      { icon: Settings, label: "15-40 m²", value: "Optimal Room Size" },
      { icon: Zap, label: "380W", value: "Built-In Amp Power" },
      { icon: Bluetooth, label: "Bluetooth 5.0", value: "Connectivity" }
    ],
    category: "Wireless Speakers",
    section: "new-arrivals",
    reviews: [
      { name: "Alex Johnson", rating: 5, comment: "KEF's Uni-Q technology is game-changing. Wireless convenience with audiophile quality." },
      { name: "Emily Rodriguez", rating: 5, comment: "Perfect for my home office setup. Sound quality is phenomenal." },
      { name: "James Park", rating: 5, comment: "These speakers have transformed my music listening experience completely." }
    ]
  },
  {
    id: 3,
    name: "B&W 805 D4 Bookshelf Speakers",
    price: "RM 18,999.00",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=600&fit=crop",
    rating: 4.9,
    badge: "Audiophile Grade",
    brand: "Bowers & Wilkins",
    colors: ["#000000", "#f8f8f8", "#8B4513"],
    description: "Professional studio monitor quality with diamond dome tweeter and Continuum cone technology.",
    specs: [
      { icon: Speaker, label: "Monitor Speaker", value: "Type" },
      { icon: Settings, label: "20-50 m²", value: "Optimal Room Size" },
      { icon: Zap, label: "30-300W", value: "Power Handling" },
      { icon: Wifi, label: "Professional", value: "Grade" }
    ],
    category: "Bookshelf Speaker",
    section: "best-sellers",
    reviews: [
      { name: "Robert Taylor", rating: 5, comment: "B&W's diamond tweeter technology is simply unmatched. Studio-grade quality." },
      { name: "Lisa Zhang", rating: 5, comment: "Professional studio monitor quality for home use. Exceptional detail retrieval." },
      { name: "Mark Thompson", rating: 4, comment: "Expensive but worth every penny. The soundstage is incredible." }
    ]
  },
  {
    id: 4,
    name: "Focal Aria 906 Bookshelf Speakers",
    price: "RM 8,890.00",
    originalPrice: "RM 9,990.00",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=600&fit=crop",
    rating: 4.7,
    badge: "Sale",
    brand: "Focal",
    colors: ["#2c1810", "#f5f5f5", "#8B0000"],
    description: "French-engineered speakers with TNF aluminum/magnesium inverted dome tweeter and flax cone woofer.",
    specs: [
      { icon: Speaker, label: "Bookshelf Speaker", value: "Type" },
      { icon: Settings, label: "8-25 m²", value: "Optimal Room Size" },
      { icon: Zap, label: "25-150W", value: "Power Range" },
      { icon: Wifi, label: "Flax Cone", value: "Technology" }
    ],
    category: "Bookshelf Speaker",
    section: "promotions",
    reviews: [
      { name: "Antoine Dubois", rating: 5, comment: "French engineering at its finest. The flax cone technology delivers natural sound." },
      { name: "Maria Santos", rating: 4, comment: "Great value on sale. The TNF tweeter provides excellent detail." },
      { name: "Peter Mueller", rating: 5, comment: "Focal's signature sound signature is evident. Highly recommended." }
    ]
  },
  {
    id: 5,
    name: "Wilson Audio TuneTot Monitors",
    price: "RM 24,500.00",
    image: "https://images.unsplash.com/photo-1574666908499-2a2c8b04e7d0?w=500&h=600&fit=crop",
    rating: 5.0,
    badge: "Ultra Premium",
    brand: "Wilson Audio",
    colors: ["#000000", "#8B0000", "#FFD700"],
    description: "Flagship compact monitors with Wilson's signature time-domain optimization and proprietary drivers.",
    specs: [
      { icon: Speaker, label: "Monitor Speaker", value: "Type" },
      { icon: Settings, label: "15-35 m²", value: "Optimal Room Size" },
      { icon: Zap, label: "300W", value: "Max Power" },
      { icon: Wifi, label: "Hand-Built USA", value: "Origin" }
    ],
    category: "Bookshelf Speaker",
    section: "best-sellers",
    reviews: [
      { name: "William Harrison", rating: 5, comment: "Wilson Audio delivers perfection. These monitors are reference-grade." },
      { name: "Catherine Lee", rating: 5, comment: "Hand-built quality you can hear and feel. Absolutely worth the investment." },
      { name: "Thomas Anderson", rating: 5, comment: "Time-domain optimization creates an incredibly realistic soundstage." }
    ]
  },
  {
    id: 6,
    name: "Dynaudio Evoke 20 Bookshelf Speakers",
    price: "RM 6,999.00",
    image: "https://images.unsplash.com/photo-1574666908764-c61ccd0ca095?w=500&h=600&fit=crop",
    rating: 4.6,
    badge: "Danish Design",
    brand: "Dynaudio",
    colors: ["#8B4513", "#2F4F4F", "#000000"],
    description: "Danish-engineered speakers with Cerotar tweeter and MSP woofer for natural, detailed sound reproduction.",
    specs: [
      { icon: Speaker, label: "Bookshelf Speaker", value: "Type" },
      { icon: Settings, label: "12-40 m²", value: "Optimal Room Size" },
      { icon: Zap, label: "40-300W", value: "Power Range" },
      { icon: Wifi, label: "Danish Made", value: "Origin" }
    ],
    category: "Bookshelf Speaker",
    section: "new-arrivals",
    reviews: [
      { name: "Lars Nielsen", rating: 5, comment: "Danish precision engineering. Natural, uncolored sound reproduction." },
      { name: "Sophie Martin", rating: 4, comment: "Excellent build quality and sound. Perfect for acoustic music." },
      { name: "Kevin O'Brien", rating: 5, comment: "Dynaudio's reputation for accuracy is well deserved. Fantastic speakers." }
    ]
  },
  {
    id: 7,
    name: "McIntosh XR50 Bookshelf Speakers",
    price: "RM 5,999.00",
    originalPrice: "RM 7,500.00",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&h=600&fit=crop",
    rating: 4.5,
    badge: "Clearance",
    brand: "McIntosh",
    colors: ["#000000", "#8B4513"],
    description: "Classic American engineering with premium components and signature McIntosh styling.",
    specs: [
      { icon: Speaker, label: "Bookshelf Speaker", value: "Type" },
      { icon: Settings, label: "8-30 m²", value: "Optimal Room Size" },
      { icon: Zap, label: "20-200W", value: "Power Range" },
      { icon: Wifi, label: "Clearance Sale", value: "Status" }
    ],
    category: "Bookshelf Speaker",
    section: "clearance",
    reviews: [
      { name: "Frank Wilson", rating: 4, comment: "Classic McIntosh styling with solid performance. Great clearance deal!" },
      { name: "Jennifer Davis", rating: 4, comment: "American engineering heritage shines through. Good value at this price." },
      { name: "Steven Clark", rating: 5, comment: "Bought these on clearance - absolute steal for McIntosh quality." }
    ]
  },
  {
    id: 8,
    name: "Monitor Audio Silver 100 7G Bookshelf",
    price: "RM 4,299.00",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&h=600&fit=crop",
    rating: 4.4,
    badge: "New",
    brand: "Monitor Audio",
    colors: ["#2F4F4F", "#f8f8f8", "#8B4513"],
    description: "British precision engineering with RST cone technology and C-CAM Gold Dome tweeter.",
    specs: [
      { icon: Speaker, label: "Bookshelf Speaker", value: "Type" },
      { icon: Settings, label: "10-25 m²", value: "Optimal Room Size" },
      { icon: Zap, label: "30-100W", value: "Power Range" },
      { icon: Wifi, label: "British Made", value: "Origin" }
    ],
    category: "Bookshelf Speaker",
    section: "new-arrivals",
    reviews: [
      { name: "Oliver Smith", rating: 4, comment: "British engineering excellence. The RST cone technology delivers clean sound." },
      { name: "Rachel Green", rating: 4, comment: "Great value speakers with refined sound. Monitor Audio quality." },
      { name: "Daniel Brown", rating: 5, comment: "7th generation improvements are noticeable. Excellent build quality." }
    ]
  }
];