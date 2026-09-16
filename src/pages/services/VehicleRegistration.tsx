import { ArrowLeft, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PortalHeader from "@/components/portal/PortalHeader";
import GovernmentFooter from "@/components/layout/GovernmentFooter";

const VehicleRegistration = () => {
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
            <Car className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Vehicle Registration</h1>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="vehicleType">Vehicle Type *</Label>
                <select id="vehicleType" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                  <option>Select type</option>
                  <option>Car</option>
                  <option>Motorcycle</option>
                  <option>Truck</option>
                  <option>Bus</option>
                </select>
              </div>
              <div>
                <Label htmlFor="make">Make *</Label>
                <Input id="make" placeholder="e.g., Toyota" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="model">Model *</Label>
                <Input id="model" placeholder="e.g., Camry" />
              </div>
              <div>
                <Label htmlFor="year">Year *</Label>
                <Input id="year" type="number" placeholder="e.g., 2023" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="vin">VIN Number *</Label>
                <Input id="vin" placeholder="17-character VIN" />
              </div>
              <div>
                <Label htmlFor="color">Color *</Label>
                <Input id="color" placeholder="Vehicle color" />
              </div>
            </div>

            <div>
              <Label htmlFor="ownerName">Owner Name *</Label>
              <Input id="ownerName" placeholder="Full legal name" />
            </div>

            <div>
              <Label htmlFor="ownerID">National ID Number *</Label>
              <Input id="ownerID" placeholder="Enter your national ID" />
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Required Documents</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Proof of ownership (bill of sale or title)</li>
                <li>• Valid national ID</li>
                <li>• Proof of insurance</li>
                <li>• Vehicle inspection certificate</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1">Submit Registration</Button>
              <Button variant="outline" onClick={() => navigate("/help")}>Need Help?</Button>
            </div>
          </div>
        </Card>
      </main>
      <GovernmentFooter />
    </div>
  );
};

export default VehicleRegistration;