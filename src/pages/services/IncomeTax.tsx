import { ArrowLeft, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PortalHeader from "@/components/portal/PortalHeader";
import GovernmentFooter from "@/components/layout/GovernmentFooter";

const IncomeTax = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate("/services/taxes")} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Taxes
        </Button>

        <Card className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Income Tax Filing</h1>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 border-primary">
                <h3 className="font-semibold text-lg mb-2">Individual Tax Return</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  File your personal income tax return for the current tax year.
                </p>
                <Button className="w-full">Start Filing</Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="font-semibold text-lg mb-2">Business Tax Return</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  File tax returns for your business or corporation.
                </p>
                <Button variant="outline" className="w-full">Start Filing</Button>
              </Card>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Important Dates</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax Year:</span>
                  <span className="font-semibold">2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Filing Deadline:</span>
                  <span className="font-semibold">April 30, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment Deadline:</span>
                  <span className="font-semibold">April 30, 2025</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Before You Start</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Gather all T4 slips and income statements</li>
                <li>Collect receipts for deductions and credits</li>
                <li>Have your national ID number ready</li>
                <li>Previous year's tax return (if applicable)</li>
              </ul>
            </div>

            <Button variant="outline" className="w-full" onClick={() => navigate("/help")}>
              Need Help? Contact Tax Support
            </Button>
          </div>
        </Card>
      </main>
      <GovernmentFooter />
    </div>
  );
};

export default IncomeTax;