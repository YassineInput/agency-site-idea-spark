import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, Target, Zap, Rocket, Clipboard, Gift } from "lucide-react";
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
            <CardTitle className="text-3xl text-primary mb-4 font-bold flex items-center justify-center gap-3">
              <Gift className="w-8 h-8" />
              Free Resources Package
            </CardTitle>
            <div className="text-xl leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                <div className="flex items-center space-x-3">
                  <Clipboard className="w-5 h-5 text-accent" />
                  <span className="text-foreground/80">Automation Implementation Guide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span className="text-foreground/80">ROI Calculator Spreadsheet</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-accent" />
                  <span className="text-foreground/80">Free 30-min Strategy Session</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-foreground/80">Beta Automation Setup</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative z-10 p-8">
            <div className="w-full">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSc4pEtWMjvIKdI4a8uXpkUKwp-FoIOPRAJcWyK07Vxjc3W68g/viewform?embedded=true" 
                width="100%" 
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg"
              >
                Loading…
              </iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeadCapture;