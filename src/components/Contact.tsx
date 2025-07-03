import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: ""
  });
  const { toast } = useToast();

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
    <section className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Your Custom Quote
          </h2>
          <p className="text-xl text-muted-foreground">
            Tell us about your business needs and we'll create a custom automation solution for you
          </p>
        </div>

        <Card className="border-primary/20 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Custom Automation Quote</CardTitle>
            <CardDescription className="text-lg">
              Free consultation • 24-hour response • Tailored solutions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Full Name *</Label>
                  <Input
                    id="contact-name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Business Email *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="your@business.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contact-business">Business Name</Label>
                <Input
                  id="contact-business"
                  type="text"
                  placeholder="Your business name (optional)"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Project Details *</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Describe your business and what automations you need. The more details you provide, the better we can help you."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button type="submit" size="lg" className="w-full text-lg py-6">
                Get My Custom Quote
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Or contact us directly:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-foreground">
            <span>📧 hello@zeroinputai.com</span>
            <span className="hidden sm:inline">•</span>
            <span>📱 Available 24/7 for urgent automations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;