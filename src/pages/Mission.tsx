import { ArrowLeft, Target, Users, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PortalHeader from "@/components/portal/PortalHeader";
import GovernmentFooter from "@/components/layout/GovernmentFooter";

const Mission = () => {
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
          <h1 className="text-3xl font-bold mb-6">Our Mission</h1>
          
          <div className="space-y-8">
            <section>
              <p className="text-lg text-muted-foreground mb-8">
                Our mission is to digitize and modernize government services, making them accessible 
                to every Haitian citizen, regardless of their location or technical expertise.
              </p>
            </section>

            <section className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Accessibility for All</h3>
                  <p className="text-sm text-muted-foreground">
                    Ensure that all citizens can access government services easily, 
                    regardless of their physical location or abilities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Security First</h3>
                  <p className="text-sm text-muted-foreground">
                    Maintain the highest standards of data security and privacy 
                    protection for all citizen information.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Efficiency</h3>
                  <p className="text-sm text-muted-foreground">
                    Streamline government processes to save time and reduce 
                    bureaucratic obstacles for citizens.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Continuous Improvement</h3>
                  <p className="text-sm text-muted-foreground">
                    Regularly update and enhance our services based on citizen 
                    feedback and technological advances.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </Card>
      </main>
      <GovernmentFooter />
    </div>
  );
};

export default Mission;