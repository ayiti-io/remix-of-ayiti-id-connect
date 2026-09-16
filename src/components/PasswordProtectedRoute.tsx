import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface PasswordProtectedRouteProps {
  children: React.ReactNode;
}

const DOCS_PASSWORD_KEY = 'docs_password_verified';

export const PasswordProtectedRoute = ({ children }: PasswordProtectedRouteProps) => {
  const [isVerified, setIsVerified] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verified = sessionStorage.getItem(DOCS_PASSWORD_KEY) === 'true';
    setIsVerified(verified);
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPassword = import.meta.env.VITE_DOCS_PASSWORD || 'ayiti2025';
    
    if (password === correctPassword) {
      sessionStorage.setItem(DOCS_PASSWORD_KEY, 'true');
      setIsVerified(true);
      toast.success('Aksè otorize');
    } else {
      toast.error('Kòd sekrè pa kòrèk');
      setPassword('');
    }
  };

  if (isLoading) {
    return null;
  }

  if (!isVerified) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-2xl font-bold">Pwoteksyon Kòd Sekrè</CardTitle>
            <CardDescription>
              Antre kòd sekrè pou wè dokimantasyon API a
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Kòd sekrè"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                />
              </div>
              <Button type="submit" className="w-full">
                Antre
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
};
