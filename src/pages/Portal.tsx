import PortalHeader from "@/components/portal/PortalHeader";
import DashboardCard from "@/components/portal/DashboardCard";
import GovernmentFooter from "@/components/layout/GovernmentFooter";
import MobileBottomNav from "@/components/layout/MobileBottomNav";

const Portal = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <PortalHeader />
      <main className="-mt-8 relative z-10">
        <DashboardCard />
      </main>
      <GovernmentFooter />
      <MobileBottomNav />
    </div>
  );
};

export default Portal;
