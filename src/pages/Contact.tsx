import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  User,
  Building,
  Headphones,
  Car,
  Home,
  Settings,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
    preferredContact: "email",
    budget: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      service: "",
      message: "",
      preferredContact: "email",
      budget: ""
    });
  };

  const services = [
    {
      icon: Headphones,
      title: "Personal Audio Consultation",
      description: "One-on-one guidance to find your perfect audio setup",
      duration: "60 minutes",
      price: "Free"
    },
    {
      icon: Home,
      title: "Home Audio Installation",
      description: "Professional setup and calibration in your space",
      duration: "Half/Full day",
      price: "From RM 500"
    },
    {
      icon: Car,
      title: "Car Audio Systems",
      description: "Premium mobile audio solutions and installation",
      duration: "Full day",
      price: "Quote on request"
    },
    {
      icon: Settings,
      title: "System Optimization",
      description: "Fine-tuning and upgrading existing setups",
      duration: "2-4 hours",
      price: "From RM 300"
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+60 3-2168 8888",
      secondary: "+60 4-2270 9999",
      description: "Speak directly with our audio experts",
      hours: "Mon-Sun: 10:00 AM - 10:00 PM"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@perfecthifi.com.my",
      secondary: "sales@perfecthifi.com.my",
      description: "Get detailed responses to your questions",
      hours: "Response within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      primary: "+60 12-345 6789",
      secondary: "+60 12-987 6543",
      description: "Quick questions and appointment booking",
      hours: "Mon-Sun: 9:00 AM - 11:00 PM"
    },
    {
      icon: Calendar,
      title: "In-Person Visit",
      primary: "Pavilion Elite, KL",
      secondary: "Gurney Plaza, Penang",
      description: "Experience our full range in person",
      hours: "Mon-Sun: 10:00 AM - 10:00 PM"
    }
  ];

  const faqs = [
    {
      question: "Do you offer home demonstrations?",
      answer: "Yes! We offer home demonstrations for premium systems above RM 20,000. This allows you to experience the equipment in your actual listening environment."
    },
    {
      question: "What's included in your installation service?",
      answer: "Our installation includes equipment setup, cable management, room acoustics optimization, system calibration, and a full tutorial on operation."
    },
    {
      question: "Do you provide warranties on your products?",
      answer: "All products come with full manufacturer warranties. We also provide extended warranty options and our own service support for added peace of mind."
    },
    {
      question: "Can you work with existing equipment?",
      answer: "Absolutely! We can integrate new components with your existing system or help upgrade specific parts to improve overall performance."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-card/80" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary">Get In Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Let's Find Your Perfect Sound
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Whether you're looking for personalized recommendations, professional installation,
              or expert advice, our team is here to help create your ideal audio experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="">
                <Phone className="mr-2 h-4 w-4" />
                Call Now: +60 3-2168 8888
              </Button>
              <Button variant="outline" size="lg">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Reach Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="p-3 bg-primary/10 rounded-lg inline-flex mb-4 group-hover:bg-primary/20 transition-colors">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{method.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="font-medium">{method.primary}</div>
                  <div className="text-sm text-muted-foreground">{method.secondary}</div>
                </div>
                <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
                <Badge variant="secondary" className="text-xs">{method.hours}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="mt-1 w-full px-3 py-2 bg-background border border-border rounded-lg"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under RM 5,000</option>
                      <option value="5k-15k">RM 5,000 - RM 15,000</option>
                      <option value="15k-50k">RM 15,000 - RM 50,000</option>
                      <option value="50k-100k">RM 50,000 - RM 100,000</option>
                      <option value="over-100k">Over RM 100,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">Service Interest</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-3 py-2 bg-background border border-border rounded-lg"
                  >
                    <option value="">Select a service</option>
                    <option value="consultation">Personal Audio Consultation</option>
                    <option value="home-installation">Home Audio Installation</option>
                    <option value="car-audio">Car Audio Systems</option>
                    <option value="optimization">System Optimization</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-1"
                    placeholder="Tell us about your audio needs, current setup, listening preferences, or any questions you have..."
                  />
                </div>

                <div>
                  <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                  <div className="mt-2 flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === "email"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === "phone"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Phone
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="whatsapp"
                        checked={formData.preferredContact === "whatsapp"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      WhatsApp
                    </label>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full ">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Store Locations */}
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Building className="mr-2 h-5 w-5 text-primary" />
                  Kuala Lumpur Flagship
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Level 3, Pavilion Elite</div>
                      <div className="text-muted-foreground">168, Jalan Bukit Bintang</div>
                      <div className="text-muted-foreground">55100 Kuala Lumpur</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+60 3-2168 8888</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>kl@perfecthifi.com.my</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Mon-Sun: 10:00 AM - 10:00 PM</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">Our flagship showroom features:</p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      5 acoustically optimized listening rooms
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      Home theater demonstration suite
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      Headphone listening bar
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      Private consultation rooms
                    </li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Get Directions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Building className="mr-2 h-5 w-5 text-primary" />
                  Penang Branch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Gurney Plaza</div>
                      <div className="text-muted-foreground">170, Persiaran Gurney</div>
                      <div className="text-muted-foreground">10250 Georgetown, Penang</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+60 4-2270 9999</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>penang@perfecthifi.com.my</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Mon-Sun: 10:00 AM - 10:00 PM</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">Our northern branch specializes in:</p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      Home theater systems
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      Custom installation services
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      Car audio solutions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      Outdoor audio systems
                    </li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Get Directions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional services to ensure you get the most from your audio investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="p-3 bg-primary/10 rounded-lg inline-flex mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-medium text-primary">{service.price}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;