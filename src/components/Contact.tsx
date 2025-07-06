import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Briefcase, Zap, Target, Rocket, Mail, Smartphone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: ""
  });
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours with a custom automation solution.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      business: "",
      message: ""
    });
  };

  return (
    <section id="contact-section" className="py-32 px-4 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-foreground">Get Your</span>
            <br />
            <span className="gradient-text">Custom Quote</span>
          </h2>
          <p className="text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            Tell us about your business needs and we'll create a 
            <span className="text-primary font-semibold"> custom automation solution</span> for you
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8 rounded-full"></div>
        </div>

        <Card className={`border-primary/30 glow-shadow bg-card/80 backdrop-blur-sm relative overflow-hidden transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          {/* Card background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"></div>
          
          {/* Animated border */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_100%] p-[1px] animate-shimmer opacity-50">
            <div className="w-full h-full bg-card rounded-lg"></div>
          </div>
          
          <CardHeader className="relative z-10 text-center pt-12">
            <CardTitle className="text-3xl text-primary mb-4 font-bold flex items-center gap-3">
              <Briefcase className="w-8 h-8" />
              Custom Automation Quote
            </CardTitle>
            <CardDescription className="text-xl">
              <div className="flex flex-wrap justify-center gap-8 text-foreground/80">
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-bold text-green-500">FREE</span>
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>24-hour response</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-accent" />
                  <span>Tailored solutions</span>
                </div>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10 p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="contact-name" className="text-lg font-medium">Full Name *</Label>
                  <Input
                    id="contact-name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-14 text-lg border-border/50 focus:border-primary transition-colors bg-background/50"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="contact-email" className="text-lg font-medium">Business Email *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="your@business.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-14 text-lg border-border/50 focus:border-primary transition-colors bg-background/50"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="contact-business" className="text-lg font-medium">Business Name</Label>
                <Input
                  id="contact-business"
                  type="text"
                  placeholder="Your business name (optional)"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="h-14 text-lg border-border/50 focus:border-primary transition-colors bg-background/50"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="contact-message" className="text-lg font-medium">Project Details *</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Describe your business and what automations you need. The more details you provide, the better we can help you."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="text-lg border-border/50 focus:border-primary transition-colors bg-background/50"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-xl py-8 bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent transition-all duration-300 glow-accent transform hover:scale-[1.02] hover:shadow-2xl group relative overflow-hidden font-semibold"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Get My Custom Quote
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className={`mt-16 text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <p className="text-xl text-foreground/70 mb-8">
            Or contact us directly:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-foreground bg-card/50 p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors duration-300 group">
              <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg">hello@zeroinputai.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-foreground bg-card/50 p-6 rounded-xl border border-border/50 hover:border-accent/50 transition-colors duration-300 group">
              <Smartphone className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg">Available 24/7 for urgent automations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;