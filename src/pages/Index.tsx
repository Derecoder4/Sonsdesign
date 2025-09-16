import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WhoWeAre />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;