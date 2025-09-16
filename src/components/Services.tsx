const Services = () => {
  const services = [
    {
      title: "Compelling Identity",
      description: "We distill your intricate technology into a clear, powerful narrative that resonates with both technical experts and mainstream audiences, ensuring your innovation speaks to everyone."
    },
    {
      title: "Iconic Branding", 
      description: "We create unforgettable brands that capture attention in the crowded Web3 space, establishing visual identities that build instant recognition and lasting trust."
    },
    {
      title: "Design for Impact",
      description: "We design for adoption, ensuring every brand element is crafted for growth. From user interfaces to marketing materials, we create experiences that drive engagement and conversion."
    }
  ];

  return (
    <section id="services" className="py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;