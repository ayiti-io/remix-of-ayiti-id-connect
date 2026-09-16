import { ArrowLeft, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PortalHeader from "@/components/portal/PortalHeader";
import GovernmentFooter from "@/components/layout/GovernmentFooter";

const LicenseRenewal = () => {
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
            <CreditCard className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Driver's License Renewal</h1>
          </div>

          <div className="space-y-6">
            <div>
              <Label htmlFor="licenseNumber">License Number *</Label>
              <Input id="licenseNumber" placeholder="Enter your license number" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" placeholder="As it appears on license" />
              </div>
              <div>
                <Label htmlFor="dob">Date of Birth *</Label>
                <Input id="dob" type="date" />
              </div>
            </div>

            <div>
              <Label htmlFor="nationalID">National ID Number *</Label>
              <Input id="nationalID" placeholder="Enter your national ID" />
            </div>

            <div>
              <Label htmlFor="address">Current Address *</Label>
              <Input id="address" placeholder="Street address" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" placeholder="+509" />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Renewal Information</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Renewal Fee: $50.00</li>
                <li>• Processing Time: 5-7 business days</li>
                <li>• Valid for: 5 years</li>
                <li>• Medical certificate required if over 65</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1">Proceed to Payment</Button>
              <Button variant="outline" onClick={() => navigate("/help")}>Need Help?</Button>
            </div>
          </div>
        </Card>
      </main>
      <GovernmentFooter />
    </div>
  );
};

export default LicenseRenewal;