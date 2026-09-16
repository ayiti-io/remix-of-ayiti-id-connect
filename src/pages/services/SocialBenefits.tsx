import { ArrowLeft, HandCoins, FileText, Heart, Home, MoreVertical } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import PortalHeader from "@/components/portal/PortalHeader";

const SocialBenefits = () => {
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
                  <HandCoins className="h-8 w-8 text-primary" />
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Social Benefits</h1>
                    <p className="text-sm text-muted-foreground mt-1">Apply for and manage your social benefits</p>
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
                  <div className="flex items-start gap-3">
                    <HandCoins className="h-6 w-6 text-primary mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold">Financial Assistance</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Apply for temporary financial support for families in need
                      </p>
                      <Button variant="link" className="px-0 mt-2">
                        Apply Now →
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start gap-3">
                    <Home className="h-6 w-6 text-primary mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold">Housing Assistance</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Get help with rent, housing vouchers, or emergency shelter
                      </p>
                      <Button variant="link" className="px-0 mt-2">
                        Apply Now →
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start gap-3">
                    <Heart className="h-6 w-6 text-primary mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold">Healthcare Benefits</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Access free or subsidized healthcare services
                      </p>
                      <Button variant="link" className="px-0 mt-2">
                        Apply Now →
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start gap-3">
                    <HandCoins className="h-6 w-6 text-primary mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold">Food Assistance Program</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Receive support for purchasing nutritious food
                      </p>
                      <Button variant="link" className="px-0 mt-2">
                        Apply Now →
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-start gap-3">
                    <FileText className="h-6 w-6 text-primary mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold">Disability Benefits</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Financial support for individuals with disabilities
                      </p>
                      <Button variant="link" className="px-0 mt-2">
                        Apply Now →
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Eligibility & Requirements</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Valid national identification required</li>
                  <li>• Proof of income or financial hardship</li>
                  <li>• Residency documentation</li>
                  <li>• Some programs have specific age or family requirements</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold mb-3">Already Receiving Benefits?</h3>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    Check Benefit Status
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Renew Benefits
                  </Button>
                </div>
              </div>

              <Button variant="outline" onClick={() => navigate("/help")} className="w-full">
                Contact Benefits Advisor
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SocialBenefits;
