import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PortalHeader from "@/components/portal/PortalHeader";
import GovernmentFooter from "@/components/layout/GovernmentFooter";

const Accessibility = () => {
  const navigate = useNavigate();

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
          <h1 className="text-3xl font-bold mb-6">Accessibility Statement</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Our Commitment</h2>
              <p>
                ayiti.io is committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the 
                relevant accessibility standards.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Conformance Status</h2>
              <p>
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. 
                These guidelines explain how to make web content more accessible for people with disabilities.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Accessibility Features</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Keyboard navigation support</li>
                <li>Screen reader compatibility</li>
                <li>Clear and consistent navigation</li>
                <li>High contrast mode</li>
                <li>Adjustable text size</li>
                <li>Alternative text for images</li>
                <li>Descriptive link text</li>
                <li>Form labels and error messages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Known Limitations</h2>
              <p>
                Despite our best efforts, some content may not yet be fully accessible. 
                We are actively working to address these limitations:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Some PDF documents may not be screen reader friendly</li>
                <li>Certain third-party embedded content may have accessibility issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Feedback</h2>
              <p>
                We welcome your feedback on the accessibility of ayiti.io. Please let us know 
                if you encounter accessibility barriers:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Email: accessibility@ayiti.io</li>
                <li>Phone: +509 1234-5678</li>
              </ul>
              <p className="mt-4">
                We try to respond to accessibility feedback within 5 business days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Technical Specifications</h2>
              <p>
                Accessibility of ayiti.io relies on the following technologies:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>HTML5</li>
                <li>WAI-ARIA</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </section>
          </div>
        </Card>
      </main>
      <GovernmentFooter />
    </div>
  );
};

export default Accessibility;