import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FreeAutomations from "@/components/FreeAutomations";
import LeadCapture from "@/components/LeadCapture";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <FreeAutomations />
      <LeadCapture />
      <Contact />
    </div>
  );
};

export default Index;
