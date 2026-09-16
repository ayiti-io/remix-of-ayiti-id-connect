import { ArrowLeft, Receipt, FileText, Download, Upload, MoreVertical } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import PortalHeader from "@/components/portal/PortalHeader";

const Taxes = () => {
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
                  <Receipt className="h-8 w-8 text-primary" />
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Tax Services</h1>
                    <p className="text-sm text-muted-foreground mt-1">Manage your tax filings and payments</p>
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
              <div className="grid gap-4">
                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                      <FileText className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">File Income Tax</h3>
                        <p className="text-sm text-muted-foreground">Submit your annual tax return</p>
                      </div>
                    </div>
                    <Upload className="h-5 w-5 text-muted-foreground" />
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                      <Receipt className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">View Tax Records</h3>
                        <p className="text-sm text-muted-foreground">Access your tax history and receipts</p>
                      </div>
                    </div>
                    <Download className="h-5 w-5 text-muted-foreground" />
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3">
                      <Receipt className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Pay Outstanding Taxes</h3>
                        <p className="text-sm text-muted-foreground">Make a payment on your tax balance</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Important Dates</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Tax filing deadline: April 15</li>
                  <li>• Quarterly payment dates: Apr 15, Jun 15, Sep 15, Jan 15</li>
                  <li>• Extension deadline: October 15</li>
                </ul>
              </div>

              <Button variant="outline" onClick={() => navigate("/help")} className="w-full">
                Tax Support & FAQ
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Taxes;
