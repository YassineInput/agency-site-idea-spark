import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const LeadCapture = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    automationType: ""
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

    const element = document.getElementById('lead-capture-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.business || !formData.automationType) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to receive your free automation guide.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend/email service
    toast({
      title: "Success!",
      description: "Your free automation guide has been sent to your email. Check your inbox!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      business: "",
      automationType: ""
    });
  };

  const automationTypes = [
    "Customer Service Automation",
    "Lead Generation Automation", 
    "Social Media Automation",
    "Email Marketing Automation",
    "Inventory Management",
    "Appointment Scheduling",
    "Other"
  ];

  return (
    <section id="lead-capture-section" className="py-32 px-4 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Get Your Free</span>
            <br />
            <span className="text-foreground">Automation Guide</span>
          </h2>
          <p className="text-2xl text-foreground/70 max-w-3xl mx-auto">
            Download our comprehensive automation guide and get started with your first 
            <span className="text-primary font-semibold"> free automation</span>
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8 rounded-full"></div>
        </div>

        <Card className={`border-primary/30 glow-shadow bg-card/80 backdrop-blur-sm relative overflow-hidden transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          {/* Card background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
          
          {/* Animated border */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] p-[1px] animate-shimmer opacity-50">
            <div className="w-full h-full bg-card rounded-lg"></div>
          </div>
          
          <CardHeader className="relative z-10 text-center pt-12">
            <CardTitle className="text-3xl text-primary mb-4 font-bold">
              🎁 Free Resources Package
            </CardTitle>
            <CardDescription className="text-xl leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📋</span>
                  <span className="text-foreground/80">Automation Implementation Guide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📊</span>
                  <span className="text-foreground/80">ROI Calculator Spreadsheet</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🎯</span>
                  <span className="text-foreground/80">Free 30-min Strategy Session</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">⚡</span>
                  <span className="text-foreground/80">Beta Automation Setup</span>
                </div>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10 p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-lg font-medium">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-14 text-lg border-border/50 focus:border-primary transition-colors bg-background/50"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-lg font-medium">Business Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@business.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-14 text-lg border-border/50 focus:border-primary transition-colors bg-background/50"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="business" className="text-lg font-medium">Business Name</Label>
                <Input
                  id="business"
                  type="text"
                  placeholder="Your business name"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="h-14 text-lg border-border/50 focus:border-primary transition-colors bg-background/50"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="automation" className="text-lg font-medium">Primary Automation Interest</Label>
                <Select value={formData.automationType} onValueChange={(value) => setFormData({ ...formData, automationType: value })}>
                  <SelectTrigger className="h-14 text-lg border-border/50 focus:border-primary transition-colors bg-background/50">
                    <SelectValue placeholder="Select the automation you're most interested in" />
                  </SelectTrigger>
                  <SelectContent>
                    {automationTypes.map((type) => (
                      <SelectItem key={type} value={type} className="text-lg py-3">
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-xl py-8 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 glow-primary transform hover:scale-[1.02] hover:shadow-2xl group relative overflow-hidden font-semibold"
              >
                <span className="relative z-10">🚀 Send Me The Free Resources</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeadCapture;