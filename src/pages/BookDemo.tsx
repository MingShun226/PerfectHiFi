import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Volume2,
  Home,
  Building2,
  Sparkles,
  User,
  MessageSquare
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookDemo = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    solutionType: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Submitted!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      solutionType: "",
      preferredDate: "",
      preferredTime: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const showroomLocations = [
    {
      name: "Kuala Lumpur Flagship",
      address: "Level 3, Pavilion Elite, Kuala Lumpur",
      phone: "+60 3-2168 8888",
      hours: "Mon-Sun: 10:00 AM - 10:00 PM"
    },
    {
      name: "Petaling Jaya Branch",
      address: "1 Utama Shopping Centre, Petaling Jaya",
      phone: "+60 3-7726 8888",
      hours: "Mon-Sun: 10:00 AM - 10:00 PM"
    },
    {
      name: "Shah Alam Branch",
      address: "Sunway Pyramid, Shah Alam",
      phone: "+60 3-5621 8888",
      hours: "Mon-Sun: 10:00 AM - 10:00 PM"
    }
  ];

  const benefits = [
    {
      icon: Volume2,
      title: "Experience Premium Sound",
      description: "Listen to high-end audio systems in our acoustically optimized demonstration rooms"
    },
    {
      icon: User,
      title: "Expert Consultation",
      description: "Get personalized advice from our experienced audio specialists"
    },
    {
      icon: Home,
      title: "Custom Solutions",
      description: "Discover tailored solutions designed for your space and preferences"
    },
    {
      icon: CheckCircle2,
      title: "No Obligation",
      description: "Free consultation and demo with no pressure to purchase"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-card/80" />
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(20 48% 35% / 0.4) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, hsl(46 70% 85% / 0.3) 0%, transparent 50%)`,
            backgroundSize: '200px 200px, 300px 300px',
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary">
              <Sparkles className="w-3 h-3 mr-1" />
              Book Your Demo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Experience Audio Perfection
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Schedule a private demonstration at one of our showrooms or arrange an in-home consultation.
              Discover the difference that premium audio can make.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Book a Demo?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience firsthand the quality and performance of our premium audio systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border-2 border-transparent hover:border-primary/20">
                <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl inline-flex mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">Request Form</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule Your Demo</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will contact you to confirm your appointment.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone *</label>
                    <Input
                      type="tel"
                      placeholder="+60 12-345 6789"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Location *</label>
                  <Select value={formData.location} onValueChange={(value) => handleChange("location", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a showroom" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kl">Kuala Lumpur Flagship</SelectItem>
                      <SelectItem value="pj">Petaling Jaya Branch</SelectItem>
                      <SelectItem value="sa">Shah Alam Branch</SelectItem>
                      <SelectItem value="home">In-Home Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Solution Interest *</label>
                  <Select value={formData.solutionType} onValueChange={(value) => handleChange("solutionType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select solution type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home-audio">Home Audio Systems</SelectItem>
                      <SelectItem value="home-theater">Home Theater</SelectItem>
                      <SelectItem value="listening-room">Dedicated Listening Room</SelectItem>
                      <SelectItem value="smart-home">Smart Home Integration</SelectItem>
                      <SelectItem value="commercial">Commercial Audio</SelectItem>
                      <SelectItem value="custom">Custom Solution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                    <Input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleChange("preferredDate", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Time *</label>
                    <Select value={formData.preferredTime} onValueChange={(value) => handleChange("preferredTime", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10-12">10:00 AM - 12:00 PM</SelectItem>
                        <SelectItem value="12-14">12:00 PM - 2:00 PM</SelectItem>
                        <SelectItem value="14-16">2:00 PM - 4:00 PM</SelectItem>
                        <SelectItem value="16-18">4:00 PM - 6:00 PM</SelectItem>
                        <SelectItem value="18-20">6:00 PM - 8:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Notes</label>
                  <Textarea
                    placeholder="Tell us about your requirements, space, or any specific products you'd like to demo..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  Submit Demo Request
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>

            {/* Showroom Info */}
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">Our Showrooms</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Locations</h2>
              <p className="text-muted-foreground mb-8">
                Experience our audio systems in person at any of our three showroom locations across Klang Valley.
              </p>

              <div className="space-y-6">
                {showroomLocations.map((location, index) => (
                  <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                    <h3 className="text-xl font-bold mb-4">{location.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{location.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{location.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{location.hours}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Get Directions
                    </Button>
                  </Card>
                ))}
              </div>

              {/* Contact Card */}
              <Card className="p-6 mt-6 bg-primary/5">
                <h3 className="font-bold text-lg mb-4">Need Immediate Assistance?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Call us directly or send an email for quick inquiries.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">+60 3-2168 8888</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">info@perfecthifi.com</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What to Expect</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your demo experience, step by step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary/20 mb-2">01</div>
              <h3 className="font-bold text-lg mb-3">Welcome & Assessment</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We'll discuss your requirements, preferences, and budget to tailor the demo to your needs.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary/20 mb-2">02</div>
              <h3 className="font-bold text-lg mb-3">Demo Experience</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Listen to various systems in our demonstration rooms with your favorite music or content.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary/20 mb-2">03</div>
              <h3 className="font-bold text-lg mb-3">Consultation & Proposal</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Receive expert recommendations and a customized proposal for your space.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookDemo;
