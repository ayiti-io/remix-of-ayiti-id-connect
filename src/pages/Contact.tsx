import { ArrowLeft, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PortalHeader from "@/components/portal/PortalHeader";
import GovernmentFooter from "@/components/layout/GovernmentFooter";

const Contact = () => {
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
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          
          <div className="space-y-6">
            <p className="text-muted-foreground">
              We're here to help. Reach out to us through any of the following channels:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <p className="text-sm text-muted-foreground">
                    +509 1234-5678<br />
                    Toll-free: 800-AYITI-IO
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    support@ayiti.io<br />
                    info@ayiti.io
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Main Office</h3>
                  <p className="text-sm text-muted-foreground">
                    123 Digital Government Plaza<br />
                    Port-au-Prince, Haiti
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t">
              <h2 className="text-xl font-semibold text-foreground mb-4">Regional Offices</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Cap-Haïtien:</strong> 45 Rue de la Liberté, Cap-Haïtien</p>
                <p><strong className="text-foreground">Les Cayes:</strong> 78 Avenue des Cayes, Les Cayes</p>
                <p><strong className="text-foreground">Jacmel:</strong> 12 Rue du Commerce, Jacmel</p>
              </div>
            </div>
          </div>
        </Card>
      </main>
      <GovernmentFooter />
    </div>
  );
};

export default Contact;