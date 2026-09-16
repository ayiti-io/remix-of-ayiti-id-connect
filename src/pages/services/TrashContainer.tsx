import { ArrowLeft, Trash2, MapPin, MoreVertical } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import PortalHeader from "@/components/portal/PortalHeader";

const TrashContainer = () => {
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
                  <Trash2 className="h-8 w-8 text-primary" />
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Request Trash Container</h1>
                    <p className="text-sm text-muted-foreground mt-1">Request a new or replacement trash container</p>
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
                  <Label htmlFor="container-type">Container Type</Label>
                  <Select>
                    <SelectTrigger id="container-type">
                      <SelectValue placeholder="Select container type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="trash">Regular Trash (Black)</SelectItem>
                      <SelectItem value="recycling">Recycling (Blue)</SelectItem>
                      <SelectItem value="compost">Compost (Green)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="container-size">Container Size</Label>
                  <Select>
                    <SelectTrigger id="container-size">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small (32 gallons)</SelectItem>
                      <SelectItem value="medium">Medium (64 gallons)</SelectItem>
                      <SelectItem value="large">Large (96 gallons)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Delivery Address</Label>
                  <div className="relative">
                    <Input id="address" placeholder="Enter your address" />
                    <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Request</Label>
                  <Select>
                    <SelectTrigger id="reason">
                      <SelectValue placeholder="Select reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New resident</SelectItem>
                      <SelectItem value="damaged">Damaged container</SelectItem>
                      <SelectItem value="stolen">Lost/Stolen container</SelectItem>
                      <SelectItem value="additional">Need additional container</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Textarea id="notes" placeholder="Any special instructions or details" rows={3} />
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Service Information</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Delivery within 5-7 business days</li>
                  <li>• No fee for standard replacement</li>
                  <li>• Additional containers may incur a fee</li>
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

export default TrashContainer;
