import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PortalHeader from "@/components/portal/PortalHeader";
import GovernmentFooter from "@/components/layout/GovernmentFooter";

const Terms = () => {
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
          <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using ayiti.io, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, 
                you are prohibited from using this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials 
                and for all activities that occur under your account. You must notify us immediately 
                of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Provide false or misleading information</li>
                <li>Impersonate another person or entity</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the service for any illegal purpose</li>
                <li>Upload malicious code or harmful content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Service Availability</h2>
              <p>
                While we strive to maintain 99.9% uptime, we do not guarantee that the service 
                will be available at all times. We may suspend or discontinue the service for 
                maintenance, updates, or other reasons.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Fees and Payments</h2>
              <p>
                Some services require payment of fees. All fees are non-refundable unless 
                otherwise stated. You agree to pay all applicable fees and charges.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Intellectual Property</h2>
              <p>
                All content, trademarks, and data on this platform are the property of the 
                Republic of Haiti government. You may not use, copy, or distribute any content 
                without proper authorization.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Limitation of Liability</h2>
              <p>
                We shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of or inability to use the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the 
                service after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Contact Information</h2>
              <p>
                For questions about these Terms of Service, contact us at legal@ayiti.io 
                or +509 1234-5678.
              </p>
            </section>
          </div>
        </Card>
      </main>
      <GovernmentFooter />
    </div>
  );
};

export default Terms;