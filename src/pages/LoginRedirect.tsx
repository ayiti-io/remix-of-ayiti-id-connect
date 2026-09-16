import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createSessionToken } from '@/lib/sessionToken';
import { BLE_CONFIG } from '@/lib/bluetooth/types';
import { Loader2 } from 'lucide-react';

const LoginRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if Bluetooth is verified
    const bluetoothVerified = sessionStorage.getItem(BLE_CONFIG.SESSION_KEY) === '1';
    
    if (!bluetoothVerified) {
      // Redirect to Bluetooth gate if not verified
      navigate('/', { replace: true });
      return;
    }

    // Generate new token and redirect to new format
    const token = createSessionToken(true);
    navigate(`/id/g/${token}`, { replace: true });
  }, [navigate]);

  return (
    <div className="h-[100svh] flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
        <p className="text-sm text-muted-foreground">Redirecting to secure portal...</p>
      </div>
    </div>
  );
};

export default LoginRedirect;
