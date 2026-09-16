import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PortalHeader from "@/components/portal/PortalHeader";
import GovernmentFooter from "@/components/layout/GovernmentFooter";

const About = () => {
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
          <h1 className="text-3xl font-bold mb-6">About ayiti.io</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Who We Are</h2>
              <p>
                ayiti.io is the official digital government services platform of the Republic of Haiti. 
                We provide secure, accessible, and efficient online services to citizens, residents, 
                and businesses.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Our Vision</h2>
              <p>
                To transform government services through technology, making them more accessible, 
                transparent, and user-friendly for all Haitians, wherever they are in the world.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">What We Offer</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Official document requests and renewals</li>
                <li>Tax filing and payment services</li>
                <li>Business registration and licensing</li>
                <li>Social benefits and assistance programs</li>
                <li>Vehicle and driver's license services</li>
                <li>And many more government services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Security & Privacy</h2>
              <p>
                Your security and privacy are our top priorities. All transactions are encrypted, 
                and we follow strict data protection standards to keep your information safe.
              </p>
            </section>
          </div>
        </Card>
      </main>
      <GovernmentFooter />
    </div>
  );
};

export default About;