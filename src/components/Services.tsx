import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Customer Service Automation",
      description: "Automated chatbots and response systems to handle customer inquiries 24/7",
      icon: "🤖",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Lead Generation Automation",
      description: "Capture, qualify, and nurture leads automatically from your website and social media",
      icon: "🎯",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Social Media Automation",
      description: "Schedule posts, respond to comments, and grow your social presence automatically",
      icon: "📱",
      gradient: "from-pink-500 to-red-600"
    },
    {
      title: "Email Marketing Automation",
      description: "Personalized email sequences that convert prospects into paying customers",
      icon: "📧",
      gradient: "from-red-500 to-orange-600"
    },
    {
      title: "Inventory Management",
      description: "Automatic stock tracking, reordering, and supplier communication",
      icon: "📦",
      gradient: "from-orange-500 to-yellow-600"
    },
    {
      title: "Appointment Scheduling",
      description: "Automated booking system with calendar integration and reminders",
      icon: "📅",
      gradient: "from-yellow-500 to-green-600"
    }
  ];

  return (
    <section id="services-section" className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Business Automations</span>
            <br />
            <span className="text-foreground">We Master</span>
          </h2>
          <p className="text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            Any automation your business needs, we're the <span className="text-primary font-semibold">first to deliver</span> the most important and useful solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 group overflow-hidden glow-shadow hover:glow-primary transform hover:scale-105 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] p-[1px] animate-shimmer">
                <div className="w-full h-full bg-card rounded-lg"></div>
              </div>
              
              <CardHeader className="relative z-10 text-center pt-8">
                <div className="text-6xl mb-6 group-hover:scale-125 transition-all duration-500 group-hover:animate-float">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 pb-8">
                <CardDescription className="text-center text-foreground/70 text-lg leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {service.description}
                </CardDescription>
                
                {/* Bottom accent line */}
                <div className={`w-0 h-1 bg-gradient-to-r ${service.gradient} mx-auto mt-6 rounded-full group-hover:w-full transition-all duration-500`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to action */}
        <div className={`text-center mt-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
          <p className="text-xl text-foreground/70 mb-6">Ready to automate your business?</p>
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30 text-primary font-semibold text-lg hover:from-primary/30 hover:to-accent/30 transition-all duration-300 cursor-pointer group">
            <span>Start with a free consultation</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;