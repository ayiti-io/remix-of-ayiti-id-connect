import { ArrowLeft, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PortalHeader from "@/components/portal/PortalHeader";
import { serviceCategories } from "@/lib/serviceData";

const AllServices = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [openCategories, setOpenCategories] = useState<string[]>(serviceCategories.map(cat => cat.name));

  const toggleCategory = (categoryName: string) => {
    setOpenCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />
      <main className="-mt-8 relative z-10">
        <div className="max-w-7xl mx-auto pb-12">
          <Card className="shadow-lg">
            <div className="p-6 space-y-6">
              <Button
                variant="ghost"
                onClick={() => navigate("/portal")}
                className="mb-2 w-fit"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portal
              </Button>
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold tracking-tight">All Government Services</h1>
                <p className="text-muted-foreground mt-1">Browse and access all available services</p>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>

              {/* Service Categories */}
              <div className="space-y-4">
                {serviceCategories.map((category) => {
                  const CategoryIcon = category.icon;
                  const isOpen = openCategories.includes(category.name);
                  
                  return (
                    <Collapsible
                      key={category.name}
                      open={isOpen}
                      onOpenChange={() => toggleCategory(category.name)}
                    >
                      <Card>
                        <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-accent/50 transition-colors rounded-lg">
                          <div className="flex items-center gap-3">
                            <CategoryIcon className="h-5 w-5 text-primary" />
                            <h2 className="text-lg font-semibold">{category.name}</h2>
                            <span className="text-sm text-muted-foreground">
                              ({category.services.length})
                            </span>
                          </div>
                          <span className="text-muted-foreground">
                            {isOpen ? "−" : "+"}
                          </span>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="p-4 pt-0">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                              {category.services.map((service, index) => {
                                const ServiceIcon = service.icon;
                                return (
                                  <a
                                    key={index}
                                    href={service.href}
                                    className="group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
                                    aria-label={service.label}
                                  >
                                    <Card className="p-3 h-full flex flex-col items-center justify-center gap-2 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                                      <ServiceIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                                      <span className="text-sm text-center font-medium">{service.label}</span>
                                    </Card>
                                  </a>
                                );
                              })}
                            </div>
                          </div>
                        </CollapsibleContent>
                      </Card>
                    </Collapsible>
                  );
                })}
              </div>

              {/* Footer Info */}
              <div className="border-t pt-6 text-center text-sm text-muted-foreground">
                <p>Can't find what you're looking for? <a href="/help" className="text-primary hover:underline">Contact support</a></p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AllServices;
