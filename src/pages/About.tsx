import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Users,
  Heart,
  Shield,
  Volume2,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Target,
  Lightbulb,
  Handshake,
  Home,
  Settings,
  Wrench
} from "lucide-react";

const About = () => {

  const values = [
    {
      icon: Heart,
      title: "Passion for Audio",
      description: "We live and breathe high-fidelity audio. Every recommendation comes from genuine enthusiasm and deep expertise."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We only partner with brands that meet our exacting standards for build quality, sound reproduction, and reliability."
    },
    {
      icon: Handshake,
      title: "Personal Service",
      description: "Every customer receives individual attention. We take time to understand your needs and create tailored solutions."
    },
    {
      icon: Target,
      title: "Perfect Match",
      description: "We don't just sell products – we match you with the ideal system for your space, preferences, and budget."
    }
  ];

  const milestones = [
    { year: "1998", event: "Perfect Hi-Fi founded with first showroom in Kuala Lumpur" },
    { year: "2005", event: "Expanded to include home theater and custom installation services" },
    { year: "2010", event: "Became exclusive distributor for premium European brands" },
    { year: "2015", event: "Opened second flagship store and launched online presence" },
    { year: "2020", event: "Introduced virtual consultations and contactless demos" },
    { year: "2024", event: "Celebrating 25+ years of audio excellence in Malaysia" }
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
            <Badge className="mb-4 bg-primary/10 text-primary">Since 1998</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Over 20 Years of Audio Excellence
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Perfect HiFi has long been regarded as Malaysia's premier home entertainment specialist
              offering luxury audiophile-quality speakers, amplifiers, cables and accessories; as well
              as high-definition home theatre systems and residential automation.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who Are We?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  From its inception, Perfect HiFi has worked at providing reliable service and
                  professional consultation, complimented by our policy of providing only reputable
                  audio-visual brands at every price range. Presently, we hold an extensive brand
                  range from Cambridge Audio, Nordost, Nagra, KEF, Sonus Faber, Transparent, to
                  Audio Research, Wireworld, Inakustik, Thorens, and GoldenEar.
                </p>
                <p>
                  Several of our staff members have accumulated over 20 years of industrial experience
                  and dedication that reflect in their on-job solutions that meet and often exceed our
                  clients' expectations. Our business has been built, and continues to thrive on customer
                  satisfaction and trust.
                </p>
                <p>
                  We bring with us customized-design experience in dedicated home entertainment,
                  residential and commercial automation projects that also reflect our clients'
                  creative lifestyle.
                </p>
              </div>
              <Button className="mt-6" size="lg">
                <Volume2 className="mr-2 h-4 w-4" />
                Experience Our Showroom
              </Button>
            </div>
            <div className="relative">
              <Card className="p-8 glass">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-gradient mb-2">1000+</div>
                    <div className="text-sm text-muted-foreground">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Premium Brands</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient mb-2">25+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient mb-2">3</div>
                    <div className="text-sm text-muted-foreground">Showroom Locations</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Perfect Hi-Fi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                <div className="p-3 bg-primary/10 rounded-lg inline-flex mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Celebrating our commitment to excellence in the audio industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <Award className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Best Audio Retailer 2023</h3>
              <p className="text-muted-foreground text-sm mb-2">Malaysia Audio Excellence Awards</p>
              <p className="text-xs text-muted-foreground">Recognized for outstanding customer service and product expertise</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Authorized Premium Dealer</h3>
              <p className="text-muted-foreground text-sm mb-2">Multiple International Brands</p>
              <p className="text-xs text-muted-foreground">Official distributor status for luxury audio equipment</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <Star className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Customer Choice Award</h3>
              <p className="text-muted-foreground text-sm mb-2">Malaysia Retail Excellence 2022</p>
              <p className="text-xs text-muted-foreground">Highest customer satisfaction ratings in premium audio</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <Lightbulb className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Innovation in Design</h3>
              <p className="text-muted-foreground text-sm mb-2">Home Theater Excellence Awards</p>
              <p className="text-xs text-muted-foreground">Outstanding custom installation and room design projects</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <Users className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Industry Leadership</h3>
              <p className="text-muted-foreground text-sm mb-2">Malaysian Hi-Fi Association</p>
              <p className="text-xs text-muted-foreground">Contributing member to industry standards and best practices</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Community Impact</h3>
              <p className="text-muted-foreground text-sm mb-2">Audio Education Initiative</p>
              <p className="text-xs text-muted-foreground">Supporting music appreciation and audio education programs</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted Partners</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proud to represent the world's most prestigious audio brands
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-background/50">
              <div className="h-16 flex items-center justify-center mb-2">
                <Volume2 className="h-10 w-10 text-primary" />
              </div>
              <h4 className="font-medium text-sm">Sonus Faber</h4>
              <p className="text-xs text-muted-foreground">Italian Excellence</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-background/50">
              <div className="h-16 flex items-center justify-center mb-2">
                <Volume2 className="h-10 w-10 text-primary" />
              </div>
              <h4 className="font-medium text-sm">KEF</h4>
              <p className="text-xs text-muted-foreground">British Innovation</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-background/50">
              <div className="h-16 flex items-center justify-center mb-2">
                <Volume2 className="h-10 w-10 text-primary" />
              </div>
              <h4 className="font-medium text-sm">Audio Research</h4>
              <p className="text-xs text-muted-foreground">Tube Mastery</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-background/50">
              <div className="h-16 flex items-center justify-center mb-2">
                <Volume2 className="h-10 w-10 text-primary" />
              </div>
              <h4 className="font-medium text-sm">Cambridge Audio</h4>
              <p className="text-xs text-muted-foreground">British Engineering</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-background/50">
              <div className="h-16 flex items-center justify-center mb-2">
                <Volume2 className="h-10 w-10 text-primary" />
              </div>
              <h4 className="font-medium text-sm">Nordost</h4>
              <p className="text-xs text-muted-foreground">Cable Technology</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-background/50">
              <div className="h-16 flex items-center justify-center mb-2">
                <Volume2 className="h-10 w-10 text-primary" />
              </div>
              <h4 className="font-medium text-sm">Nagra</h4>
              <p className="text-xs text-muted-foreground">Swiss Precision</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-background/50">
              <div className="h-16 flex items-center justify-center mb-2">
                <Volume2 className="h-10 w-10 text-primary" />
              </div>
              <h4 className="font-medium text-sm">Transparent</h4>
              <p className="text-xs text-muted-foreground">Cable Solutions</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-background/50">
              <div className="h-16 flex items-center justify-center mb-2">
                <Volume2 className="h-10 w-10 text-primary" />
              </div>
              <h4 className="font-medium text-sm">Wireworld</h4>
              <p className="text-xs text-muted-foreground">Advanced Cables</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-background/50">
              <div className="h-16 flex items-center justify-center mb-2">
                <Volume2 className="h-10 w-10 text-primary" />
              </div>
              <h4 className="font-medium text-sm">Thorens</h4>
              <p className="text-xs text-muted-foreground">Analog Heritage</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-background/50">
              <div className="h-16 flex items-center justify-center mb-2">
                <Volume2 className="h-10 w-10 text-primary" />
              </div>
              <h4 className="font-medium text-sm">GoldenEar</h4>
              <p className="text-xs text-muted-foreground">American Innovation</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              And many more prestigious brands committed to audio excellence
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/brands">
                <Volume2 className="mr-2 h-4 w-4" />
                View All Brands
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our commitment to audio excellence
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300" />
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-16 bg-primary/30 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our business has changed dramatically around and over the years, reflecting the changes
              in technology and the needs and desires of our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <Volume2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Product Consultation</h3>
              <p className="text-muted-foreground text-sm">
                Expert guidance to help you choose the perfect audio system for your needs and budget.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">System Installation & Maintenance</h3>
              <p className="text-muted-foreground text-sm">
                Professional installation and ongoing maintenance services for optimal performance.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <Home className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Dedicated Room Design & Construction</h3>
              <p className="text-muted-foreground text-sm">
                Custom-designed listening rooms and home theaters for the ultimate audio experience.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Interior & Acoustic Design</h3>
              <p className="text-muted-foreground text-sm">
                Professional acoustic consultation to optimize your space for perfect sound reproduction.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Residential Automation</h3>
              <p className="text-muted-foreground text-sm">
                Smart home integration and automation solutions for modern living.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-3">Residential Networking</h3>
              <p className="text-muted-foreground text-sm">
                Complete networking solutions to support your digital audio and video systems.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Showrooms</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All three of our dedicated showrooms located within the Klang Valley provide easy access
              for personal enquirers and system auditions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Kuala Lumpur Flagship</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Level 3, Pavilion Elite, Kuala Lumpur</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+60 3-2168 8888</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Mon-Sun: 10:00 AM - 10:00 PM</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Our flagship showroom features the latest from all our premium brands
                in acoustically optimized demonstration rooms.
              </p>
              <Button variant="outline" className="w-full">Get Directions</Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Petaling Jaya Branch</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>1 Utama Shopping Centre, Petaling Jaya</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+60 3-7726 8888</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Mon-Sun: 10:00 AM - 10:00 PM</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Our Petaling Jaya branch offers a comprehensive range of home entertainment
                solutions with dedicated listening rooms.
              </p>
              <Button variant="outline" className="w-full">Get Directions</Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Shah Alam Branch</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Sunway Pyramid, Shah Alam</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+60 3-5621 8888</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Mon-Sun: 10:00 AM - 10:00 PM</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Our newest showroom features the latest in residential automation
                and smart home integration technologies.
              </p>
              <Button variant="outline" className="w-full">Get Directions</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Perfect Sound?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Visit our showrooms or schedule a personal consultation with our audio experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="">
                <MapPin className="mr-2 h-4 w-4" />
                Visit Showroom
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;