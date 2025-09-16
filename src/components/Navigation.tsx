import sondesignsLogo from "@/assets/sondesigns-logo.jpeg";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <img src={sondesignsLogo} alt="SONDESIGNS" className="h-8 w-auto" />
            <span className="text-xl font-semibold text-foreground">SONDESIGNS</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#services" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Portfolio
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;