const WhoWeAre = () => {
  return (
    <section className="py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At SonDesigns, we are more than a design agency—we are your partners in building the future of Web3. 
              Our team combines deep expertise in blockchain technology with world-class design principles to create 
              brands that don't just look remarkable, but drive real adoption and trust in the decentralized ecosystem.
            </p>
          </div>

          {/* Right Column - Abstract 3D Shape */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent-glow/30 rounded-3xl transform rotate-12 shadow-2xl shadow-primary/10">
                <div className="absolute inset-4 bg-gradient-to-tl from-primary/10 to-transparent rounded-2xl transform -rotate-6">
                  <div className="absolute inset-4 bg-gradient-to-br from-accent-glow/20 to-primary/20 rounded-xl transform rotate-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;