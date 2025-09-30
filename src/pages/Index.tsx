import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import Brands from "@/components/Brands";
import AboutSection from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <FeaturedProducts />
        <Categories />
        <Brands />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
