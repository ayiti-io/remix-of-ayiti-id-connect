import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ayitiLogo from "@/assets/ayiti.png";
import backgroundGif from "@/assets/698a9a70496605.5ba5f95f25492.gif";
import { useEffect, useState } from "react";
import ProfileDialog from "./ProfileDialog";

const PortalHeader = () => {
  const [greeting, setGreeting] = useState("Good morning");
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) {
        setGreeting("Good morning");
      } else if (hour < 18) {
        setGreeting("Good afternoon");
      } else {
        setGreeting("Good night");
      }
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <header 
      className="pt-6 pb-16 px-4 bg-primary/10 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundGif})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-start justify-between">
          <div>
            <div className="mb-3">
              <img src={ayitiLogo} alt="Ayiti" width={100} />
            </div>
            <div className="mt-3">
              <div className="text-2xl font-semibold text-white mb-1">
                Hello, Erickson
              </div>
              <div className="text-sm text-white/90 mt-1.5">{greeting}</div>
            </div>
          </div>
          <Avatar 
            className="h-12 w-12 cursor-pointer hover:ring-2 hover:ring-white transition-all" 
            onClick={() => setProfileOpen(true)}
          >
            <AvatarFallback className="bg-primary text-primary-foreground text-lg">
              E
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      <ProfileDialog open={profileOpen} onOpenChange={setProfileOpen} />
    </header>
  );
};

export default PortalHeader;
