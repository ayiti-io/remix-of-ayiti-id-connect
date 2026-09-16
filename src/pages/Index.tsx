import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Globe, Zap, Code2, Users, CheckCircle, ArrowRight } from "lucide-react";
import ayitiLogo from "@/assets/ayiti.png";
import raLogoText from "@/assets/RA-logo-Text.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={ayitiLogo} alt="ayiti.io" className="h-8" />
          </div>
          <nav className="flex items-center gap-6">
            <Link to="/Core/API/Endpoints" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </Link>
            <Link to="/Core/API/Endpoints" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              API Reference
            </Link>
            <Link to="/login">
              <Button size="sm">Sign In</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Production-Grade Government Identity Platform</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Secure Digital Identity
            <br />
            For Every Citizen
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Enterprise-ready OpenID Connect SSO platform enabling third-party developers to integrate government-verified identity into their applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/Core/API/Endpoints">
              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/Core/API/Endpoints">
              <Button size="lg" variant="outline" className="gap-2">
                <Code2 className="w-4 h-4" />
                View API Docs
              </Button>
            </Link>
          </div>

          <div className="mt-16 p-6 bg-card rounded-xl shadow-lg border border-border">
            <div className="bg-muted/50 rounded-lg p-4 text-left font-mono text-sm overflow-x-auto">
              <div className="text-muted-foreground mb-2">// Quick Start - Authorization Request</div>
              <code className="text-foreground">
                GET /oauth2/authorize?
                <br />
                <span className="ml-4">response_type=code&</span>
                <br />
                <span className="ml-4">client_id=YOUR_CLIENT_ID&</span>
                <br />
                <span className="ml-4">scope=openid email govid.read&</span>
                <br />
                <span className="ml-4">code_challenge=PKCE_CHALLENGE&</span>
                <br />
                <span className="ml-4">code_challenge_method=S256</span>
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Enterprise Features</h2>
          <p className="text-xl text-muted-foreground">Built for security, compliance, and developer experience</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
            <CardHeader>
              <Shield className="w-10 h-10 text-primary mb-3" />
              <CardTitle>Government-Grade Security</CardTitle>
              <CardDescription>
                PKCE-enforced OAuth2, FIDO2/WebAuthn, mTLS, key rotation, and comprehensive audit logging
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
            <CardHeader>
              <Lock className="w-10 h-10 text-primary mb-3" />
              <CardTitle>Multi-Factor Authentication</CardTitle>
              <CardDescription>
                Support for TOTP, SMS/Email OTP, WebAuthn, with configurable MFA policies per scope
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
            <CardHeader>
              <CheckCircle className="w-10 h-10 text-primary mb-3" />
              <CardTitle>Identity Verification</CardTitle>
              <CardDescription>
                Age, address, email, phone verification with national registry integration
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
            <CardHeader>
              <Globe className="w-10 h-10 text-primary mb-3" />
              <CardTitle>Multilingual Support</CardTitle>
              <CardDescription>
                Full internationalization in English, Haitian Creole, French, and Dutch
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
            <CardHeader>
              <Zap className="w-10 h-10 text-primary mb-3" />
              <CardTitle>High Performance</CardTitle>
              <CardDescription>
                {'<300ms p95 latency, 99.9% uptime SLA, 1k+ logins/sec capacity'}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
            <CardHeader>
              <Code2 className="w-10 h-10 text-primary mb-3" />
              <CardTitle>Developer-Friendly</CardTitle>
              <CardDescription>
                SDKs for JavaScript, Python, PHP, Go with sandbox environment and interactive docs
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Protocol Support */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 bg-gradient-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Users className="w-8 h-8" />
                Standards-Based Authentication
              </CardTitle>
              <CardDescription className="text-primary-foreground/80 text-lg">
                Built on industry-standard protocols for maximum compatibility and security
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">OpenID Connect (OIDC)</h4>
                      <p className="text-sm text-primary-foreground/80">Full OIDC 1.0 implementation with discovery</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">OAuth 2.0 + PKCE</h4>
                      <p className="text-sm text-primary-foreground/80">Authorization Code flow with PKCE required</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">SAML 2.0</h4>
                      <p className="text-sm text-primary-foreground/80">Optional SAML compatibility for legacy systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">WebAuthn / FIDO2</h4>
                      <p className="text-sm text-primary-foreground/80">Passwordless authentication with hardware keys</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Available Scopes */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Available Scopes & Claims</h2>
            <p className="text-xl text-muted-foreground">Request only the data your application needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Standard OIDC Scopes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded">openid</code>
                    <span className="text-muted-foreground text-xs">Required for OIDC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded">email</code>
                    <span className="text-muted-foreground text-xs">Email address</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded">phone</code>
                    <span className="text-muted-foreground text-xs">Phone number</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded">profile</code>
                    <span className="text-muted-foreground text-xs">Name, birthdate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded">address</code>
                    <span className="text-muted-foreground text-xs">Postal address</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded">offline_access</code>
                    <span className="text-muted-foreground text-xs">Refresh tokens</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Government-Specific Scopes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded">govid.read</code>
                    <span className="text-muted-foreground text-xs">National ID</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded">age.verify</code>
                    <span className="text-muted-foreground text-xs">Age verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded">residency.verify</code>
                    <span className="text-muted-foreground text-xs">Residency status</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded">identity.assurance</code>
                    <span className="text-muted-foreground text-xs">IAL/AAL levels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded">address.verify</code>
                    <span className="text-muted-foreground text-xs">Verified address</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="bg-muted px-2 py-1 rounded">document.verify</code>
                    <span className="text-muted-foreground text-xs">Document checks</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center bg-gradient-primary text-primary-foreground rounded-2xl p-12 shadow-lg">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join developers building the next generation of government services
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/Core/API/Endpoints">
              <Button size="lg" variant="secondary" className="gap-2">
                Read Documentation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                Access Developer Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={ayitiLogo} alt="ayiti.io" className="h-6" />
              <span className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} ayiti.io from <img src={raLogoText} alt="Repiblik Ayiti" className="inline h-5 align-middle ml-1" />
              </span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">GDPR Compliance</a>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
