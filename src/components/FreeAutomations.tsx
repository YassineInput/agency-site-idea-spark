import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Play, CheckCircle, Mail, MessageCircle, Calendar, Package, Target, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FreeAutomations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [demoInputs, setDemoInputs] = useState<{ [key: string]: string }>({});
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

    const element = document.getElementById('free-automations-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const automations = [
    {
      id: "customer-service",
      title: "Customer Service Chatbot",
      description: "Automatically respond to common customer inquiries 24/7",
      icon: MessageCircle,
      gradient: "from-blue-500 to-purple-600",
      demoType: "chat",
      features: ["24/7 availability", "Common FAQ responses", "Escalation to human agents", "Multi-platform support"]
    },
    {
      id: "lead-capture",
      title: "Lead Generation Funnel",
      description: "Capture, qualify, and nurture leads automatically from multiple sources",
      icon: Target,
      gradient: "from-purple-500 to-pink-600",
      demoType: "form",
      features: ["Multi-source capture", "Lead scoring", "Auto follow-up sequences", "CRM integration"]
    },
    {
      id: "social-media",
      title: "Social Media Scheduler",
      description: "Schedule and auto-post content across all your social platforms",
      icon: Share2,
      gradient: "from-pink-500 to-red-600",
      demoType: "scheduler",
      features: ["Multi-platform posting", "Content queues", "Engagement tracking", "Best time optimization"]
    },
    {
      id: "email-marketing",
      title: "Email Campaign Automation",
      description: "Personalized email sequences that convert prospects into customers",
      icon: Mail,
      gradient: "from-red-500 to-orange-600",
      demoType: "email",
      features: ["Drip campaigns", "Behavioral triggers", "A/B testing", "Analytics dashboard"]
    },
    {
      id: "inventory",
      title: "Inventory Management",
      description: "Auto-track stock levels, reorder supplies, and manage suppliers",
      icon: Package,
      gradient: "from-orange-500 to-yellow-600",
      demoType: "inventory",
      features: ["Real-time tracking", "Auto reordering", "Supplier notifications", "Low stock alerts"]
    },
    {
      id: "appointment",
      title: "Appointment Scheduler",
      description: "Automated booking system with calendar integration and reminders",
      icon: Calendar,
      gradient: "from-yellow-500 to-green-600",
      demoType: "calendar",
      features: ["Calendar sync", "Automated reminders", "Availability management", "Booking confirmations"]
    }
  ];


  const runDemo = (automationId: string, demoType: string) => {
    if (activeDemo === automationId) {
      // If demo is already active, hide it
      setActiveDemo(null);
    } else {
      // Show the demo
      setActiveDemo(automationId);
      
      // Show a toast notification
      toast({
        title: "Demo Active!",
        description: "This is a preview of how the automation would work in your n8n instance. Click Demo again to hide.",
      });
    }
  };

  const renderDemo = (automation: any) => {
    if (activeDemo !== automation.id) return null;

    const handleChatSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const input = demoInputs[automation.id];
      if (!input) return;
      
      // Simulate AI response
      setTimeout(() => {
        toast({
          title: "AI Response Generated",
          description: "In a real setup, this would connect to your knowledge base and provide instant responses.",
        });
      }, 1000);
      
      setDemoInputs({ ...demoInputs, [automation.id]: "" });
    };

    const handleLeadCapture = (e: React.FormEvent) => {
      e.preventDefault();
      const email = demoInputs[automation.id];
      if (!email) return;
      
      toast({
        title: "Lead Captured!",
        description: `${email} has been scored and added to your CRM with automated follow-up sequence.`,
      });
      setDemoInputs({ ...demoInputs, [automation.id]: "" });
    };

    const handleSchedulePost = () => {
      toast({
        title: "Post Scheduled!",
        description: "Your content has been queued for optimal posting times across all platforms.",
      });
    };

    const handleEmailCampaign = () => {
      toast({
        title: "Campaign Activated!",
        description: "Email sequence is now running with behavioral triggers and A/B testing.",
      });
    };

    const handleInventoryAlert = () => {
      toast({
        title: "Reorder Triggered!",
        description: "Suppliers have been notified and purchase orders generated automatically.",
      });
    };

    const handleBookAppointment = () => {
      toast({
        title: "Appointment Booked!",
        description: "Calendar updated, confirmation sent, and reminder scheduled.",
      });
    };

    const demoContent = {
      chat: (
        <div className="bg-background/50 rounded-lg p-4 border border-primary/20">
          <div className="space-y-4">
            <div className="bg-card/50 rounded-lg p-3 min-h-[120px]">
              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className="bg-primary/20 rounded-lg p-2 max-w-xs text-sm">
                    What are your business hours?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-muted/30 rounded-lg p-2 max-w-xs border border-border/30 text-sm">
                    We're open Monday-Friday 9AM-6PM, Saturday 10AM-4PM. How can I help you today?
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleChatSubmit} className="flex space-x-2">
              <Input
                placeholder="Ask a question to test the AI..."
                value={demoInputs[automation.id] || ""}
                onChange={(e) => setDemoInputs({ ...demoInputs, [automation.id]: e.target.value })}
                className="bg-background/50 border-primary/20"
              />
              <Button type="submit" size="sm" className="bg-primary hover:bg-primary/90">
                Send
              </Button>
            </form>
          </div>
        </div>
      ),
      form: (
        <div className="bg-background/50 rounded-lg p-4 border border-primary/20">
          <div className="space-y-4">
            <div className="bg-card/50 rounded-lg p-3">
              <h5 className="text-sm font-medium mb-2">Lead Scoring Preview</h5>
              <div className="text-xs space-y-1">
                <div className="flex justify-between">
                  <span>Email Domain Score:</span>
                  <Badge variant="secondary" className="text-xs">+25</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Engagement Level:</span>
                  <Badge variant="secondary" className="text-xs">+40</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Source Quality:</span>
                  <Badge variant="secondary" className="text-xs">+20</Badge>
                </div>
              </div>
            </div>
            <form onSubmit={handleLeadCapture} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter email to test lead capture..."
                value={demoInputs[automation.id] || ""}
                onChange={(e) => setDemoInputs({ ...demoInputs, [automation.id]: e.target.value })}
                className="bg-background/50 border-primary/20"
              />
              <Button type="submit" size="sm" className="w-full bg-primary hover:bg-primary/90">
                Capture & Score Lead
              </Button>
            </form>
          </div>
        </div>
      ),
      scheduler: (
        <div className="bg-background/50 rounded-lg p-4 border border-primary/20">
          <div className="space-y-4">
            <div className="bg-card/50 rounded-lg p-3">
              <h5 className="text-sm font-medium mb-3">Schedule New Post</h5>
              <textarea
                placeholder="What would you like to post?"
                className="w-full h-16 text-xs bg-background/50 border border-border/30 rounded p-2 resize-none"
                defaultValue="🚀 Exciting news! Our new automation tools are now live..."
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-blue-500/20 p-2 rounded text-center text-xs cursor-pointer hover:bg-blue-500/30 transition-colors">
                Facebook
              </div>
              <div className="bg-pink-500/20 p-2 rounded text-center text-xs cursor-pointer hover:bg-pink-500/30 transition-colors">
                Instagram
              </div>
              <div className="bg-blue-400/20 p-2 rounded text-center text-xs cursor-pointer hover:bg-blue-400/30 transition-colors">
                LinkedIn
              </div>
            </div>
            <Button onClick={handleSchedulePost} size="sm" className="w-full bg-primary hover:bg-primary/90">
              Schedule for Optimal Times
            </Button>
          </div>
        </div>
      ),
      email: (
        <div className="bg-background/50 rounded-lg p-4 border border-primary/20">
          <div className="space-y-4">
            <div className="bg-card/50 rounded-lg p-3">
              <h5 className="text-sm font-medium mb-2">Email Sequence Builder</h5>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 bg-background/30 rounded border border-border/20">
                  <span>Day 1: Welcome Email</span>
                  <Badge variant="outline" className="text-xs">98% Open Rate</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-background/30 rounded border border-border/20">
                  <span>Day 3: Value Content</span>
                  <Badge variant="outline" className="text-xs">87% Open Rate</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-background/30 rounded border border-border/20">
                  <span>Day 7: Special Offer</span>
                  <Badge variant="outline" className="text-xs">15% Conversion</Badge>
                </div>
              </div>
            </div>
            <Button onClick={handleEmailCampaign} size="sm" className="w-full bg-primary hover:bg-primary/90">
              Activate Campaign
            </Button>
          </div>
        </div>
      ),
      inventory: (
        <div className="bg-background/50 rounded-lg p-4 border border-primary/20">
          <div className="space-y-4">
            <div className="bg-card/50 rounded-lg p-3">
              <h5 className="text-sm font-medium mb-3">Live Inventory Status</h5>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-background/30 rounded">
                  <span className="text-sm">Widget A</span>
                  <div className="flex items-center space-x-2">
                    <Badge variant="destructive" className="text-xs">5 units</Badge>
                    <span className="text-xs text-red-400">⚠️ Low Stock</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 bg-background/30 rounded">
                  <span className="text-sm">Widget B</span>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">150 units</Badge>
                    <span className="text-xs text-green-400">✅ In Stock</span>
                  </div>
                </div>
              </div>
            </div>
            <Button onClick={handleInventoryAlert} size="sm" className="w-full bg-primary hover:bg-primary/90">
              Trigger Auto Reorder
            </Button>
          </div>
        </div>
      ),
      calendar: (
        <div className="bg-background/50 rounded-lg p-4 border border-primary/20">
          <div className="space-y-4">
            <div className="bg-card/50 rounded-lg p-3">
              <h5 className="text-sm font-medium mb-3">Book Appointment</h5>
              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="text-xs bg-background/50 border border-border/30 rounded p-2"
                    defaultValue="John Doe"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="text-xs bg-background/50 border border-border/30 rounded p-2"
                    defaultValue="john@example.com"
                  />
                </div>
                <select className="w-full text-xs bg-background/50 border border-border/30 rounded p-2">
                  <option>Strategy Call - 30 min</option>
                  <option>Demo Session - 45 min</option>
                  <option>Consultation - 60 min</option>
                </select>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    className="text-xs bg-background/50 border border-border/30 rounded p-2"
                    defaultValue={new Date().toISOString().split('T')[0]}
                  />
                  <input
                    type="time"
                    className="text-xs bg-background/50 border border-border/30 rounded p-2"
                    defaultValue="14:00"
                  />
                </div>
              </div>
            </div>
            <Button onClick={handleBookAppointment} size="sm" className="w-full bg-primary hover:bg-primary/90">
              Book Appointment
            </Button>
          </div>
        </div>
      )
    };

    return (
      <div className="mt-4 animate-fade-in">
        <h4 className="text-sm font-medium mb-3 text-primary">🚀 Try It Live:</h4>
        {demoContent[automation.demoType as keyof typeof demoContent]}
      </div>
    );
  };

  return (
    <section id="free-automations-section" className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-foreground">Free</span>
            <br />
            <span className="gradient-text">n8n Automation Templates</span>
          </h2>
          <p className="text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            Download ready-to-use n8n workflows and see them in action with our 
            <span className="text-primary font-semibold"> interactive demos</span>
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automations.map((automation, index) => {
            const IconComponent = automation.icon;
            return (
              <Card 
                key={automation.id} 
                className={`relative border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 group overflow-hidden glow-shadow hover:glow-primary transform hover:scale-105 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
              >
                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] p-[1px] animate-shimmer opacity-50">
                  <div className="w-full h-full bg-card rounded-lg"></div>
                </div>
                
                <CardHeader className="relative z-10 text-center pt-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 border border-primary/20">
                      <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Title Frame */}
                  <div className="bg-background/30 rounded-lg p-4 mb-4 border border-border/30">
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {automation.title}
                    </CardTitle>
                  </div>
                  
                  {/* Description Frame */}
                  <div className="bg-card/30 rounded-lg p-4 border border-border/20">
                    <CardDescription className="text-foreground/80 leading-relaxed">
                      {automation.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 pb-8">
                  <div className="space-y-4">
                    {/* Features Frame */}
                    <div className="bg-muted/20 rounded-lg p-4 border border-border/30">
                      <h4 className="text-sm font-semibold text-primary mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {automation.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-foreground/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Demo Section */}
                    {renderDemo(automation)}
                    
                    {/* Action Button */}
                    <div className="pt-4">
                      <Button
                        onClick={() => runDemo(automation.id, automation.demoType)}
                        className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground"
                        size="lg"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        {activeDemo === automation.id ? 'Hide Demo' : 'Try Interactive Demo'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
          <p className="text-xl text-foreground/70 mb-6">Ready to get your free automation resources?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => {
                const element = document.getElementById('lead-capture-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-primary-foreground font-semibold text-lg hover:from-accent hover:to-primary transition-all duration-300 group"
            >
              <span>Get Free Automation Resources</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <span className="text-foreground/50">or</span>
            <button 
              onClick={() => {
                const element = document.getElementById('contact-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30 text-primary font-semibold text-lg hover:from-primary/30 hover:to-accent/30 transition-all duration-300 group"
            >
              <span>Get Personalized Automation</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeAutomations;