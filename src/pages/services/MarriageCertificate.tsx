import { ArrowLeft, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PortalHeader from "@/components/portal/PortalHeader";
import GovernmentFooter from "@/components/layout/GovernmentFooter";

const MarriageCertificate = () => {
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
            <Heart className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Marriage Certificate Request</h1>
          </div>

          <div className="space-y-6">
            <div>
              <Label htmlFor="requestType">Request Type *</Label>
              <select id="requestType" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                <option>Select type</option>
                <option>New Certificate</option>
                <option>Certified Copy</option>
                <option>Replacement</option>
              </select>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-4">Spouse 1 Information</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="spouse1FirstName">First Name *</Label>
                    <Input id="spouse1FirstName" />
                  </div>
                  <div>
                    <Label htmlFor="spouse1LastName">Last Name *</Label>
                    <Input id="spouse1LastName" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="spouse1ID">National ID Number *</Label>
                  <Input id="spouse1ID" />
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-4">Spouse 2 Information</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="spouse2FirstName">First Name *</Label>
                    <Input id="spouse2FirstName" />
                  </div>
                  <div>
                    <Label htmlFor="spouse2LastName">Last Name *</Label>
                    <Input id="spouse2LastName" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="spouse2ID">National ID Number *</Label>
                  <Input id="spouse2ID" />
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-4">Marriage Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="marriageDate">Date of Marriage *</Label>
                  <Input id="marriageDate" type="date" />
                </div>
                <div>
                  <Label htmlFor="marriagePlace">Place of Marriage *</Label>
                  <Input id="marriagePlace" placeholder="City/Town" />
                </div>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Processing Information</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Processing fee: $30.00</li>
                <li>• Estimated time: 5-7 business days</li>
                <li>• Delivery available (additional fee)</li>
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

export default MarriageCertificate;