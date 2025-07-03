import { useState } from "react";
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
  const { toast } = useToast();

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
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Your Free Automation Guide
          </h2>
          <p className="text-xl text-muted-foreground">
            Download our comprehensive automation guide and get started with your first free automation
          </p>
        </div>

        <Card className="border-primary/20 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Free Resources Package</CardTitle>
            <CardDescription className="text-lg">
              • Automation Implementation Guide<br/>
              • ROI Calculator Spreadsheet<br/>
              • Free 30-min Strategy Session<br/>
              • Beta Automation Setup
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Business Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@business.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="business">Business Name</Label>
                <Input
                  id="business"
                  type="text"
                  placeholder="Your business name"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="automation">Primary Automation Interest</Label>
                <Select value={formData.automationType} onValueChange={(value) => setFormData({ ...formData, automationType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the automation you're most interested in" />
                  </SelectTrigger>
                  <SelectContent>
                    {automationTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" size="lg" className="w-full text-lg py-6">
                Send Me The Free Resources
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeadCapture;