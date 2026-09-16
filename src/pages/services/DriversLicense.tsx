import { ArrowLeft, IdCard, Upload, CheckCircle, MoreVertical } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import PortalHeader from "@/components/portal/PortalHeader";

const DriversLicense = () => {
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
                  <IdCard className="h-8 w-8 text-primary" />
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Driver's License Application</h1>
                    <p className="text-sm text-muted-foreground mt-1">Apply for a new driver's license</p>
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

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select>
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="national-id">National ID Number</Label>
                  <Input id="national-id" placeholder="Enter your national ID" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Residential Address</Label>
                  <Input id="address" placeholder="Enter your full address" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="license-type">License Type</Label>
                  <Select>
                    <SelectTrigger id="license-type">
                      <SelectValue placeholder="Select license type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="class-a">Class A - Motorcycle</SelectItem>
                      <SelectItem value="class-b">Class B - Private Vehicle</SelectItem>
                      <SelectItem value="class-c">Class C - Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Required Documents</Label>
                  <div className="space-y-2">
                    <div className="border border-dashed rounded-lg p-4 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Upload Photo ID</p>
                    </div>
                    <div className="border border-dashed rounded-lg p-4 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Upload Proof of Address</p>
                    </div>
                    <div className="border border-dashed rounded-lg p-4 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Upload Passport Photo</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Requirements
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Must be at least 18 years old</li>
                  <li>• Valid national ID or passport</li>
                  <li>• Proof of residence (utility bill or lease)</li>
                  <li>• Pass written and practical driving tests</li>
                  <li>• Medical certificate (if applicable)</li>
                </ul>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1">Submit Application</Button>
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

export default DriversLicense;
