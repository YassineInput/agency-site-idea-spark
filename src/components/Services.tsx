import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Customer Service Automation",
      description: "Automated chatbots and response systems to handle customer inquiries 24/7",
      icon: "🤖"
    },
    {
      title: "Lead Generation Automation",
      description: "Capture, qualify, and nurture leads automatically from your website and social media",
      icon: "🎯"
    },
    {
      title: "Social Media Automation",
      description: "Schedule posts, respond to comments, and grow your social presence automatically",
      icon: "📱"
    },
    {
      title: "Email Marketing Automation",
      description: "Personalized email sequences that convert prospects into paying customers",
      icon: "📧"
    },
    {
      title: "Inventory Management",
      description: "Automatic stock tracking, reordering, and supplier communication",
      icon: "📦"
    },
    {
      title: "Appointment Scheduling",
      description: "Automated booking system with calendar integration and reminders",
      icon: "📅"
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Business Automations We Cover
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Any automation your business needs, we're the first to deliver the most important and useful solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-colors duration-300 group">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;