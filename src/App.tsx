import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Docs from "./pages/Docs";
import NotFound from "./pages/NotFound";
import BluetoothGate from "./pages/BluetoothGate";
import LoginRedirect from "./pages/LoginRedirect";
import Portal from "./pages/Portal";
import Help from "./pages/Help";
import AllServices from "./pages/AllServices";
import ParkingFine from "./pages/services/ParkingFine";
import Taxes from "./pages/services/Taxes";
import TrashContainer from "./pages/services/TrashContainer";
import DriversLicense from "./pages/services/DriversLicense";
import BirthCertificate from "./pages/services/BirthCertificate";
import AddressChange from "./pages/services/AddressChange";
import SocialBenefits from "./pages/services/SocialBenefits";
import BusinessRegistration from "./pages/services/BusinessRegistration";
import VehicleRegistration from "./pages/services/VehicleRegistration";
import LicenseRenewal from "./pages/services/LicenseRenewal";
import IncomeTax from "./pages/services/IncomeTax";
import PropertyTax from "./pages/services/PropertyTax";
import BusinessTax from "./pages/services/BusinessTax";
import MarriageCertificate from "./pages/services/MarriageCertificate";
import DeathCertificate from "./pages/services/DeathCertificate";
import HousingAssistance from "./pages/services/HousingAssistance";
import HealthcareRegistration from "./pages/services/HealthcareRegistration";
import FoodAssistance from "./pages/services/FoodAssistance";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Accessibility from "./pages/Accessibility";
import Cart from "./pages/Cart";
import { ProtectedRoute } from "@/components/bluetooth/ProtectedRoute";
import { PasswordProtectedRoute } from "@/components/PasswordProtectedRoute";
import { TokenProtectedLogin } from "@/components/TokenProtectedLogin";
import { TokenProtectedHome } from "@/components/TokenProtectedHome";
import Home from "@/pages/Home";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BluetoothGate />} />
          <Route path="/bluetooth" element={<BluetoothGate />} />
          <Route path="/id/g/:token" element={<ProtectedRoute><TokenProtectedLogin /></ProtectedRoute>} />
          <Route path="/g/home/:token" element={<ProtectedRoute><TokenProtectedHome /></ProtectedRoute>} />
          <Route path="/g/home" element={<Home />} />
          <Route path="/login" element={<LoginRedirect />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/help" element={<Help />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/services/parking-fine" element={<ParkingFine />} />
          <Route path="/services/taxes" element={<Taxes />} />
          <Route path="/services/trash-container" element={<TrashContainer />} />
          <Route path="/services/drivers-license" element={<DriversLicense />} />
          <Route path="/services/birth-certificate" element={<BirthCertificate />} />
          <Route path="/services/address-change" element={<AddressChange />} />
          <Route path="/services/social-benefits" element={<SocialBenefits />} />
          <Route path="/services/business-registration" element={<BusinessRegistration />} />
          <Route path="/services/vehicle-registration" element={<VehicleRegistration />} />
          <Route path="/services/license-renewal" element={<LicenseRenewal />} />
          <Route path="/services/income-tax" element={<IncomeTax />} />
          <Route path="/services/property-tax" element={<PropertyTax />} />
          <Route path="/services/business-tax" element={<BusinessTax />} />
          <Route path="/services/marriage-certificate" element={<MarriageCertificate />} />
          <Route path="/services/death-certificate" element={<DeathCertificate />} />
          <Route path="/services/housing-assistance" element={<HousingAssistance />} />
          <Route path="/services/healthcare-registration" element={<HealthcareRegistration />} />
          <Route path="/services/food-assistance" element={<FoodAssistance />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Core/API/Endpoints" element={<ProtectedRoute><PasswordProtectedRoute><Docs /></PasswordProtectedRoute></ProtectedRoute>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
