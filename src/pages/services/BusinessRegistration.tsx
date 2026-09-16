import { ArrowLeft, Briefcase, Upload, CheckCircle, MoreVertical } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import PortalHeader from "@/components/portal/PortalHeader";

const BusinessRegistration = () => {
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
                  <Briefcase className="h-8 w-8 text-primary" />
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Business Registration</h1>
                    <p className="text-sm text-muted-foreground mt-1">Register your new business officially</p>
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
                  <Label htmlFor="business-name">Business Name</Label>
                  <Input id="business-name" placeholder="Enter your business name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="business-type">Business Type</Label>
                  <Select>
                    <SelectTrigger id="business-type">
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sole">Sole Proprietorship</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="llc">Limited Liability Company (LLC)</SelectItem>
                      <SelectItem value="corporation">Corporation</SelectItem>
                      <SelectItem value="cooperative">Cooperative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry/Sector</Label>
                  <Select>
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="services">Services</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="agriculture">Agriculture</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="hospitality">Hospitality</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Business Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe your business activities and services"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="owner-name">Owner's Full Name</Label>
                  <Input id="owner-name" placeholder="Enter owner's full legal name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="owner-id">Owner's National ID</Label>
                  <Input id="owner-id" placeholder="Enter national ID number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="business-address">Business Address</Label>
                  <Input id="business-address" placeholder="Enter business physical address" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Business Phone</Label>
                    <Input id="phone" type="tel" placeholder="+509..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email</Label>
                    <Input id="email" type="email" placeholder="business@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Required Documents</Label>
                  <div className="space-y-2">
                    <div className="border border-dashed rounded-lg p-4 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Upload Owner's ID</p>
                    </div>
                    <div className="border border-dashed rounded-lg p-4 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Upload Proof of Address</p>
                    </div>
                    <div className="border border-dashed rounded-lg p-4 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Upload Business Plan (Optional)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  What You'll Receive
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Official business registration certificate</li>
                  <li>• Tax identification number (TIN)</li>
                  <li>• Legal authorization to operate</li>
                  <li>• Processing time: 7-14 business days</li>
                  <li>• Registration fee: HTG 5,000</li>
                </ul>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1">Submit Registration</Button>
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

export default BusinessRegistration;
