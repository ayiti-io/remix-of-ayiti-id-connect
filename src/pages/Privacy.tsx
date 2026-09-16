import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PortalHeader from "@/components/portal/PortalHeader";
import GovernmentFooter from "@/components/layout/GovernmentFooter";

const Privacy = () => {
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
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Personal identification information (name, national ID, date of birth)</li>
                <li>Contact information (email, phone number, address)</li>
                <li>Documents uploaded for service requests</li>
                <li>Payment and transaction information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Process your service requests and applications</li>
                <li>Verify your identity and prevent fraud</li>
                <li>Communicate with you about your requests</li>
                <li>Improve our services and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Information Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information, 
                including encryption, secure servers, and access controls. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Government agencies as required to process your requests</li>
                <li>Service providers who assist in our operations</li>
                <li>Law enforcement when legally required</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of non-essential communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at 
                privacy@ayiti.io or +509 1234-5678.
              </p>
            </section>
          </div>
        </Card>
      </main>
      <GovernmentFooter />
    </div>
  );
};

export default Privacy;