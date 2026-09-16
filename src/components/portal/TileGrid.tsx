import { Card } from "@/components/ui/card";
import { serviceCategories } from "@/lib/serviceData";

// Get the first 8 services across all categories for the dashboard
const dashboardServices = serviceCategories
  .flatMap(cat => cat.services)
  .slice(0, 8);

const TileGrid = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {dashboardServices.map((service) => {
        const Icon = service.icon;
        return (
          <a
            key={service.id}
            href={service.href}
            className="group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
            aria-label={service.label}
          >
            <Card className="p-3 sm:p-4 h-full flex flex-col items-center justify-center gap-2 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
              <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" aria-hidden="true" />
              <span className="text-sm sm:text-base text-center font-medium">{service.label}</span>
            </Card>
          </a>
        );
      })}
    </div>
  );
};

export default TileGrid;
