import { useState } from "react";
import { Home, Grid3x3, Star, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useFavoriteServices } from "@/hooks/useFavoriteServices";
import { getServiceById } from "@/lib/serviceData";
import ServiceSelector from "./ServiceSelector";

const MobileBottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("home");
  const [showServiceSelector, setShowServiceSelector] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const { favoriteServices } = useFavoriteServices();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    
    if (tab === "home") {
      navigate("/portal");
      setShowFavorites(false);
    } else if (tab === "services") {
      setShowServiceSelector(true);
      setShowFavorites(false);
    } else if (tab === "favorites") {
      setShowFavorites(true);
    } else if (tab === "profile") {
      setShowFavorites(false);
      // Profile functionality can be implemented later
    }
  };

  const isActive = (tab: string) => {
    if (tab === "home") return location.pathname === "/portal" && !showFavorites;
    if (tab === "favorites") return showFavorites;
    return activeTab === tab;
  };

  return (
    <>
      {/* Favorites View Overlay */}
      {showFavorites && (
        <div className="md:hidden fixed inset-0 bg-background z-40 overflow-y-auto pb-20">
          <div className="p-4">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">My Favorite Services</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Quick access to your most used services
              </p>
            </div>

            {favoriteServices.length === 0 ? (
              <Card className="p-8 text-center">
                <Star className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground mb-2">No favorites yet</p>
                <p className="text-sm text-muted-foreground">
                  Tap the Services tab to add your favorite services
                </p>
              </Card>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {favoriteServices.map((serviceId) => {
                  const service = getServiceById(serviceId);
                  if (!service) return null;
                  
                  const Icon = service.icon;
                  return (
                    <a
                      key={service.id}
                      href={service.href}
                      className="group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
                    >
                      <Card className="p-4 h-full flex flex-col items-center justify-center gap-2 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                        <Icon className="h-8 w-8 text-primary" />
                        <span className="text-sm text-center font-medium">{service.label}</span>
                      </Card>
                    </a>
                  );
                })}
              </div>
            )}

            {favoriteServices.length > 0 && favoriteServices.length < 6 && (
              <button
                onClick={() => {
                  setShowFavorites(false);
                  setShowServiceSelector(true);
                }}
                className="mt-4 w-full p-4 border-2 border-dashed border-muted-foreground/30 rounded-lg hover:border-primary hover:bg-accent/50 transition-colors"
              >
                <Star className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                <span className="text-sm text-muted-foreground">
                  Add more favorites ({favoriteServices.length}/6)
                </span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t z-50 safe-area-bottom">
        <div className="flex items-center justify-around h-16 px-2">
          <button
            onClick={() => handleTabClick("home")}
            className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors ${
              isActive("home") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs font-medium">Home</span>
          </button>

          <button
            onClick={() => handleTabClick("services")}
            className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors ${
              activeTab === "services" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Grid3x3 className="h-5 w-5" />
            <span className="text-xs font-medium">Services</span>
          </button>

          <button
            onClick={() => handleTabClick("favorites")}
            className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors relative ${
              isActive("favorites") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Star className={`h-5 w-5 ${isActive("favorites") ? "fill-primary" : ""}`} />
            <span className="text-xs font-medium">Favorites</span>
            {favoriteServices.length > 0 && (
              <span className="absolute top-1 right-1/4 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {favoriteServices.length}
              </span>
            )}
          </button>

          <button
            onClick={() => handleTabClick("profile")}
            className={`flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors ${
              activeTab === "profile" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <User className="h-5 w-5" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </nav>

      {/* Service Selector Drawer */}
      <ServiceSelector
        open={showServiceSelector}
        onOpenChange={(open) => {
          setShowServiceSelector(open);
          if (!open) setActiveTab("home");
        }}
      />
    </>
  );
};

export default MobileBottomNav;
