import { ArrowLeft, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PortalHeader from "@/components/portal/PortalHeader";
import GovernmentFooter from "@/components/layout/GovernmentFooter";

const BusinessTax = () => {
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
            <Building2 className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Business Tax</h1>
          </div>

          <div className="space-y-6">
            <div>
              <Label htmlFor="businessID">Business Registration Number *</Label>
              <Input id="businessID" placeholder="Enter business registration number" />
            </div>

            <div>
              <Label htmlFor="businessName">Business Name *</Label>
              <Input id="businessName" placeholder="Legal business name" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="taxYear">Tax Year *</Label>
                <select id="taxYear" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
              </div>
              <div>
                <Label htmlFor="businessType">Business Type *</Label>
                <select id="businessType" className="w-full h-10 px-3 rounded-md border border-input bg-background">
                  <option>Select type</option>
                  <option>Sole Proprietorship</option>
                  <option>Partnership</option>
                  <option>Corporation</option>
                  <option>LLC</option>
                </select>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Tax Filing Options</h3>
              <div className="space-y-3">
                <Card className="p-4 cursor-pointer hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-1">Quarterly Filing</h4>
                  <p className="text-sm text-muted-foreground">
                    File and pay taxes every quarter (recommended for most businesses)
                  </p>
                </Card>
                <Card className="p-4 cursor-pointer hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-1">Annual Filing</h4>
                  <p className="text-sm text-muted-foreground">
                    File once per year with estimated tax payments
                  </p>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Required Documents</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Financial statements (Income statement, Balance sheet)</li>
                <li>Payroll records and employee information</li>
                <li>Business expense receipts and invoices</li>
                <li>Previous year's tax return</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1">Start Tax Filing</Button>
              <Button variant="outline" onClick={() => navigate("/help")}>Need Help?</Button>
            </div>
          </div>
        </Card>
      </main>
      <GovernmentFooter />
    </div>
  );
};

export default BusinessTax;