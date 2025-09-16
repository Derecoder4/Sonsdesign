import { Button } from "@/components/ui/button";
import sondesignsLogo from "@/assets/sondesigns-logo.jpeg";
import character1 from "@/assets/character1.jpg";
import character2 from "@/assets/character2.jpg";
import character3 from "@/assets/character3.jpg";
import character4 from "@/assets/character4.jpg";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-hero-bg flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 lg:p-8">
        <div className="flex items-center gap-3">
          <img src={sondesignsLogo} alt="SONDESIGNS" className="h-8 w-auto" />
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
            Portfolio
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                  Forge Your Web3 Identity
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  We translate visionary blockchain projects into iconic brands that build trust, inspire adoption, and dominate the decentralized future.
                </p>
              </div>
              
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-electric-lavender hover:bg-electric-lavender/90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-electric-lavender/25 hover:scale-105"
                >
                  Start Your Journey
                </Button>
              </div>
            </div>

            {/* Right Column - Character Grid */}
            <div className="flex justify-center lg:justify-end">
              <div className="grid grid-cols-2 gap-4 max-w-md">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1">
                  <img 
                    src={character1} 
                    alt="Web3 Character 1" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-1">
                  <img 
                    src={character2} 
                    alt="Web3 Character 2" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-1">
                  <img 
                    src={character3} 
                    alt="Web3 Character 3" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500/20 to-yellow-500/20 p-1">
                  <img 
                    src={character4} 
                    alt="Web3 Character 4" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;