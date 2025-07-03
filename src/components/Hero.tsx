import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-primary/10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          
          {/* Logo with premium effects */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse-glow"></div>
            <img 
              src="/lovable-uploads/5d8ebae5-14e6-404f-bb14-576f48f37daa.png" 
              alt="ZeroInputAI Logo" 
              className="relative w-40 h-40 mx-auto mb-6 rounded-full glow-primary premium-shadow transition-transform duration-500 hover:scale-110"
            />
          </div>
          
          {/* Main heading with gradient text */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
            <span className="gradient-text animate-shimmer bg-[linear-gradient(90deg,transparent,hsl(var(--primary)),hsl(var(--accent)),hsl(var(--primary)),transparent)] bg-[length:200%_100%]">
              ZeroInputAI
            </span>
          </h1>
          
          {/* Subheading with typewriter effect */}
          <h2 className="text-3xl md:text-4xl text-foreground/90 mb-8 max-w-4xl mx-auto font-light">
            <span className="inline-block animate-slide-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              Get Any Business Automation
            </span>
            <br />
            <span className="inline-block animate-slide-up text-primary font-semibold" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
              Ready in 24 Hours
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '1.1s', animationFillMode: 'both' }}>
            We provide <span className="text-accent font-semibold">free automations</span> as beta examples and offer 
            <span className="text-primary font-semibold"> 7-day free trials with 80% off</span> for serious business owners.
            <br />
            <span className="text-lg text-accent">Speed • Efficiency • Zero Input Required</span>
          </p>
          
          {/* CTA Buttons with premium effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '1.4s', animationFillMode: 'both' }}>
            <Button 
              size="lg" 
              className="text-xl px-12 py-6 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 glow-primary transform hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
            >
              <span className="relative z-10">Get Free Automation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-xl px-12 py-6 border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:glow-accent transform hover:scale-105"
            >
              Custom Quote
            </Button>
          </div>
          
          {/* Stats with animated counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '1.7s', animationFillMode: 'both' }}>
            <div className="text-center group">
              <div className="text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">24h</div>
              <div className="text-foreground/70 text-lg">Delivery Time</div>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-foreground/70 text-lg">Free Beta Automations</div>
              <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">80%</div>
              <div className="text-foreground/70 text-lg">Discount Available</div>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;