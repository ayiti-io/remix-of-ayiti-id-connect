import { ArrowLeft, UtensilsCrossed } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PortalHeader from "@/components/portal/PortalHeader";
import GovernmentFooter from "@/components/layout/GovernmentFooter";

const FoodAssistance = () => {
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
            <UtensilsCrossed className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Food Assistance Program</h1>
          </div>

          <div className="space-y-6">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Program Benefits</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Monthly food vouchers for qualified households</li>
                <li>• Access to local food distribution centers</li>
                <li>• Nutrition education programs</li>
                <li>• Special provisions for children and elderly</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Head of Household Information</h3>
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
              <h3 className="font-semibold mb-4">Household Details</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="adults">Number of Adults *</Label>
                    <Input id="adults" type="number" min="1" />
                  </div>
                  <div>
                    <Label htmlFor="children">Number of Children *</Label>
                    <Input id="children" type="number" min="0" />
                  </div>
                  <div>
                    <Label htmlFor="elderly">Number of Elderly (65+)</Label>
                    <Input id="elderly" type="number" min="0" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Residential Address *</Label>
                  <Input id="address" />
                </div>
                <div>
                  <Label htmlFor="monthlyIncome">Total Monthly Household Income *</Label>
                  <Input id="monthlyIncome" type="number" placeholder="HTG" />
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="circumstances">Special Circumstances (Optional)</Label>
              <textarea
                id="circumstances"
                className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background"
                placeholder="Please describe any special circumstances (e.g., medical conditions, disabilities, recent unemployment)"
              />
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

export default FoodAssistance;