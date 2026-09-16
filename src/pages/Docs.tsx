import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Code2, Key, Shield, Zap, Globe } from "lucide-react";
import ayitiLogo from "@/assets/ayiti.png";

const Docs = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={ayitiLogo} alt="ayiti.io" className="h-8" />
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/Core/API/Endpoints" className="text-sm font-medium text-foreground">
              Documentation
            </Link>
            <Link to="/login">
              <Button size="sm">Sign In</Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Developer Documentation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Integrate government-grade identity verification and authentication into your applications with our OpenID Connect and OAuth2 platform.
          </p>
        </div>

        {/* Quick Start Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <Zap className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Quick Start</CardTitle>
              <CardDescription>Get up and running in 5 minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Set up your first integration with our step-by-step guide.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <Code2 className="w-8 h-8 text-primary mb-2" />
              <CardTitle>API Reference</CardTitle>
              <CardDescription>Complete OpenAPI 3.1 specification</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Explore all endpoints, schemas, and authentication flows.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <BookOpen className="w-8 h-8 text-primary mb-2" />
              <CardTitle>SDKs & Samples</CardTitle>
              <CardDescription>JavaScript, Python, PHP, Go</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Download libraries and copy-paste integration examples.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="authentication">Auth Flow</TabsTrigger>
            <TabsTrigger value="code">Code Samples</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Platform Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The GovID Identity Platform provides single sign-on (SSO) for citizens and residents that external websites and applications can integrate.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Key className="w-4 h-4" />
                      Protocols Supported
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• OpenID Connect (OIDC)</li>
                      <li>• OAuth 2.0 + PKCE</li>
                      <li>• SAML 2.0 (optional)</li>
                      <li>• WebAuthn / FIDO2</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Multilingual Support
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• English</li>
                      <li>• Haitian Creole (Kreyòl)</li>
                      <li>• French</li>
                      <li>• Dutch</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>✓ Government-grade security and compliance (GDPR, CCPA)</li>
                    <li>✓ Multi-factor authentication (MFA): TOTP, SMS, Email, WebAuthn</li>
                    <li>✓ Identity verification: age, address, email, phone, documents</li>
                    <li>✓ Comprehensive audit logging and consent management</li>
                    <li>✓ Developer-friendly SDKs and sandbox environment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="authentication" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>OIDC Authorization Code + PKCE Flow</CardTitle>
                <CardDescription>Recommended for all client types (web, mobile, SPA)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Generate PKCE Code Challenge</h4>
                      <p className="text-sm text-muted-foreground">Create a random code_verifier and compute code_challenge = BASE64URL(SHA256(code_verifier))</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Redirect to Authorization Endpoint</h4>
                      <p className="text-sm text-muted-foreground mb-2">Send user to /oauth2/authorize with required parameters</p>
                      <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                        GET /oauth2/authorize?
                        <br />  response_type=code
                        <br />  &client_id=YOUR_CLIENT_ID
                        <br />  &redirect_uri=https://yourapp.com/callback
                        <br />  &scope=openid%20email%20govid.read
                        <br />  &state=RANDOM_STATE
                        <br />  &code_challenge=CHALLENGE
                        <br />  &code_challenge_method=S256
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">User Authenticates</h4>
                      <p className="text-sm text-muted-foreground">User logs in with HID + PIN, completes MFA if required, grants consent</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Exchange Code for Tokens</h4>
                      <p className="text-sm text-muted-foreground mb-2">POST to /oauth2/token with authorization code and code_verifier</p>
                      <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                        POST /oauth2/token
                        <br />Content-Type: application/x-www-form-urlencoded
                        <br /><br />grant_type=authorization_code
                        <br />&code=AUTH_CODE
                        <br />&redirect_uri=https://yourapp.com/callback
                        <br />&client_id=YOUR_CLIENT_ID
                        <br />&code_verifier=ORIGINAL_VERIFIER
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center font-semibold">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Receive Tokens</h4>
                      <p className="text-sm text-muted-foreground mb-2">Response includes access_token, id_token, and refresh_token</p>
                      <div className="bg-muted p-3 rounded text-xs font-mono overflow-x-auto">
                        {`{
  "access_token": "eyJhbG...",
  "token_type": "Bearer",
  "expires_in": 900,
  "refresh_token": "rt_...",
  "id_token": "eyJhbG..."
}`}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="code" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Integration Code Samples</CardTitle>
                <CardDescription>Copy-paste examples for quick integration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">JavaScript (Browser)</h4>
                  <div className="bg-muted p-4 rounded text-sm font-mono overflow-x-auto">
                    <pre>{`// Generate PKCE code verifier and challenge
function generateCodeVerifier() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return base64URLEncode(array);
}

async function sha256(plain) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return crypto.subtle.digest('SHA-256', data);
}

function base64URLEncode(buffer) {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
    .replace(/\\+/g, '-').replace(/\\//g, '_').replace(/=/g, '');
}

// Initiate login
async function login() {
  const codeVerifier = generateCodeVerifier();
  sessionStorage.setItem('code_verifier', codeVerifier);
  
  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64URLEncode(hashed);
  
  const state = generateCodeVerifier();
  sessionStorage.setItem('state', state);
  
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: 'YOUR_CLIENT_ID',
    redirect_uri: window.location.origin + '/callback',
    scope: 'openid email govid.read',
    state: state,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256'
  });
  
  window.location.href = \`https://id.gov.example/oauth2/authorize?\${params}\`;
}`}</pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Token Exchange (Node.js)</h4>
                  <div className="bg-muted p-4 rounded text-sm font-mono overflow-x-auto">
                    <pre>{`// Handle callback and exchange code for tokens
const fetch = require('node-fetch');

async function handleCallback(code) {
  const response = await fetch('https://id.gov.example/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: 'https://yourapp.com/callback',
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code_verifier: codeVerifier // from session
    })
  });
  
  const tokens = await response.json();
  // tokens contains: access_token, id_token, refresh_token
  return tokens;
}`}</pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Fetch User Profile</h4>
                  <div className="bg-muted p-4 rounded text-sm font-mono overflow-x-auto">
                    <pre>{`// Call /v1/me endpoint with access token
async function getUserProfile(accessToken) {
  const response = await fetch('https://id.gov.example/v1/me', {
    headers: {
      'Authorization': \`Bearer \${accessToken}\`
    }
  });
  
  const profile = await response.json();
  /*
  {
    "sub": "user_123456",
    "given_name": "Jean",
    "family_name": "Baptiste",
    "email": "jean@example.com",
    "email_verified": true,
    "birthdate": "1990-01-15",
    "national_id": "HT-9876543",
    "ial": "2",
    "aal": "2"
  }
  */
  return profile;
}`}</pre>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <h4 className="font-semibold mb-2">Available SDKs</h4>
                  <div className="grid md:grid-cols-2 gap-4 mt-3">
                    <div>
                      <p className="text-sm font-medium">JavaScript / TypeScript</p>
                      <code className="text-xs text-muted-foreground">npm install @govid/sdk</code>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Python</p>
                      <code className="text-xs text-muted-foreground">pip install govid-sdk</code>
                    </div>
                    <div>
                      <p className="text-sm font-medium">PHP</p>
                      <code className="text-xs text-muted-foreground">composer require govid/sdk</code>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Go</p>
                      <code className="text-xs text-muted-foreground">go get github.com/govid/sdk-go</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* API Endpoints Reference */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Core API Endpoints</CardTitle>
            <CardDescription>OpenAPI 3.1 specification with complete request/response schemas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <EndpointRow
                method="GET"
                path="/.well-known/openid-configuration"
                description="OIDC discovery document"
              />
              <EndpointRow
                method="GET"
                path="/.well-known/jwks.json"
                description="JSON Web Key Set for token validation"
              />
              <EndpointRow
                method="GET"
                path="/oauth2/authorize"
                description="Authorization endpoint (redirect user here)"
              />
              <EndpointRow
                method="POST"
                path="/oauth2/token"
                description="Token endpoint (exchange code for tokens)"
              />
              <EndpointRow
                method="POST"
                path="/oauth2/revoke"
                description="Revoke access or refresh tokens"
              />
              <EndpointRow
                method="GET"
                path="/v1/me"
                description="Get authenticated user profile"
              />
              <EndpointRow
                method="POST"
                path="/v1/verify/email"
                description="Initiate email verification"
              />
              <EndpointRow
                method="POST"
                path="/v1/verify/phone"
                description="Initiate phone verification"
              />
              <EndpointRow
                method="POST"
                path="/v1/verify/address"
                description="Verify address against national registry"
              />
              <EndpointRow
                method="POST"
                path="/v1/verify/age"
                description="Age verification (returns boolean)"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const EndpointRow = ({ method, path, description }: { method: string; path: string; description: string }) => {
  const methodColors: Record<string, string> = {
    GET: "bg-blue-100 text-blue-700 border-blue-300",
    POST: "bg-green-100 text-green-700 border-green-300",
    PUT: "bg-yellow-100 text-yellow-700 border-yellow-300",
    DELETE: "bg-red-100 text-red-700 border-red-300",
  };

  return (
    <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg border border-border">
      <span className={`px-2 py-1 text-xs font-semibold rounded border ${methodColors[method]}`}>
        {method}
      </span>
      <code className="text-sm font-mono flex-1">{path}</code>
      <span className="text-sm text-muted-foreground">{description}</span>
    </div>
  );
};

export default Docs;
