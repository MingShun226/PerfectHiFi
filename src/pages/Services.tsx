import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Headphones,
  Home,
  Car,
  Settings,
  Users,
  Calendar,
  Clock,
  CheckCircle,
  Star,
  Phone,
  MapPin,
  ArrowRight,
  Volume2,
  Wrench,
  Shield,
  Award,
  Lightbulb,
  Target,
  Zap
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState("consultation");

  const services = [
    {
      id: "consultation",
      icon: Headphones,
      title: "Personal Audio Consultation",
      description: "One-on-one guidance to find your perfect audio setup",
      duration: "60-90 minutes",
      price: "Free",
      priceNote: "Complimentary for all customers",
      features: [
        "Detailed listening preferences analysis",
        "Room acoustics assessment",
        "Budget optimization recommendations",
        "Product matching and comparison",
        "Future upgrade pathway planning"
      ],
      process: [
        "Initial consultation call or visit",
        "Listening preference questionnaire",
        "Room measurement and analysis",
        "Personalized system recommendations",
        "Follow-up support and guidance"
      ],
      image: "/placeholder.svg"
    },
    {
      id: "installation",
      icon: Home,
      title: "Home Audio Installation",
      description: "Professional setup and calibration in your space",
      duration: "Half to full day",
      price: "From RM 500",
      priceNote: "Pricing varies by system complexity",
      features: [
        "Professional equipment installation",
        "Advanced cable management",
        "Room acoustic optimization",
        "System calibration and tuning",
        "Complete setup documentation"
      ],
      process: [
        "Pre-installation site survey",
        "Equipment delivery and inspection",
        "Professional installation and setup",
        "System calibration and testing",
        "Customer training and handover"
      ],
      image: "/placeholder.svg"
    },
    {
      id: "car-audio",
      icon: Car,
      title: "Car Audio Systems",
      description: "Premium mobile audio solutions and installation",
      duration: "Full day",
      price: "Quote on request",
      priceNote: "Custom pricing for each vehicle",
      features: [
        "Custom vehicle integration",
        "Sound deadening installation",
        "Advanced DSP tuning",
        "Factory system integration",
        "Professional wiring and installation"
      ],
      process: [
        "Vehicle assessment and consultation",
        "Custom system design and planning",
        "Professional installation",
        "Acoustic tuning and calibration",
        "Final testing and customer training"
      ],
      image: "/placeholder.svg"
    },
    {
      id: "optimization",
      icon: Settings,
      title: "System Optimization",
      description: "Fine-tuning and upgrading existing setups",
      duration: "2-4 hours",
      price: "From RM 300",
      priceNote: "Based on system complexity",
      features: [
        "System performance analysis",
        "Acoustic measurement and correction",
        "Component positioning optimization",
        "Upgrade recommendations",
        "Performance verification"
      ],
      process: [
        "System assessment and measurement",
        "Identification of improvement areas",
        "Implementation of optimizations",
        "Performance testing and verification",
        "Upgrade pathway recommendations"
      ],
      image: "/placeholder.svg"
    }
  ];

  const additionalServices = [
    {
      icon: Wrench,
      title: "Equipment Servicing",
      description: "Professional maintenance and repair services for your audio equipment",
      features: ["Authorized service center", "Genuine parts replacement", "Performance testing"]
    },
    {
      icon: Shield,
      title: "Extended Warranty",
      description: "Additional protection beyond manufacturer warranty",
      features: ["Extended coverage options", "Priority service", "Loaner equipment"]
    },
    {
      icon: Users,
      title: "Group Demonstrations",
      description: "Exclusive listening sessions for audio enthusiasts",
      features: ["Private showroom access", "Expert presentations", "Group discounts"]
    },
    {
      icon: Lightbulb,
      title: "Audio Education",
      description: "Learn about high-fidelity audio systems and best practices",
      features: ["Educational workshops", "System operation training", "Maintenance guidance"]
    }
  ];

  const testimonials = [
    {
      name: "David Lim",
      location: "Kuala Lumpur",
      service: "Home Installation",
      rating: 5,
      comment: "The team did an amazing job installing my Sonus Faber system. The sound quality transformation was incredible, and they took care of every detail.",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Chen",
      location: "Penang",
      service: "Consultation",
      rating: 5,
      comment: "The consultation helped me understand exactly what I needed. They saved me from making expensive mistakes and found the perfect system for my space.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Wong",
      location: "Selangor",
      service: "Car Audio",
      rating: 5,
      comment: "Professional car audio installation that completely transformed my driving experience. The attention to detail and quality is outstanding.",
      image: "/placeholder.svg"
    }
  ];

  const currentService = services.find(s => s.id === selectedService) || services[0];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-card/80" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary">Professional Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Expert Audio Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              From personal consultations to professional installations, our certified experts
              ensure you get the most from your audio investment with world-class service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="" asChild>
                <Link to="/contact">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Consultation
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                Call: +60 3-2168 8888
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive audio solutions designed to deliver the perfect listening experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service) => (
              <Card
                key={service.id}
                className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedService === service.id ? 'ring-2 ring-primary bg-primary/5' : ''
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="text-center">
                  <div className={`p-3 rounded-lg inline-flex mb-4 transition-colors ${
                    selectedService === service.id ? 'bg-primary/20' : 'bg-primary/10'
                  }`}>
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="h-3 w-3 text-primary" />
                      {service.duration}
                    </div>
                    <div className="font-medium text-primary">{service.price}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Detailed Service View */}
          <Card className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <currentService.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{currentService.title}</h3>
                    <p className="text-muted-foreground">{currentService.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
                    <div className="font-medium">{currentService.duration}</div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Target className="h-5 w-5 text-primary mx-auto mb-2" />
                    <div className="font-medium">{currentService.price}</div>
                    <div className="text-sm text-muted-foreground">Pricing</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {currentService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button size="lg" className="w-full " asChild>
                  <Link to="/contact">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book This Service
                  </Link>
                </Button>
              </div>

              <div>
                <div className="aspect-video bg-muted/50 rounded-lg mb-6 flex items-center justify-center">
                  <currentService.icon className="h-16 w-16 text-primary/50" />
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Our Process:</h4>
                  <div className="space-y-3">
                    {currentService.process.map((step, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> {currentService.priceNote}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complementary services to enhance your audio journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="p-3 bg-primary/10 rounded-lg inline-flex mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              25+ years of experience delivering exceptional audio solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Certified Experts</h3>
              <p className="text-muted-foreground text-sm">
                Our team holds certifications from major audio brands and has decades of combined experience
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Guaranteed Satisfaction</h3>
              <p className="text-muted-foreground text-sm">
                We stand behind our work with comprehensive warranties and ongoing support
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Latest Technology</h3>
              <p className="text-muted-foreground text-sm">
                We use state-of-the-art measurement tools and techniques for optimal results
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4">
                  "{testimonial.comment}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <Badge variant="outline" className="text-xs mt-1">
                      {testimonial.service}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Areas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide services throughout Malaysia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                Klang Valley & Surroundings
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Kuala Lumpur • Petaling Jaya • Shah Alam • Subang Jaya</p>
                <p>• Ampang • Cheras • Damansara • Mont Kiara</p>
                <p>• Cyberjaya • Putrajaya • Klang • Kajang</p>
              </div>
              <div className="mt-4 text-sm">
                <strong>Response Time:</strong> Same day consultation available
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                Northern Region
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Penang • Kedah • Perlis • Perak</p>
                <p>• Georgetown • Butterworth • Ipoh • Taiping</p>
                <p>• Alor Setar • Sungai Petani • Kangar</p>
              </div>
              <div className="mt-4 text-sm">
                <strong>Response Time:</strong> Within 24-48 hours
              </div>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Don't see your area listed? We also provide services to other states on request.
            </p>
            <Button variant="outline" asChild>
              <Link to="/contact">
                Check Service Availability
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Audio Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our experts help you create the perfect audio system for your space and preferences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="" asChild>
                <Link to="/contact">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Free Consultation
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                Call Now: +60 3-2168 8888
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;