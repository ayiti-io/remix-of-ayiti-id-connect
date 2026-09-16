import { ArrowLeft, FileText, Download, MoreVertical } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import PortalHeader from "@/components/portal/PortalHeader";

const BirthCertificate = () => {
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
                  <FileText className="h-8 w-8 text-primary" />
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Birth Certificate</h1>
                    <p className="text-sm text-muted-foreground mt-1">Request or download birth certificate</p>
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
                  <Label htmlFor="request-type">Request Type</Label>
                  <Select>
                    <SelectTrigger id="request-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New Birth Certificate</SelectItem>
                      <SelectItem value="copy">Copy of Existing Certificate</SelectItem>
                      <SelectItem value="correction">Correction/Amendment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="child-name">Child's Full Name</Label>
                  <Input id="child-name" placeholder="Enter full name as it appears" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="birth-date">Date of Birth</Label>
                    <Input id="birth-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birth-place">Place of Birth</Label>
                    <Input id="birth-place" placeholder="City/Hospital" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="parent-name">Parent/Guardian Name</Label>
                  <Input id="parent-name" placeholder="Enter your full name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="parent-id">Parent National ID</Label>
                  <Input id="parent-id" placeholder="Enter your national ID" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="registration-number">Registration Number (if applicable)</Label>
                  <Input id="registration-number" placeholder="Enter registration number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="delivery-method">Delivery Method</Label>
                  <Select>
                    <SelectTrigger id="delivery-method">
                      <SelectValue placeholder="Select delivery method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="digital">Digital Copy (Email)</SelectItem>
                      <SelectItem value="pickup">Pick up at Office</SelectItem>
                      <SelectItem value="mail">Mail to Address</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  Processing Information
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Processing time: 5-10 business days</li>
                  <li>• Digital copies available within 24 hours</li>
                  <li>• Fee: $10 for first copy, $5 for additional copies</li>
                  <li>• Valid government ID required for pickup</li>
                </ul>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1">Submit Request</Button>
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

export default BirthCertificate;
