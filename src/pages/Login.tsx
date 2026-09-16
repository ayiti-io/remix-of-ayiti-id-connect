import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { shouldRefreshToken, createSessionToken, getTokenTimeRemaining, formatTokenTimeRemaining } from "@/lib/sessionToken";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import ayitiLogo from "@/assets/ayiti.png";
import raLogoText from "@/assets/RA-logo-Text.png";
import loginCitizens from "@/assets/login-citizens.jpg";

interface LoginProps {
  token: string;
}

const Login = ({ token }: LoginProps) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [hid, setHid] = useState("");
  const [pin, setPin] = useState("");
  const [sessionTimeRemaining, setSessionTimeRemaining] = useState(0);

  // Token refresh check
  useEffect(() => {
    const checkTokenRefresh = () => {
      if (shouldRefreshToken(token)) {
        const newToken = createSessionToken(true);
        navigate(`/id/g/${newToken}`, { replace: true });
      }
    };

    const tokenCheckInterval = setInterval(checkTokenRefresh, 60000); // Check every minute
    return () => clearInterval(tokenCheckInterval);
  }, [token, navigate]);

  // Session time remaining countdown
  useEffect(() => {
    const updateSessionTime = () => {
      const remaining = getTokenTimeRemaining(token);
      setSessionTimeRemaining(remaining);
    };

    updateSessionTime();
    const sessionTimer = setInterval(updateSessionTime, 1000);
    return () => clearInterval(sessionTimer);
  }, [token]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Authentication logic would go here
    console.log("Login attempt:", { hid, pin, sessionToken: token });
  };

  const loginForm = (
    <form onSubmit={handleSubmit} className="w-full space-y-2">
      <Input
        type="text"
        id="hid"
        aria-label="Idantite Ayiti (HID)"
        placeholder="Idantite Ayiti (HID)"
        value={hid}
        onChange={(e) => setHid(e.target.value)}
        autoComplete="username"
        className="h-10"
      />
      <Input
        type="password"
        id="pin"
        aria-label="Kòd sekrè (Pin)"
        placeholder="Kòd sekrè (Pin)"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        autoComplete="current-password"
        inputMode="numeric"
        className="h-10"
      />
      <Button type="submit" className="h-10 w-[140px]">
        Konekte
      </Button>
    </form>
  );

  const sessionDetails = (
    <div className="mt-4 space-y-1 text-[11px] text-muted-foreground">
      <div className="flex items-center justify-between">
        <span>Session ID:</span>
        <span className="font-mono text-primary">***{token.slice(-6)}</span>
      </div>
      <div className="flex items-center justify-between">
        <span>Expires in:</span>
        <span>{formatTokenTimeRemaining(sessionTimeRemaining)}</span>
      </div>
      <div className="flex items-center gap-1 pt-1">
        <span>© {new Date().getFullYear()} ayiti.io from</span>
        <img src={raLogoText} alt="Repiblik Ayiti" className="h-4 w-auto" />
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <main className="flex min-h-[100svh] flex-col bg-background p-3">
        <img src={ayitiLogo} alt="ayiti.io" className="h-7 w-fit" />
        <section className="flex flex-1 flex-col justify-center">
          <h1 className="mb-3 text-2xl font-bold text-foreground">Bonjou, konekte isit la</h1>
          {loginForm}
        </section>
        {sessionDetails}
      </main>
    );
  }

  return (
    <main className="min-h-[100svh] bg-background">
      <header className="h-[72px] border-b border-border bg-card">
        <div className="mx-auto flex h-full max-w-[1340px] items-center justify-between px-8">
          <div className="flex items-center gap-3">
            <img src={ayitiLogo} alt="ayiti.io" className="h-8 w-auto" />
            <div className="border-l border-border pl-3 text-[11px] leading-4 text-muted-foreground">
              <p>Digital identity</p>
              <p>Secure services</p>
            </div>
          </div>
          <img src={raLogoText} alt="Repiblik Ayiti" className="h-7 w-auto" />
        </div>
      </header>

      <div className="mx-auto max-w-[1340px] px-8 pt-5">
        <div className="mb-1 flex justify-end text-[10px] font-medium text-muted-foreground">
          GovID · Secure access
        </div>
        <div className="grid grid-cols-[minmax(300px,0.78fr)_minmax(500px,1.42fr)] gap-14">
          <section className="flex min-h-[330px] flex-col pt-3">
            <div className="max-w-[390px]">
              <h1 className="mb-4 text-3xl font-bold text-foreground">Bonjou, konekte isit la</h1>
              {loginForm}
              {sessionDetails}
            </div>
          </section>

          <section className="relative h-[330px] overflow-hidden bg-muted" aria-label="Sitwayen k ap itilize sèvis Ayiti ID">
            <img
              src={loginCitizens}
              alt="De sitwayen k ap itilize sèvis dijital Ayiti ID ansanm"
              className="h-full w-full object-cover"
              width={1536}
              height={768}
            />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Login;
