import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AlertCircle, Smartphone } from 'lucide-react';
import { getStrings } from '@/lib/bluetooth/translations';

interface BluetoothFallbackProps {
  onManualConfirm: () => void;
  language?: 'ht' | 'en' | 'fr' | 'nl';
}

export const BluetoothFallback = ({ onManualConfirm, language = 'en' }: BluetoothFallbackProps) => {
  const t = getStrings(language);

  return (
    <Card className="p-6 bg-muted/50 border-2 border-dashed">
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
          <div className="space-y-1">
            <p className="text-sm font-medium">{t.notSupported}</p>
            <p className="text-xs text-muted-foreground">
              Safari and some mobile browsers don't support Web Bluetooth.
            </p>
          </div>
        </div>

        <div className="pt-2 border-t">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Smartphone className="w-4 h-4" />
            {t.manualTitle}
          </h3>
          <ol className="text-sm space-y-2 text-muted-foreground mb-4">
            <li>{t.manualStep1}</li>
            <li>{t.manualStep2}</li>
            <li>{t.manualStep3}</li>
          </ol>
        </div>

        <Button 
          onClick={onManualConfirm}
          variant="outline"
          className="w-full"
        >
          {t.manual}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          For best experience, use Chrome or Edge browser
        </p>
      </div>
    </Card>
  );
};
