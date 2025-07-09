import Hero from "@/components/Hero";
import FreeAutomations from "@/components/FreeAutomations";
import LeadCapture from "@/components/LeadCapture";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FreeAutomations />
      <LeadCapture />
      <Contact />
      <Chatbot />
    </div>
  );
};

export default Index;
