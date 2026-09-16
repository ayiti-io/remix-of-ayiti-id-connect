import { useState } from "react";
import { X, Star } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { serviceCategories } from "@/lib/serviceData";
import { useFavoriteServices } from "@/hooks/useFavoriteServices";

interface ServiceSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ServiceSelector = ({ open, onOpenChange }: ServiceSelectorProps) => {
  const { favoriteServices, addFavorite, removeFavorite, isFavorite, canAddMore, maxFavorites } = useFavoriteServices();
  const [openCategories, setOpenCategories] = useState<string[]>(serviceCategories.map(cat => cat.name));

  const toggleCategory = (categoryName: string) => {
    setOpenCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const handleToggleFavorite = (serviceId: string) => {
    if (isFavorite(serviceId)) {
      removeFavorite(serviceId);
    } else if (canAddMore) {
      addFavorite(serviceId);
    }
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="h-[85vh]">
        <DrawerHeader>
          <div className="flex items-center justify-between">
            <div>
              <DrawerTitle>Select Favorite Services</DrawerTitle>
              <DrawerDescription>
                Choose up to {maxFavorites} services for quick access ({favoriteServices.length}/{maxFavorites} selected)
              </DrawerDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DrawerHeader>

        <div className="overflow-y-auto px-4 pb-4">
          <div className="space-y-3">
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
                        <h3 className="text-base font-semibold">{category.name}</h3>
                        <span className="text-xs text-muted-foreground">
                          ({category.services.length})
                        </span>
                      </div>
                      <span className="text-muted-foreground">
                        {isOpen ? "−" : "+"}
                      </span>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="p-4 pt-0 space-y-2">
                        {category.services.map((service) => {
                          const ServiceIcon = service.icon;
                          const isServiceFavorite = isFavorite(service.id);
                          const canToggle = canAddMore || isServiceFavorite;
                          
                          return (
                            <button
                              key={service.id}
                              onClick={() => handleToggleFavorite(service.id)}
                              disabled={!canToggle}
                              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              <div className="flex items-center gap-3">
                                <ServiceIcon className="h-5 w-5 text-primary" />
                                <span className="text-sm font-medium">{service.label}</span>
                              </div>
                              <Star
                                className={`h-5 w-5 transition-colors ${
                                  isServiceFavorite
                                    ? "fill-yellow-500 text-yellow-500"
                                    : "text-muted-foreground"
                                }`}
                              />
                            </button>
                          );
                        })}
                      </div>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              );
            })}
          </div>
        </div>

        <div className="p-4 border-t">
          <Button
            onClick={() => onOpenChange(false)}
            className="w-full"
            size="lg"
          >
            Done
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ServiceSelector;
