import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Build Your Legacy
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Ready to transform your Web3 project into an iconic brand? Let's discuss how we can help you 
            stand out in the decentralized future.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto">
          <form className="space-y-6">
            <div className="space-y-2 text-left">
              <Label htmlFor="name" className="text-foreground">Name</Label>
              <Input 
                id="name" 
                placeholder="Your name" 
                className="bg-card border-border focus:border-primary"
              />
            </div>
            
            <div className="space-y-2 text-left">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com" 
                className="bg-card border-border focus:border-primary"
              />
            </div>
            
            <div className="space-y-2 text-left">
              <Label htmlFor="message" className="text-foreground">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Tell us about your project..." 
                className="bg-card border-border focus:border-primary min-h-[120px]"
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;