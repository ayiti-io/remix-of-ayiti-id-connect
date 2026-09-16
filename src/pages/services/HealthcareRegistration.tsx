import { ArrowLeft, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PortalHeader from "@/components/portal/PortalHeader";
import GovernmentFooter from "@/components/layout/GovernmentFooter";

const HealthcareRegistration = () => {
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
            <Heart className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Healthcare Benefits Registration</h1>
          </div>

          <div className="space-y-6">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Coverage Includes</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Primary care physician visits</li>
                <li>• Prescription medication coverage</li>
                <li>• Emergency services</li>
                <li>• Preventive care and screenings</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Personal Information</h3>
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
                    <Label htmlFor="dob">Date of Birth *</Label>
                    <Input id="dob" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender *</Label>
                    <select id="gender" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                      <option>Select gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="nationalID">National ID Number *</Label>
                  <Input id="nationalID" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Input id="address" />
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
              <h3 className="font-semibold mb-4">Income Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="employmentStatus">Employment Status *</Label>
                  <select id="employmentStatus" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                    <option>Select status</option>
                    <option>Employed</option>
                    <option>Self-Employed</option>
                    <option>Unemployed</option>
                    <option>Retired</option>
                    <option>Student</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="monthlyIncome">Monthly Income *</Label>
                  <Input id="monthlyIncome" type="number" placeholder="HTG" />
                </div>
              </div>
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

export default HealthcareRegistration;