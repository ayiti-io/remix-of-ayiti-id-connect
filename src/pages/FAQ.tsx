import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PortalHeader from "@/components/portal/PortalHeader";
import GovernmentFooter from "@/components/layout/GovernmentFooter";

const FAQ = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How do I create an account?",
      answer: "You can create an account by clicking the 'Sign Up' button and providing your national ID number, email, and creating a secure password."
    },
    {
      question: "What documents do I need to upload?",
      answer: "Required documents vary by service. Common documents include: valid ID, proof of address, birth certificate, and service-specific documents. Each service page lists its specific requirements."
    },
    {
      question: "How long does processing take?",
      answer: "Processing times vary by service: Birth certificates (3-5 business days), Driver's licenses (7-10 business days), Business registration (5-7 business days). You'll receive status updates via email."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes. We use bank-level encryption (256-bit SSL) and comply with international data protection standards. Your information is never shared without your consent."
    },
    {
      question: "Can I track my application?",
      answer: "Yes. Log in to your account and go to 'My Applications' to see real-time status updates for all your submissions."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, bank transfers, and mobile money (MonCash, Natcash). All payments are processed securely."
    },
    {
      question: "How do I renew my documents?",
      answer: "Navigate to the relevant service page, select 'Renewal', and follow the prompts. Most renewals are faster than new applications."
    },
    {
      question: "What if I make a mistake on my application?",
      answer: "Contact support immediately at support@ayiti.io or call +509 1234-5678. Minor corrections can often be made before processing begins."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <Card className="p-8">
          <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              Can't find what you're looking for?{" "}
              <Button
                variant="link"
                className="p-0 h-auto"
                onClick={() => navigate("/support")}
              >
                Contact our support team
              </Button>
            </p>
          </div>
        </Card>
      </main>
      <GovernmentFooter />
    </div>
  );
};

export default FAQ;