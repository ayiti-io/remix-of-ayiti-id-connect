import { ArrowLeft, Home, MapPin, MoreVertical } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import PortalHeader from "@/components/portal/PortalHeader";

const AddressChange = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />
      <main className="-mt-8 relative z-10">
        <div className="max-w-7xl mx-auto pb-12">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Home className="h-8 w-8 text-primary" />
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Address Change</h1>
                    <p className="text-sm text-muted-foreground mt-1">Update your official address</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={() => navigate("/portal")}>
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input id="full-name" placeholder="Enter your full legal name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="national-id">National ID Number</Label>
                  <Input id="national-id" placeholder="Enter your national ID" />
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Current Address
                  </h3>
                  <div className="space-y-3">
                    <Input placeholder="Street address" />
                    <div className="grid grid-cols-2 gap-3">
                      <Input placeholder="City" />
                      <Input placeholder="Department" />
                    </div>
                    <Input placeholder="Postal code" />
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    New Address
                  </h3>
                  <div className="space-y-3">
                    <Input placeholder="Street address" />
                    <div className="grid grid-cols-2 gap-3">
                      <Input placeholder="City" />
                      <Input placeholder="Department" />
                    </div>
                    <Input placeholder="Postal code" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="effective-date">Effective Date</Label>
                  <Input id="effective-date" type="date" />
                </div>

                <div className="space-y-3 border-t pt-4">
                  <Label>Update Address For:</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="id-card" />
                      <label htmlFor="id-card" className="text-sm cursor-pointer">
                        National ID Card
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="drivers-license" />
                      <label htmlFor="drivers-license" className="text-sm cursor-pointer">
                        Driver's License
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="voter" />
                      <label htmlFor="voter" className="text-sm cursor-pointer">
                        Voter Registration
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="tax" />
                      <label htmlFor="tax" className="text-sm cursor-pointer">
                        Tax Records
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Important Information</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Proof of new address required (utility bill or lease)</li>
                  <li>• Changes take effect within 2-3 business days</li>
                  <li>• You may need to update your physical ID cards separately</li>
                </ul>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1">Submit Address Change</Button>
                <Button variant="outline" onClick={() => navigate("/help")}>
                  Need Help?
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AddressChange;
