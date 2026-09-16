import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { validateSessionToken, cleanupExpiredTokens } from '@/lib/sessionToken';
import { Loader2 } from 'lucide-react';
import Login from '@/pages/Login';

export const TokenProtectedLogin = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [isValidating, setIsValidating] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Cleanup expired tokens on mount
    cleanupExpiredTokens();

    // Validate the token
    if (!token) {
      console.warn('No token provided in URL');
      navigate('/', { replace: true });
      return;
    }

    const validation = validateSessionToken(token);

    if (!validation.valid) {
      console.warn('Invalid token:', validation.reason);
      navigate('/', { 
        replace: true,
        state: { error: `Session ${validation.reason}` }
      });
      return;
    }

    setIsValid(true);
    setIsValidating(false);
  }, [token, navigate]);

  if (isValidating) {
    return (
      <div className="h-[100svh] flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
          <p className="text-sm text-muted-foreground">Validating session...</p>
        </div>
      </div>
    );
  }

  if (!isValid) {
    return null;
  }

  if (!token) {
    return null;
  }

  return <Login token={token} />;
};
