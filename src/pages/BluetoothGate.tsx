import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bluetooth, Loader2, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { WebBluetoothService } from '@/lib/bluetooth/webBluetooth';
import { BLE_CONFIG } from '@/lib/bluetooth/types';
import { BluetoothFallback } from '@/components/bluetooth/BluetoothFallback';
import { getStrings } from '@/lib/bluetooth/translations';
import ayitiLogo from '@/assets/ayiti.png';
import { useToast } from '@/hooks/use-toast';
import { createSessionToken } from '@/lib/sessionToken';

const BluetoothGate = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSupported, setIsSupported] = useState(true);
  const [connected, setConnected] = useState(false);
  const [language] = useState<'ht' | 'en' | 'fr' | 'nl'>('en');
  const webBle = new WebBluetoothService();
  const t = getStrings(language);

  useEffect(() => {
    // Check if already verified
    if (sessionStorage.getItem(BLE_CONFIG.SESSION_KEY) === '1') {
      const token = createSessionToken(true);
      navigate(`/id/g/${token}`);
      return;
    }
    
    // Check Web Bluetooth support
    webBle.isSupported().then(setIsSupported);
  }, []);

  const handleScanAndConnect = async () => {
    setIsScanning(true);
    setError(null);
    
    try {
      const result = await webBle.scanAndConnect();
      
      if (result.success) {
        setConnected(true);
        toast({
          title: t.connected,
          description: "Redirecting to secure portal...",
        });
        
        // Generate session token and navigate
        const token = createSessionToken(true);
        setTimeout(() => navigate(`/id/g/${token}`), 1500);
      } else {
        setError(result.error || 'Connection failed');
        toast({
          title: t.error,
          description: result.error,
          variant: "destructive"
        });
      }
    } catch (err: any) {
      setError(err.message);
      toast({
        title: t.error,
        description: err.message,
        variant: "destructive"
      });
    } finally {
      setIsScanning(false);
    }
  };

  const handleManualConfirm = () => {
    // For fallback: user confirms they connected manually
    sessionStorage.setItem(BLE_CONFIG.SESSION_KEY, '1');
    toast({
      title: t.connected,
      description: "Access granted",
    });
    const token = createSessionToken(true);
    setTimeout(() => navigate(`/id/g/${token}`), 500);
  };

  const handleRetry = () => {
    setError(null);
    setConnected(false);
  };

  return (
    <div className="min-h-[100svh] flex items-center justify-center bg-background p-4">
      <Card className="max-w-md w-full p-6 md:p-8 space-y-6 shadow-lg">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <img src={ayitiLogo} alt="ayiti.io" className="h-12 md:h-14" />
          <div className="relative">
            <Bluetooth 
              className={`w-16 h-16 transition-colors ${
                connected ? 'text-green-500' : isScanning ? 'text-primary animate-pulse' : 'text-primary'
              }`} 
            />
            {connected && (
              <CheckCircle2 className="w-6 h-6 text-green-500 absolute -bottom-1 -right-1 bg-background rounded-full" />
            )}
          </div>
        </div>

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold">{t.title}</h1>
          <p className="text-sm text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        {/* Main Content */}
        {isSupported ? (
          <div className="space-y-4">
            {/* Instructions */}
            <div className="bg-muted/50 rounded-lg p-4">
              <ol className="text-sm space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[1.5rem]">1.</span>
                  <span>Turn on Bluetooth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[1.5rem]">2.</span>
                  <span>Look for "<strong>Konekte rezo Ayiti.io</strong>"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold min-w-[1.5rem]">3.</span>
                  <span>Tap the button below to scan</span>
                </li>
              </ol>
            </div>

            {/* Connect Button */}
            <Button 
              onClick={handleScanAndConnect}
              disabled={isScanning || connected}
              className="w-full h-12"
              size="lg"
            >
              {isScanning ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  {t.scanning}
                </>
              ) : connected ? (
                <>
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  {t.connected}
                </>
              ) : (
                <>
                  <Bluetooth className="mr-2 h-5 w-5" />
                  {t.scan}
                </>
              )}
            </Button>

            {/* Error Display */}
            {error && (
              <div className="rounded-lg bg-destructive/10 border border-destructive/20 p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div className="flex-1 space-y-2">
                    <p className="text-sm font-medium text-destructive">{t.error}</p>
                    <p className="text-xs text-muted-foreground">{error}</p>
                    <Button 
                      onClick={handleRetry}
                      variant="outline"
                      size="sm"
                      className="mt-2"
                    >
                      <RefreshCw className="mr-2 h-3 w-3" />
                      {t.retry}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Dev Skip Option */}
            {import.meta.env.VITE_BLUETOOTH_SKIP_ALLOWED === 'true' && (
              <Button 
                onClick={handleManualConfirm}
                variant="ghost"
                size="sm"
                className="w-full text-xs"
              >
                Skip (Dev Mode)
              </Button>
            )}
          </div>
        ) : (
          <BluetoothFallback 
            onManualConfirm={handleManualConfirm}
            language={language}
          />
        )}

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground pt-4 border-t">
          <p>Secure connection required</p>
          <p className="mt-1">
            Device: <strong>{BLE_CONFIG.DEVICE_NAME}</strong>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default BluetoothGate;
