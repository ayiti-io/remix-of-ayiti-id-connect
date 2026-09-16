import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BLE_CONFIG } from '@/lib/bluetooth/types';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const isVerified = sessionStorage.getItem(BLE_CONFIG.SESSION_KEY) === '1';
    const skipAllowed = import.meta.env.VITE_BLUETOOTH_SKIP_ALLOWED === 'true';
    
    if (!isVerified && !skipAllowed) {
      navigate('/bluetooth');
    }
  }, [navigate]);

  return <>{children}</>;
};
