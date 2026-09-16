import { useEffect, useState } from "react";
import raLogoText from "@/assets/RA-logo-Text.png";
import ayitiLogo from "@/assets/ayiti.png";
import { serviceCategories } from "@/lib/serviceData";

const GovernmentFooter = () => {
  const [timeRemaining, setTimeRemaining] = useState(26 * 60 + 24);
  const sessionId = "ba9493";

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <footer className="hidden md:block bg-card border-t mt-4">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section - Logo and Brand */}
        <div className="mb-8 pb-8 border-b">
          <div className="flex items-center gap-3 mb-3">
            <img src={ayitiLogo} alt="ayiti.io" className="h-8" />
            <span className="text-xl font-semibold text-foreground">Digital Government Services</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-2xl">
            Secure, accessible, and efficient government services for all citizens. Your trusted platform for official documentation and public services.
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pb-8 border-b">
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Vehicle Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/vehicle-registration" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Vehicle Registration</a></li>
              <li><a href="/services/license-renewal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">License Renewal</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Tax Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/income-tax" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Income Tax Filing</a></li>
              <li><a href="/services/property-tax" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Property Tax</a></li>
              <li><a href="/services/business-tax" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Business Tax</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Certificates</h3>
            <ul className="space-y-2">
              <li><a href="/services/marriage-certificate" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Marriage Certificate</a></li>
              <li><a href="/services/death-certificate" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Death Certificate</a></li>
              <li><a href="/services/address-change" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Address Change</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Social Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/housing-assistance" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Housing Assistance</a></li>
              <li><a href="/services/healthcare-registration" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Healthcare Registration</a></li>
              <li><a href="/services/food-assistance" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Food Assistance</a></li>
            </ul>
          </div>
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pb-8 border-b">
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">About</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About ayiti.io</a></li>
              <li><a href="/mission" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Mission</a></li>
              <li><a href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Help & Support</h3>
            <ul className="space-y-2">
              <li><a href="/help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="/accessibility" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Accessibility</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Language</h3>
            <ul className="space-y-2">
              <li><button className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">English</button></li>
              <li><button className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">Kreyòl</button></li>
              <li><button className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">Français</button></li>
            </ul>
          </div>
        </div>

        {/* Session Info */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-muted-foreground mb-8">
          <div>
            <span>Session ID: </span>
            <strong className="text-foreground">***{sessionId}</strong>
          </div>
          <div>
            <span>Expires in: </span>
            <strong className="text-foreground">{formatTime(timeRemaining)}</strong>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} ayiti.io from</span>
            <img src={raLogoText} alt="Repiblik Ayiti" className="h-4 align-middle" />
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="/accessibility" className="hover:text-foreground transition-colors">Accessibility Statement</a>
            <a href="/sitemap" className="hover:text-foreground transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GovernmentFooter;
