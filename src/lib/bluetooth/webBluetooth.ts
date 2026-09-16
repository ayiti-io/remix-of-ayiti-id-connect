import { BLE_CONFIG, BluetoothHandshakeResult } from './types';

export class WebBluetoothService {
  async isSupported(): Promise<boolean> {
    return 'bluetooth' in navigator && typeof (navigator.bluetooth as any)?.requestDevice === 'function';
  }

  async scanAndConnect(): Promise<BluetoothHandshakeResult> {
    try {
      if (!('bluetooth' in navigator)) {
        throw new Error('Web Bluetooth not supported in this browser');
      }

      const device = await (navigator.bluetooth as any).requestDevice({
        filters: [{ namePrefix: BLE_CONFIG.DEVICE_NAME }],
        optionalServices: [BLE_CONFIG.SERVICE_UUID]
      });

      if (!device.gatt) {
        throw new Error('GATT not available on this device');
      }

      const server = await device.gatt.connect();
      const service = await server.getPrimaryService(BLE_CONFIG.SERVICE_UUID);
      const char = await service.getCharacteristic(BLE_CONFIG.CHAR_UUID);

      // Handshake: write random nonce, read echo
      const nonce = crypto.getRandomValues(new Uint8Array(16));
      await char.writeValue(nonce);
      
      const echoValue = await char.readValue();
      const echo = new Uint8Array(echoValue.buffer);

      const valid = echo.length === nonce.length && 
                    echo.every((b: number, i: number) => b === nonce[i]);

      if (!valid) {
        throw new Error('Handshake failed: nonce mismatch');
      }

      sessionStorage.setItem(BLE_CONFIG.SESSION_KEY, '1');
      
      return {
        success: true,
        deviceId: device.id,
        timestamp: Date.now()
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Unknown error occurred',
        timestamp: Date.now()
      };
    }
  }

  async disconnect(): Promise<void> {
    sessionStorage.removeItem(BLE_CONFIG.SESSION_KEY);
  }
}
