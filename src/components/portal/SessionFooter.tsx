import { useEffect, useState } from "react";
import raLogoText from "@/assets/RA-logo-Text.png";

const SessionFooter = () => {
  const [timeRemaining, setTimeRemaining] = useState(26 * 60 + 24); // 26:24 in seconds
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
    <div className="border-t pt-6 mt-6 space-y-4">
      <div className="flex flex-wrap gap-4 text-sm">
        <a href="/help" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
          Need help?
        </a>
        <a href="/services" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
          View all services
        </a>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-muted-foreground">
        <div>
          <span>Session ID: </span>
          <strong className="text-foreground">***{sessionId}</strong>
        </div>
        <div>
          <span>Expires in: </span>
          <strong className="text-foreground">{formatTime(timeRemaining)}</strong>
        </div>
        <div className="sm:ml-auto">
          <span>© 2025 ayiti.io from <img src={raLogoText} alt="Repiblik Ayiti" className="inline h-4 align-middle ml-1" /></span>
        </div>
      </div>
    </div>
  );
};

export default SessionFooter;
