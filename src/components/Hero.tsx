import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/8a59ef6b-dcf3-4b48-a4da-11877f475540.png" 
            alt="ZeroInputAI Logo" 
            className="w-32 h-32 mx-auto mb-6 rounded-full shadow-2xl"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ZeroInputAI
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Get Any Business Automation Ready in 24 Hours
        </h2>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          We provide free automations as beta examples and offer 7-day free trials with 80% off for serious business owners. 
          Speed, efficiency, and zero input required from you.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90">
            Get Free Automation
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Custom Quote
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24h</div>
            <div className="text-muted-foreground">Delivery Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Free Beta Automations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">80%</div>
            <div className="text-muted-foreground">Discount Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;