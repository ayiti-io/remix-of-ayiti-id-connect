import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PortalHeader from "@/components/portal/PortalHeader";
import GovernmentFooter from "@/components/layout/GovernmentFooter";

const HousingAssistance = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate("/services/social-benefits")} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Social Benefits
        </Button>

        <Card className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <Home className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Housing Assistance Application</h1>
          </div>

          <div className="space-y-6">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Program Benefits</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Rental assistance for qualified applicants</li>
                <li>• Support with housing deposits</li>
                <li>• Emergency housing placement</li>
                <li>• Home repair grants for low-income homeowners</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Applicant Information</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" />
                  </div>
                  <div>
                    <Label htmlFor="nationalID">National ID *</Label>
                    <Input id="nationalID" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Household Information</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="householdSize">Household Size *</Label>
                    <Input id="householdSize" type="number" placeholder="Number of people" />
                  </div>
                  <div>
                    <Label htmlFor="monthlyIncome">Monthly Household Income *</Label>
                    <Input id="monthlyIncome" type="number" placeholder="HTG" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="currentAddress">Current Address *</Label>
                  <Input id="currentAddress" />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="assistanceType">Type of Assistance Needed *</Label>
              <select id="assistanceType" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                <option>Select type</option>
                <option>Rental Assistance</option>
                <option>Deposit Assistance</option>
                <option>Emergency Housing</option>
                <option>Home Repair Grant</option>
              </select>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1">Submit Application</Button>
              <Button variant="outline" onClick={() => navigate("/help")}>Need Help?</Button>
            </div>
          </div>
        </Card>
      </main>
      <GovernmentFooter />
    </div>
  );
};

export default HousingAssistance;