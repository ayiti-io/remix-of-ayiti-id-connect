import { ArrowLeft, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";
import PortalHeader from "@/components/portal/PortalHeader";

const Help = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How do I apply for government services?",
      answer: "Select the service you need from the Portal dashboard. Each service will guide you through the application process with step-by-step instructions. Make sure you have all required documents ready before starting."
    },
    {
      question: "How can I track my application?",
      answer: "After submitting an application, you'll receive a tracking number via email. You can use this number to check your application status on the Portal dashboard or by contacting our support team."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept credit cards, debit cards, bank transfers, and mobile money payments. Some services may also accept cash payments at physical offices."
    },
    {
      question: "How long does processing take?",
      answer: "Processing times vary by service: Birth certificates (5-7 business days), Driver's licenses (10-14 business days), Business registration (7-10 business days). You'll receive notifications at each stage."
    },
    {
      question: "What documents do I need?",
      answer: "Required documents vary by service. Each service page lists specific requirements. Generally, you'll need: valid ID, proof of address, and service-specific documents. Check the individual service page for details."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />
      <main className="-mt-8 relative z-10">
        <div className="max-w-7xl mx-auto pb-12">
          <Card className="shadow-lg">
            <CardHeader>
              <Button
                variant="ghost"
                onClick={() => navigate("/portal")}
                className="mb-4 w-fit"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portal
              </Button>
              <CardTitle className="text-3xl font-bold">Help & Support</CardTitle>
              <p className="text-muted-foreground mt-2">
                Find answers to common questions or contact our support team
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* FAQ Section */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
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
              </section>

              {/* Contact Information */}
              <section className="border-t pt-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium mb-1">Phone Support</h3>
                          <p className="text-sm text-muted-foreground">Emergency: +509 3700-0000</p>
                          <p className="text-sm text-muted-foreground">General: +509 3700-1234</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium mb-1">Email Support</h3>
                          <p className="text-sm text-muted-foreground">support@ayiti.io</p>
                          <p className="text-sm text-muted-foreground">info@ayiti.io</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium mb-1">Office Locations</h3>
                          <p className="text-sm text-muted-foreground">Port-au-Prince Central Office</p>
                          <p className="text-sm text-muted-foreground">Cap-Haïtien Regional Office</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium mb-1">Office Hours</h3>
                          <p className="text-sm text-muted-foreground">Mon-Fri: 8:00 AM - 5:00 PM</p>
                          <p className="text-sm text-muted-foreground">Sat: 9:00 AM - 1:00 PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Quick Links */}
              <section className="border-t pt-8">
                <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Button variant="outline" className="justify-start" asChild>
                    <a href="/services">Browse All Services</a>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <a href="#user-guide">User Guide</a>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <a href="#accessibility">Accessibility Resources</a>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <a href="#privacy">Privacy & Security</a>
                  </Button>
                </div>
              </section>

              {/* Live Chat Placeholder */}
              <section className="border-t pt-8">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Need immediate assistance?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our support team is available to help you with any questions or concerns.
                    </p>
                    <Button>Start Live Chat</Button>
                  </CardContent>
                </Card>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Help;
