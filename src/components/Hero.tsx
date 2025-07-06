import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
            {/* Left side - Content */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Blue tag */}
              <div className="inline-flex items-center">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground">
                  BUSINESS AUTOMATION AGENCY
                </span>
              </div>
              
              {/* Main heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                We build automation
                <br />
                <span className="text-primary">systems.</span>
              </h1>
              
              {/* Description */}
              <p className="text-xl text-foreground/70 leading-relaxed max-w-lg">
                Tailored for fast-growing businesses to drive efficiency and performance with zero input required.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="px-8 py-4 text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Get free automation
                </Button>
                <Button 
                  size="lg" 
                  variant="ghost"
                  className="px-8 py-4 text-lg text-foreground hover:text-primary"
                >
                  View case studies →
                </Button>
              </div>
            </div>
            
            {/* Right side - 3D Geometric Shape */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                {/* Main 3D cube structure */}
                <div className="relative w-full h-full transform rotate-12 hover:rotate-6 transition-transform duration-500">
                  {/* Front face */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-3xl transform translate-z-0"></div>
                  
                  {/* Top face */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70 rounded-3xl transform -translate-y-8 -translate-x-8 skew-x-12 skew-y-12"></div>
                  
                  {/* Right face */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-primary/50 rounded-3xl transform translate-x-8 translate-y-8 -skew-x-12 -skew-y-12"></div>
                  
                  {/* Additional geometric elements */}
                  <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-accent rounded-2xl transform rotate-45 animate-float"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-accent/80 rounded-xl transform -rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl transform scale-110"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;