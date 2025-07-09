import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import ThreeScene from "./ThreeScene";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      {/* Premium grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">
            
            {/* Left Content */}
            <div className={`space-y-10 transition-all duration-1200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Brand Badge */}
              <div className="inline-flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-primary/80 tracking-wider uppercase">
                  ZeroInputAI
                </span>
                <div className="w-8 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
              </div>
              
              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-foreground leading-[0.9] tracking-tight">
                  Intelligent
                  <br />
                  <span className="font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                    Automation
                  </span>
                  <br />
                  <span className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                    Systems
                  </span>
                </h1>
                
                <div className="w-24 h-px bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>
              
              {/* Premium Description */}
              <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-xl font-light">
                We architect bespoke automation ecosystems that eliminate manual processes, 
                <span className="text-primary font-medium"> amplify productivity</span>, and deliver 
                <span className="text-accent font-medium"> measurable ROI</span> within 24 hours.
              </p>
              
              {/* Stats Row */}
              <div className="flex items-center space-x-12 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24h</div>
                  <div className="text-sm text-white uppercase tracking-wider">Delivery</div>
                </div>
                <div className="w-px h-12 bg-foreground/10"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-sm text-white uppercase tracking-wider">Automated</div>
                </div>
                <div className="w-px h-12 bg-foreground/10"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">∞</div>
                  <div className="text-sm text-white uppercase tracking-wider">Scalable</div>
                </div>
              </div>
              
              {/* Premium CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  size="lg" 
                  onClick={() => {
                    const element = document.getElementById('free-automations-section');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group px-10 py-6 text-lg bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-medium rounded-2xl shadow-2xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1"
                >
                  <span className="relative z-10">Free Automations</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="ghost"
                  onClick={() => {
                    const element = document.getElementById('contact-section');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group px-10 py-6 text-lg text-foreground hover:text-primary font-medium rounded-2xl border border-foreground/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-500"
                >
                  <span>Custom Quote</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>
            </div>
            
            {/* Right Side - Interactive 3D Scene */}
            <div className={`relative h-[600px] lg:h-[700px] transition-all duration-1200 delay-300 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-3xl"></div>
              <ThreeScene />
              
              {/* Floating UI Elements */}
              <div className="absolute top-8 right-8 p-4 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground/80">System Active</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 left-8 p-4 bg-card/80 backdrop-blur-sm rounded-2xl border border-accent/20 shadow-2xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">∞</div>
                  <div className="text-xs text-foreground/60 uppercase tracking-wider">Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 opacity-60">
          <span className="text-xs text-white uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;