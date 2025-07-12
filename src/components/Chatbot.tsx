import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X, Bot, User, Minimize2, Circle, Copy, DollarSign, Gift, Calendar, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey! 👋 Looking for automation solutions? I can help you get started with free templates or custom setup.",
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
• Customer Service Chatbots ($2,500 setup + $497/mo)
• Lead Generation ($3,500 setup + $797/mo)  
• Social Media Automation ($2,500 setup + $497/mo)
• Email Marketing ($2,500 setup + $497/mo)
• Inventory Management ($3,500 setup + $797/mo)
• Appointment Scheduling ($4,500 setup + $997/mo)

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

  const handleQuickAction = (action: string) => {
    setInputValue(action);
    setTimeout(() => {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: action,
        sender: "user",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);

      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: generateResponse(action),
          sender: "bot",
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 1500);
    }, 100);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Information copied to clipboard",
    });
  };

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => setIsExpanded(true), 50);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  const handleMinimize = () => {
    setIsExpanded(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
        {/* Attention-grabbing text */}
        <div className="bg-gradient-to-r from-[#1a1a2e] to-[#0f0f1e] backdrop-blur-sm border border-[#0066FF]/20 rounded-lg px-4 py-2 shadow-lg transform transition-all duration-500 hover:scale-105">
          <p className="text-sm font-medium text-white">💬 Got automation questions?</p>
          <p className="text-xs text-gray-300">Ask our AI assistant instantly!</p>
        </div>
        
        <Button
          onClick={handleOpen}
          className="h-16 w-16 rounded-full bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0066FF] shadow-lg hover:shadow-xl transition-all duration-300 group relative hover:scale-110"
        >
          <MessageCircle className="h-7 w-7 group-hover:scale-110 transition-transform duration-300 text-white" />
          {/* Smooth pulsing indicator */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#00FF88] rounded-full animate-ping opacity-75"></div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#00FF88] rounded-full"></div>
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Dark overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isExpanded ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Chat Modal */}
      <div className={`fixed z-50 transition-all duration-700 ease-in-out ${
        isExpanded 
          ? 'bottom-6 right-6 w-[500px] h-[700px] md:w-[500px] md:h-[700px]' 
          : 'bottom-6 right-6 w-16 h-16'
      } ${
        // Mobile responsive - full screen on small devices
        isExpanded ? 'max-md:inset-4 max-md:w-auto max-md:h-auto' : ''
      }`}>
        <Card className={`h-full flex flex-col transition-all duration-700 ease-in-out ${
          isExpanded 
            ? 'bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e] border-[#0066FF]/30 shadow-2xl rounded-[20px] scale-100 opacity-100 transform' 
            : 'bg-[#0066FF] scale-0 opacity-0 rounded-full transform'
        }`}>
          {isExpanded && (
            <>
              {/* Enhanced Header */}
              <CardHeader className="flex flex-row items-center justify-between pb-4 bg-gradient-to-r from-[#0066FF]/10 to-[#0052CC]/10 rounded-t-[20px] border-b border-[#0066FF]/20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0066FF] to-[#0052CC] flex items-center justify-center shadow-lg">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">ZeroInput AI Assistant</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Circle className="w-2 h-2 fill-[#00FF88] text-[#00FF88]" />
                      <p className="text-sm text-gray-300">Online - Instant Response</p>
                    </div>
                    <p className="text-xs text-gray-400">Est. response time: ~2 seconds</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleMinimize}
                    className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-white/10 rounded-full"
                  >
                    <Minimize2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClose}
                    className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-white/10 rounded-full"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages area */}
                <ScrollArea className="flex-1 px-6">
                  <div className="py-6 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={message.id}
                      className={`flex items-start space-x-3 animate-fade-in ${
                        message.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {message.sender === "bot" && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0066FF] to-[#0052CC] flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <div className="relative group">
                        <div
                          className={`max-w-[320px] p-4 rounded-2xl text-sm whitespace-pre-line shadow-lg transition-all duration-200 hover:shadow-xl ${
                            message.sender === "user"
                              ? "bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white"
                              : "bg-[#2a2a3e] text-gray-100 border border-gray-600/30"
                          }`}
                        >
                          {message.text}
                        </div>
                        {/* Copy button for bot messages */}
                        {message.sender === "bot" && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(message.text)}
                            className="absolute -top-2 -right-2 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[#2a2a3e] hover:bg-[#3a3a4e] text-gray-400 hover:text-white rounded-full"
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                        )}
                      </div>
                      {message.sender === "user" && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00FF88] to-[#00CC70] flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex items-start space-x-3 animate-fade-in">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0066FF] to-[#0052CC] flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-[#2a2a3e] p-4 rounded-2xl border border-gray-600/30">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>

                {/* Quick Action Buttons */}
                <div className="px-6 py-4 border-t border-gray-600/30">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction("What are your prices?")}
                      className="text-xs bg-[#2a2a3e] border-[#0066FF]/30 text-gray-200 hover:bg-[#0066FF]/20 hover:border-[#0066FF] hover:text-white transition-all duration-200"
                    >
                      <DollarSign className="w-3 h-3 mr-1" />
                      💰 View Pricing
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction("Tell me about free templates")}
                      className="text-xs bg-[#2a2a3e] border-[#0066FF]/30 text-gray-200 hover:bg-[#0066FF]/20 hover:border-[#0066FF] hover:text-white transition-all duration-200"
                    >
                      <Gift className="w-3 h-3 mr-1" />
                      🎁 Free Templates
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction("How do I book a consultation?")}
                      className="text-xs bg-[#2a2a3e] border-[#0066FF]/30 text-gray-200 hover:bg-[#0066FF]/20 hover:border-[#0066FF] hover:text-white transition-all duration-200"
                    >
                      <Calendar className="w-3 h-3 mr-1" />
                      📅 Book Consultation
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction("How does your setup process work?")}
                      className="text-xs bg-[#2a2a3e] border-[#0066FF]/30 text-gray-200 hover:bg-[#0066FF]/20 hover:border-[#0066FF] hover:text-white transition-all duration-200"
                    >
                      <HelpCircle className="w-3 h-3 mr-1" />
                      ❓ How It Works
                    </Button>
                  </div>
                </div>

                {/* Enhanced Input area */}
                <div className="p-6 border-t border-gray-600/30 bg-[#1a1a2e]/50">
                  <form onSubmit={handleSendMessage} className="flex space-x-3">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask about automations, pricing, setup..."
                      className="flex-1 bg-[#2a2a3e] border-gray-600/30 text-white placeholder-gray-400 focus:border-[#0066FF] focus:ring-[#0066FF]/20 rounded-xl"
                      disabled={isTyping}
                    />
                    <Button 
                      type="submit" 
                      disabled={isTyping || !inputValue.trim()}
                      className="bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0066FF] text-white rounded-xl px-6 shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                  
                  {/* New conversation button */}
                  <div className="flex justify-center mt-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setMessages([{
                        id: "1",
                        text: "Hey! 👋 Looking for automation solutions? I can help you get started with free templates or custom setup.",
                        sender: "bot",
                        timestamp: new Date()
                      }])}
                      className="text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded-lg"
                    >
                      🔄 New Conversation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </>
  );
};

export default Chatbot;