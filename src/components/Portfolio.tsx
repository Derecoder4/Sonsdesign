const Portfolio = () => {
  const projects = [
    {
      title: "Nexus Protocol",
      description: "A revolutionary DeFi platform that needed a brand identity as innovative as its technology. We created a cohesive visual system that communicated trust and cutting-edge innovation.",
      imageAlt: "Nexus Protocol branding showcase"
    },
    {
      title: "AURA Marketplace",
      description: "An NFT marketplace that required sophisticated branding to stand out in a competitive landscape. Our design approach emphasized exclusivity and premium quality.",
      imageAlt: "AURA Marketplace design portfolio"
    },
    {
      title: "Cygnus Worlds",
      description: "A metaverse gaming platform that needed branding to capture the imagination of both gamers and investors. We delivered an identity that bridges entertainment and technology.",
      imageAlt: "Cygnus Worlds brand identity"
    }
  ];

  return (
    <section id="portfolio" className="py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Projects We Have Transformed
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              index % 2 === 1 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
            }`}>
              
              {/* Project Image Placeholder */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent-glow/20 rounded-2xl border border-border flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto mb-4"></div>
                    <p className="text-muted-foreground text-sm">Project Image</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;