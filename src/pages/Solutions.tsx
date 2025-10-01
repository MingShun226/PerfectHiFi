import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Building2,
  Music,
  Tv,
  Settings,
  Lightbulb,
  Volume2,
  Speaker,
  ArrowRight,
  CheckCircle2,
  Users,
  Sparkles
} from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Home,
      title: "Home Audio Systems",
      description: "Premium stereo and multi-room audio solutions for residential spaces",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
      features: [
        "High-fidelity stereo systems",
        "Multi-room audio distribution",
        "Wireless streaming integration",
        "Custom speaker placement"
      ],
      link: "/solutions/home-audio"
    },
    {
      icon: Tv,
      title: "Home Theater",
      description: "Immersive cinema experience with state-of-the-art surround sound",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&h=600&fit=crop",
      features: [
        "Dolby Atmos & DTS:X systems",
        "4K/8K projection systems",
        "Acoustic room treatment",
        "Smart automation control"
      ],
      link: "/solutions/home-theater"
    },
    {
      icon: Music,
      title: "Dedicated Listening Room",
      description: "Acoustically optimized spaces for the ultimate audiophile experience",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      features: [
        "Custom acoustic design",
        "Premium component selection",
        "Isolation and soundproofing",
        "Reference-grade calibration"
      ],
      link: "/solutions/listening-room"
    },
    {
      icon: Building2,
      title: "Commercial Audio",
      description: "Professional audio solutions for businesses and commercial spaces",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      features: [
        "Retail background music",
        "Restaurant sound systems",
        "Office conference audio",
        "Hotel & hospitality solutions"
      ],
      link: "/solutions/commercial"
    },
    {
      icon: Settings,
      title: "Smart Home Integration",
      description: "Seamless integration of audio with home automation systems",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
      features: [
        "Voice control integration",
        "Automated scene programming",
        "Remote system management",
        "Energy-efficient solutions"
      ],
      link: "/solutions/smart-home"
    },
    {
      icon: Lightbulb,
      title: "Custom Design & Installation",
      description: "Bespoke audio solutions tailored to your unique requirements",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&h=600&fit=crop",
      features: [
        "In-wall & in-ceiling speakers",
        "Hidden component installation",
        "Cable management systems",
        "Architectural integration"
      ],
      link: "/solutions/custom"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "We start with understanding your space, preferences, and budget to create the perfect solution."
    },
    {
      step: "02",
      title: "Design",
      description: "Our experts design a custom system optimized for your room acoustics and aesthetic requirements."
    },
    {
      step: "03",
      title: "Installation",
      description: "Professional installation by certified technicians ensures optimal performance and reliability."
    },
    {
      step: "04",
      title: "Calibration",
      description: "Precise tuning and calibration to achieve the best possible sound in your unique space."
    },
    {
      step: "05",
      title: "Support",
      description: "Ongoing maintenance and support to keep your system performing at its peak."
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
              Audio Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Tailored Audio Solutions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              From intimate listening rooms to grand home theaters, we design and install premium audio systems
              that transform how you experience sound.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/book-demo">
                  <Volume2 className="mr-2 h-4 w-4" />
                  Book a Demo
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  <Users className="mr-2 h-4 w-4" />
                  Speak to an Expert
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Our Solutions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Audio Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive audio solutions for every space and application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 bg-primary rounded-xl">
                      <solution.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven process to deliver exceptional audio experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <Card className="p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full">
                  <div className="text-4xl font-bold text-primary/20 mb-2">{item.step}</div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </Card>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 h-6 w-6 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
              <img
                src="https://images.unsplash.com/photo-1574666908499-2a2c8b04e7d0?w=800&h=600&fit=crop"
                alt="Premium audio installation"
                className="rounded-3xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
              />
            </div>

            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Excellence in Every Detail</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 25 years of experience, Perfect HiFi has established itself as Malaysia's
                  premier audio solutions provider. Our team of certified professionals brings
                  unmatched expertise to every project.
                </p>
                <p>
                  We work exclusively with world-class brands and use only premium components.
                  From initial consultation to final calibration, every step is executed with
                  meticulous attention to detail.
                </p>
                <p>
                  Our commitment doesn't end at installation. We provide comprehensive training,
                  ongoing support, and maintenance services to ensure your system continues to
                  perform at its best for years to come.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-gradient mb-1">500+</div>
                  <div className="text-xs text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-gradient mb-1">98%</div>
                  <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>

              <Button className="mt-6" size="lg" asChild>
                <Link to="/book-demo">
                  <Speaker className="mr-2 h-4 w-4" />
                  Schedule Your Consultation
                </Link>
              </Button>
            </div>
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
              Let's discuss your vision and create the perfect audio solution for your space
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/book-demo">
                  <Volume2 className="mr-2 h-4 w-4" />
                  Book a Demo
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  <Users className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
