import { ArrowLeft, Ticket, CreditCard, Calendar, MoreVertical } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import PortalHeader from "@/components/portal/PortalHeader";

const ParkingFine = () => {
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
                  <Ticket className="h-8 w-8 text-primary" />
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Parking Fine Payment</h1>
                    <p className="text-sm text-muted-foreground mt-1">Pay your parking fine online</p>
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
                  <Label htmlFor="ticket-number">Ticket Number</Label>
                  <Input id="ticket-number" placeholder="Enter your ticket number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="license-plate">License Plate</Label>
                  <Input id="license-plate" placeholder="Enter your license plate" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Date of Violation</Label>
                  <div className="relative">
                    <Input id="date" type="date" />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Payment Information</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  After verifying your ticket, you'll be able to pay online using credit/debit card.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CreditCard className="h-4 w-4" />
                  <span>Secure payment processing</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1">Verify Ticket</Button>
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

export default ParkingFine;
