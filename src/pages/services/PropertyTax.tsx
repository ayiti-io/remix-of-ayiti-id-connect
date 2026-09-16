import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PortalHeader from "@/components/portal/PortalHeader";
import GovernmentFooter from "@/components/layout/GovernmentFooter";

const PropertyTax = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate("/services/taxes")} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Taxes
        </Button>

        <Card className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <Home className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Property Tax</h1>
          </div>

          <div className="space-y-6">
            <div>
              <Label htmlFor="propertyID">Property ID Number *</Label>
              <Input id="propertyID" placeholder="Enter property identification number" />
            </div>

            <div>
              <Label htmlFor="propertyAddress">Property Address *</Label>
              <Input id="propertyAddress" placeholder="Full property address" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="ownerName">Owner Name *</Label>
                <Input id="ownerName" placeholder="Property owner's name" />
              </div>
              <div>
                <Label htmlFor="nationalID">National ID *</Label>
                <Input id="nationalID" placeholder="Owner's national ID" />
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Property Tax Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Annual Tax Rate:</span>
                  <span className="font-semibold">1.2% of assessed value</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment Due:</span>
                  <span className="font-semibold">June 30 annually</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Late Fee:</span>
                  <span className="font-semibold">5% per month</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Button className="w-full">View Tax Statement</Button>
              <Button variant="outline" className="w-full">Pay Property Tax</Button>
            </div>

            <Button variant="ghost" className="w-full" onClick={() => navigate("/help")}>
              Questions? Contact Support
            </Button>
          </div>
        </Card>
      </main>
      <GovernmentFooter />
    </div>
  );
};

export default PropertyTax;