import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Download, Play, CheckCircle, Mail, MessageCircle, Calendar, Package, Target, Share2 } from "lucide-react";
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
      features: ["24/7 availability", "Common FAQ responses", "Escalation to human agents", "Multi-platform support"],
      downloadSize: "2.1 MB"
    },
    {
      id: "lead-capture",
      title: "Lead Generation Funnel",
      description: "Capture, qualify, and nurture leads automatically from multiple sources",
      icon: Target,
      gradient: "from-purple-500 to-pink-600",
      demoType: "form",
      features: ["Multi-source capture", "Lead scoring", "Auto follow-up sequences", "CRM integration"],
      downloadSize: "3.4 MB"
    },
    {
      id: "social-media",
      title: "Social Media Scheduler",
      description: "Schedule and auto-post content across all your social platforms",
      icon: Share2,
      gradient: "from-pink-500 to-red-600",
      demoType: "scheduler",
      features: ["Multi-platform posting", "Content queues", "Engagement tracking", "Best time optimization"],
      downloadSize: "1.8 MB"
    },
    {
      id: "email-marketing",
      title: "Email Campaign Automation",
      description: "Personalized email sequences that convert prospects into customers",
      icon: Mail,
      gradient: "from-red-500 to-orange-600",
      demoType: "email",
      features: ["Drip campaigns", "Behavioral triggers", "A/B testing", "Analytics dashboard"],
      downloadSize: "2.7 MB"
    },
    {
      id: "inventory",
      title: "Inventory Management",
      description: "Auto-track stock levels, reorder supplies, and manage suppliers",
      icon: Package,
      gradient: "from-orange-500 to-yellow-600",
      demoType: "inventory",
      features: ["Real-time tracking", "Auto reordering", "Supplier notifications", "Low stock alerts"],
      downloadSize: "4.2 MB"
    },
    {
      id: "appointment",
      title: "Appointment Scheduler",
      description: "Automated booking system with calendar integration and reminders",
      icon: Calendar,
      gradient: "from-yellow-500 to-green-600",
      demoType: "calendar",
      features: ["Calendar sync", "Automated reminders", "Availability management", "Booking confirmations"],
      downloadSize: "2.9 MB"
    }
  ];

  const handleDownload = (automationId: string, title: string) => {
    // Create a mock JSON workflow file
    const workflowData = {
      name: title,
      nodes: [
        {
          parameters: {},
          name: "Start",
          type: "n8n-nodes-base.start",
          typeVersion: 1,
          position: [250, 300]
        },
        {
          parameters: {
            notice: `This is a template for ${title}. Customize the nodes according to your needs.`
          },
          name: "Template Notice",
          type: "n8n-nodes-base.set",
          typeVersion: 1,
          position: [450, 300]
        }
      ],
      connections: {
        "Start": {
          "main": [
            [
              {
                "node": "Template Notice",
                "type": "main",
                "index": 0
              }
            ]
          ]
        }
      },
      createdAt: new Date().toISOString(),
      id: automationId,
      tags: ["free", "template", "automation"]
    };

    const blob = new Blob([JSON.stringify(workflowData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${automationId}-workflow.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast({
      title: "Download Started!",
      description: `${title} n8n workflow template downloaded successfully.`,
    });
  };

  const runDemo = (automationId: string, demoType: string) => {
    setActiveDemo(automationId);
    
    // Simulate demo execution
    setTimeout(() => {
      toast({
        title: "Demo Complete!",
        description: "This is a preview of how the automation would work in your n8n instance.",
      });
      setActiveDemo(null);
    }, 2000);
  };

  const renderDemo = (automation: any) => {
    if (activeDemo !== automation.id) return null;

    const demoContent = {
      chat: (
        <div className="bg-background/50 rounded-lg p-4 border border-primary/20">
          <div className="space-y-3">
            <div className="flex justify-end">
              <div className="bg-primary/20 rounded-lg p-3 max-w-xs">
                <p className="text-sm">Hi, what are your business hours?</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-card rounded-lg p-3 max-w-xs border border-border/50">
                <p className="text-sm">We're open Monday-Friday 9AM-6PM, and Saturday 10AM-4PM. Is there anything specific I can help you with?</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Auto-response sent in 0.3s</span>
            </div>
          </div>
        </div>
      ),
      form: (
        <div className="bg-background/50 rounded-lg p-4 border border-primary/20">
          <div className="space-y-3">
            <Input placeholder="Enter email address" className="bg-background/50" />
            <div className="flex items-center space-x-2 text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Lead captured → CRM updated → Welcome email queued</span>
            </div>
            <Badge variant="secondary" className="text-xs">Score: 85/100 (Hot Lead)</Badge>
          </div>
        </div>
      ),
      scheduler: (
        <div className="bg-background/50 rounded-lg p-4 border border-primary/20">
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-blue-500/20 p-2 rounded text-center">Facebook</div>
              <div className="bg-pink-500/20 p-2 rounded text-center">Instagram</div>
              <div className="bg-blue-400/20 p-2 rounded text-center">LinkedIn</div>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Posted to 3 platforms at optimal time</span>
            </div>
          </div>
        </div>
      ),
      email: (
        <div className="bg-background/50 rounded-lg p-4 border border-primary/20">
          <div className="space-y-3">
            <div className="border border-border/50 rounded p-3">
              <p className="text-sm font-medium">Welcome Email Sequence</p>
              <p className="text-xs text-foreground/70">Day 1: Welcome + Free Guide</p>
              <p className="text-xs text-foreground/70">Day 3: Success Stories</p>
              <p className="text-xs text-foreground/70">Day 7: Special Offer</p>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Sequence activated for 47 new subscribers</span>
            </div>
          </div>
        </div>
      ),
      inventory: (
        <div className="bg-background/50 rounded-lg p-4 border border-primary/20">
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex justify-between">
                <span>Widget A:</span>
                <Badge variant="destructive" className="text-xs">Low (5)</Badge>
              </div>
              <div className="flex justify-between">
                <span>Widget B:</span>
                <Badge variant="secondary" className="text-xs">OK (150)</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Reorder triggered → Supplier notified</span>
            </div>
          </div>
        </div>
      ),
      calendar: (
        <div className="bg-background/50 rounded-lg p-4 border border-primary/20">
          <div className="space-y-3">
            <div className="border border-border/50 rounded p-3">
              <p className="text-sm font-medium">New Booking</p>
              <p className="text-xs text-foreground/70">John Doe - Strategy Call</p>
              <p className="text-xs text-foreground/70">Tomorrow 2:00 PM</p>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Calendar updated → Reminder sent → Zoom link created</span>
            </div>
          </div>
        </div>
      )
    };

    return (
      <div className="mt-4 animate-fade-in">
        <h4 className="text-sm font-medium mb-2 text-primary">Live Demo Preview:</h4>
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
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                    {automation.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/70 leading-relaxed">
                    {automation.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 pb-8">
                  <div className="space-y-4">
                    {/* Features */}
                    <div className="space-y-2">
                      {automation.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Demo Section */}
                    {renderDemo(automation)}
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-2 pt-4">
                      <Button
                        onClick={() => runDemo(automation.id, automation.demoType)}
                        disabled={activeDemo === automation.id}
                        className="flex-1 bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                        size="sm"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        {activeDemo === automation.id ? 'Running...' : 'Demo'}
                      </Button>
                      <Button
                        onClick={() => handleDownload(automation.id, automation.title)}
                        className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground"
                        size="sm"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                    
                    {/* File size */}
                    <div className="text-center">
                      <Badge variant="outline" className="text-xs">
                        {automation.downloadSize}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
          <p className="text-xl text-foreground/70 mb-6">Need custom automation for your specific business?</p>
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30 text-primary font-semibold text-lg hover:from-primary/30 hover:to-accent/30 transition-all duration-300 cursor-pointer group">
            <span>Get Personalized Automation</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeAutomations;