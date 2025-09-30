import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/components/ProductsData";
import { useUser } from "@/context/UserContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import {
  User,
  Heart,
  Package,
  Settings,
  LogOut,
  Edit,
  Mail,
  Calendar,
  ShoppingBag,
  MapPin,
  Phone,
  CreditCard,
  Gift,
  Star,
  TrendingUp
} from "lucide-react";

const Profile = () => {
  const { user, isLoggedIn, logout, wishlist, removeFromWishlist } = useUser();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");

  // Redirect if not logged in
  if (!isLoggedIn || !user) {
    navigate("/login");
    return null;
  }

  const wishlistProducts = products.filter(product => wishlist.includes(product.id));

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  const handleRemoveFromWishlist = (productId: number) => {
    removeFromWishlist(productId);
    toast({
      title: "Removed from Wishlist",
      description: "Product has been removed from your wishlist.",
    });
  };

  const userStats = [
    { icon: Heart, label: "Wishlist Items", value: wishlist.length, color: "text-red-500" },
    { icon: Package, label: "Orders", value: "3", color: "text-blue-500" },
    { icon: Star, label: "Reviews", value: "12", color: "text-yellow-500" },
    { icon: Gift, label: "Rewards Points", value: "2,450", color: "text-purple-500" },
  ];

  const recentOrders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "Delivered",
      total: "RM 12,320.00",
      items: "Sonus Faber Sonetto I G2",
    },
    {
      id: "ORD-002",
      date: "2023-12-20",
      status: "Delivered",
      total: "RM 6,999.00",
      items: "Dynaudio Evoke 20",
    },
    {
      id: "ORD-003",
      date: "2023-11-08",
      status: "Delivered",
      total: "RM 8,890.00",
      items: "Focal Aria 906",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Profile Header */}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="text-2xl font-bold bg-primary/10">
                {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
              <div className="flex flex-col md:flex-row items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Member since {new Date(user.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {userStats.map((stat, idx) => (
              <Card key={idx} className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="wishlist">Wishlist ({wishlist.length})</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Added KEF LS50 to wishlist</span>
                      <span className="text-xs text-muted-foreground ml-auto">2 hours ago</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Order ORD-001 delivered</span>
                      <span className="text-xs text-muted-foreground ml-auto">3 days ago</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Reviewed Sonus Faber speakers</span>
                      <span className="text-xs text-muted-foreground ml-auto">1 week ago</span>
                    </div>
                  </div>
                </Card>

                {/* Quick Actions */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-auto p-4 flex-col">
                      <ShoppingBag className="h-6 w-6 mb-2" />
                      <span className="text-sm">Browse Products</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex-col">
                      <Heart className="h-6 w-6 mb-2" />
                      <span className="text-sm">View Wishlist</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex-col">
                      <Package className="h-6 w-6 mb-2" />
                      <span className="text-sm">Track Orders</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex-col">
                      <Settings className="h-6 w-6 mb-2" />
                      <span className="text-sm">Account Settings</span>
                    </Button>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="wishlist" className="mt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">My Wishlist</h2>
                <p className="text-muted-foreground">
                  {wishlistProducts.length === 0
                    ? "Your wishlist is empty. Start adding products you love!"
                    : `You have ${wishlistProducts.length} items in your wishlist`}
                </p>
              </div>

              {wishlistProducts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlistProducts.map((product) => (
                    <div key={product.id} className="relative">
                      <ProductCard product={product} />
                      <Button
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2 z-10"
                        onClick={() => handleRemoveFromWishlist(product.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <Card className="p-12 text-center">
                  <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">No items in your wishlist</h3>
                  <p className="text-muted-foreground mb-4">
                    Browse our collection and add products you love to your wishlist.
                  </p>
                  <Button onClick={() => navigate("/products")}>
                    Browse Products
                  </Button>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="orders" className="mt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Order History</h2>
                <p className="text-muted-foreground">
                  Track and manage your orders
                </p>
              </div>

              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <Card key={order.id} className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold">{order.id}</h3>
                          <Badge variant="secondary">{order.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{order.items}</p>
                        <p className="text-xs text-muted-foreground">
                          Ordered on {new Date(order.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{order.total}</div>
                        <Button variant="outline" size="sm" className="mt-2">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="settings" className="mt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Account Settings</h2>
                <p className="text-muted-foreground">
                  Manage your account preferences and personal information
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Full Name</label>
                      <p className="text-muted-foreground">{user.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email Address</label>
                      <p className="text-muted-foreground">{user.email}</p>
                    </div>
                    <Button variant="outline">Edit Information</Button>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Email Notifications</span>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Privacy Settings</span>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Security</span>
                      <Button variant="outline" size="sm">Change Password</Button>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;