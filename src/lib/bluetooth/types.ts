export const BLE_CONFIG = {
  DEVICE_NAME: 'Konekte rezo Ayiti.io',
  SERVICE_UUID: 'ee00cafe-babe-4c00-8000-0000ee00cafe',
  CHAR_UUID: 'ee01cafe-babe-4c01-8000-0000ee01cafe',
  HANDSHAKE_TIMEOUT_MS: 10000,
  SESSION_KEY: 'bluetoothVerified'
} as const;

export interface BluetoothHandshakeResult {
  success: boolean;
  deviceId?: string;
  error?: string;
  timestamp: number;
}

export type Platform = 'web' | 'android' | 'ios' | 'unknown';
