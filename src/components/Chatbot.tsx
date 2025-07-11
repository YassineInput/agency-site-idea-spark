import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm your ZeroInputAI assistant. I can help you learn about our automation services, pricing, and setup process. What would you like to know?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Knowledge base for the chatbot
  const knowledgeBase = {
    services: [
      {
        name: "Customer Service Chatbot",
        description: "24/7 automated customer support with FAQ responses, escalation to human agents, and multi-platform support",
        price: "$297/month",
        setup: "24 hours",
        features: ["24/7 availability", "FAQ responses", "Human escalation", "Multi-platform support"]
      },
      {
        name: "Lead Generation Automation",
        description: "Capture, qualify, and nurture leads automatically from multiple sources",
        price: "$397/month",
        setup: "24 hours", 
        features: ["Multi-source capture", "Lead scoring", "Auto follow-up", "CRM integration"]
      },
      {
        name: "Social Media Automation",
        description: "Schedule posts, respond to comments, and grow your social presence automatically",
        price: "$197/month",
        setup: "24 hours",
        features: ["Multi-platform posting", "Content queues", "Engagement tracking", "Optimal timing"]
      },
      {
        name: "Email Marketing Automation", 
        description: "Personalized email sequences with behavioral triggers and A/B testing",
        price: "$347/month",
        setup: "24 hours",
        features: ["Drip campaigns", "Behavioral triggers", "A/B testing", "Analytics dashboard"]
      },
      {
        name: "Inventory Management",
        description: "Real-time stock tracking with automatic reordering and supplier communication",
        price: "$447/month", 
        setup: "24 hours",
        features: ["Real-time tracking", "Auto reordering", "Supplier notifications", "Low stock alerts"]
      },
      {
        name: "Appointment Scheduling",
        description: "Automated booking system with calendar integration and reminders",
        price: "$247/month",
        setup: "24 hours", 
        features: ["Calendar sync", "Automated reminders", "Availability management", "Booking confirmations"]
      }
    ],
    generalInfo: {
      setupTime: "24 hours",
      customAutomations: "Any automation that is possible to make, we can offer",
      industries: "Any business that wants any type of automation can get it",
      support: "Monthly maintenance fee covers apps and tokens, credits used to run automations, and error handling",
      setupOptions: "You can fill out a form with instructions to get API keys yourself, or we can handle it for an additional fee"
    }
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Greeting responses
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return "Hello! I'm here to help you learn about ZeroInputAI's automation services. We offer 6 main automation types, custom solutions, and 24-hour setup. What specific automation are you interested in?";
    }

    // Pricing questions
    if (message.includes("price") || message.includes("cost") || message.includes("pricing") || message.includes("how much")) {
      return `Great question! We offer free automation templates (JSON files) that you can implement yourself, OR we can professionally set them up and manage them for you.

Here's our pricing for professional implementation:

🤖 Customer Service Chatbot
Setup: $2,500 (one-time)
Management: $497/month
Includes 24/7 response system, FAQ training, escalation rules

🎯 Lead Generation Funnel
Setup: $3,500 (one-time)
Management: $797/month
Includes multi-channel capture, lead scoring, CRM integration

📱 Social Media Scheduler
Setup: $2,500 (one-time)
Management: $497/month
Includes multi-platform posting, content calendar, analytics

📧 Email Campaign Automation
Setup: $2,500 (one-time)
Management: $497/month
Includes drip campaigns, segmentation, A/B testing

📦 Inventory Management
Setup: $3,500 (one-time)
Management: $797/month
Includes stock tracking, reorder automation, supplier management

📅 Appointment Scheduler
Setup: $4,500 (one-time)
Management: $997/month
Includes calendar sync, payment processing, client portal

💰 Save 20% on setup fees when purchasing 3+ automations!
All plans include ongoing optimization and support. No contracts - cancel anytime with 30-day notice.
Want to try before you buy? Get the free templates first!`;
    }

    // Management questions
    if (message.includes("what's included in management") || message.includes("whats included in management") || message.includes("management include")) {
      return "Monthly management includes system monitoring, performance optimization, troubleshooting, updates, and priority support. We ensure your automation runs smoothly 24/7.";
    }

    // Setup only questions
    if (message.includes("setup without management") || message.includes("just setup") || message.includes("setup only") || message.includes("no management")) {
      return "Yes! You can purchase setup-only. However, most clients find the monthly management valuable for ongoing optimization and support.";
    }

    // Setup time questions
    if (message.includes("how long does setup take") || message.includes("setup time") || message.includes("how long setup")) {
      return "Setup typically takes 3-5 business days after receiving your requirements. Complex implementations may take up to 7 days.";
    }

    // Setup and implementation questions
    if (message.includes("setup") || message.includes("implementation") || message.includes("how long") || message.includes("install")) {
      return `Setup is incredibly fast - just 24 hours! Here's how it works:

1. ⏱️ **24-hour turnaround** from order to live automation
2. 📋 **Two setup options:**
   - Fill out our form with API keys/credentials (included)
   - Let us handle everything for you (additional fee)
3. 🔧 **We handle all technical setup**
4. ✅ **Testing and go-live within 24 hours**

No technical knowledge required on your end. Which automation are you considering?`;
    }

    // Service-specific questions
    for (const service of knowledgeBase.services) {
      if (message.includes(service.name.toLowerCase()) || 
          message.includes(service.name.split(" ")[0].toLowerCase())) {
        return `**${service.name}** - ${service.price}

${service.description}

✨ **Key Features:**
${service.features.map(feature => `• ${feature}`).join('\n')}

⚡ **Setup:** ${service.setup}
🔧 **Maintenance:** Monthly fee included

Ready to get started? I can connect you with our team for a free consultation!`;
      }
    }

    // Custom automation questions
    if (message.includes("custom") || message.includes("specific") || message.includes("unique")) {
      return `We specialize in custom automations! ${knowledgeBase.generalInfo.customAutomations}

Some examples of custom automations we've built:
• CRM data synchronization
• Invoice generation and processing  
• Report automation and distribution
• API integrations between platforms
• Workflow approvals and notifications

Custom pricing depends on complexity. Would you like to schedule a consultation to discuss your specific needs?`;
    }

    // Industry questions
    if (message.includes("industry") || message.includes("business type") || message.includes("who")) {
      return `${knowledgeBase.generalInfo.industries}

We've successfully automated processes for:
• E-commerce stores
• Service businesses  
• SaaS companies
• Healthcare practices
• Real estate agencies
• Manufacturing companies
• And many more!

Every business has unique automation opportunities. What type of business are you in?`;
    }

    // Support and maintenance questions  
    if (message.includes("support") || message.includes("maintenance") || message.includes("after") || message.includes("ongoing")) {
      return `Our ongoing support includes:

🔧 **Monthly Maintenance Fee Covers:**
• Apps and token management
• Credits for automation runs
• Error handling and troubleshooting
• Performance monitoring
• Updates and optimizations

📞 **Support Options:**
• Priority email support
• Monthly check-ins
• Emergency troubleshooting
• Performance reports

We ensure your automations run smoothly 24/7. Any specific support questions?`;
    }

    // Contact and consultation questions
    if (message.includes("contact") || message.includes("consultation") || message.includes("talk") || message.includes("call")) {
      return `I'd love to connect you with our team! Here's how to get started:

📞 **Free Consultation Options:**
• Schedule a strategy call to discuss your needs
• Get a custom automation quote
• See live demos of our solutions

⚡ **Next Steps:**
1. Tell me more about your business needs
2. I'll provide specific recommendations  
3. Schedule your free consultation call

What automation challenges is your business facing right now?`;
    }

    // Default response for unmatched queries
    return `I'd be happy to help! I can provide information about:

🤖 **Our 6 Main Automations:**
• Customer Service Chatbots ($297/mo)
• Lead Generation ($397/mo)  
• Social Media Automation ($197/mo)
• Email Marketing ($347/mo)
• Inventory Management ($447/mo)
• Appointment Scheduling ($247/mo)

💡 **General Info:**
• Custom automation solutions
• 24-hour setup process
• Pricing and packages
• Industry compatibility

What specific area interests you most?`;
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputValue),
        sender: "bot", 
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    // Auto-submit the question
    setTimeout(() => {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: question,
        sender: "user",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);

      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: generateResponse(question),
          sender: "bot",
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 1500);
    }, 100);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
        {/* Attention-grabbing text */}
        <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2 shadow-lg animate-pulse">
          <p className="text-sm font-medium text-foreground">💬 Got automation questions?</p>
          <p className="text-xs text-muted-foreground">Ask our AI assistant instantly!</p>
        </div>
        
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 group relative"
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          {/* Pulsing indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full"></div>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
      <Card className="h-[500px] flex flex-col bg-card/95 backdrop-blur-sm border-border/50 shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between pb-4 bg-primary/5 rounded-t-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">ZeroInputAI Assistant</CardTitle>
              <p className="text-sm text-muted-foreground">Always here to help</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender === "bot" && (
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm whitespace-pre-line ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.text}
                </div>
                {message.sender === "user" && (
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-accent-foreground" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick questions */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickQuestion("What are your prices?")}
                  className="text-xs"
                >
                  Pricing
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickQuestion("How long is setup?")}
                  className="text-xs"
                >
                  Setup Time
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickQuestion("Tell me about lead generation")}
                  className="text-xs"
                >
                  Lead Gen
                </Button>
              </div>
            </div>
          )}

          {/* Input area */}
          <div className="p-4 border-t border-border/50">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about our automations..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button type="submit" size="sm" disabled={isTyping || !inputValue.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chatbot;