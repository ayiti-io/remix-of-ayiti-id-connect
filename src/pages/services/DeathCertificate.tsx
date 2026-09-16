import { ArrowLeft, FileX } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PortalHeader from "@/components/portal/PortalHeader";
import GovernmentFooter from "@/components/layout/GovernmentFooter";

const DeathCertificate = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate("/portal")} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Portal
        </Button>

        <Card className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <FileX className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Death Certificate Request</h1>
          </div>

          <div className="space-y-6">
            <div>
              <Label htmlFor="requestType">Request Type *</Label>
              <select id="requestType" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                <option>Select type</option>
                <option>Certified Copy</option>
                <option>Replacement</option>
              </select>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-4">Deceased Information</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dateOfDeath">Date of Death *</Label>
                    <Input id="dateOfDeath" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="placeOfDeath">Place of Death *</Label>
                    <Input id="placeOfDeath" placeholder="City/Town" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="deceasedID">National ID Number</Label>
                  <Input id="deceasedID" placeholder="If available" />
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-4">Requestor Information</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="requestorName">Full Name *</Label>
                    <Input id="requestorName" />
                  </div>
                  <div>
                    <Label htmlFor="relationship">Relationship to Deceased *</Label>
                    <select id="relationship" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                      <option>Select relationship</option>
                      <option>Spouse</option>
                      <option>Child</option>
                      <option>Parent</option>
                      <option>Sibling</option>
                      <option>Legal Representative</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="requestorID">Your National ID *</Label>
                  <Input id="requestorID" />
                </div>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Important Information</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Only immediate family or legal representatives can request</li>
                <li>• Processing fee: $25.00</li>
                <li>• Estimated time: 3-5 business days</li>
                <li>• Valid ID required for pickup</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1">Submit Request</Button>
              <Button variant="outline" onClick={() => navigate("/help")}>Need Help?</Button>
            </div>
          </div>
        </Card>
      </main>
      <GovernmentFooter />
    </div>
  );
};

export default DeathCertificate;