/**
 * Session Token Management for Government ID Portal
 * Handles generation, validation, and lifecycle of secure session tokens
 */

export interface SessionToken {
  token: string;
  createdAt: number;
  expiresAt: number;
  used: boolean;
  bluetoothVerified: boolean;
}

const TOKEN_STORAGE_KEY = 'ayiti_session_tokens';
const TOKEN_EXPIRY_MS = 30 * 60 * 1000; // 30 minutes
const TOKEN_REFRESH_THRESHOLD_MS = 25 * 60 * 1000; // Refresh at 25 minutes

/**
 * Generates a cryptographically secure 16-character session token
 */
export const generateSessionToken = (): string => {
  const uuid = crypto.randomUUID();
  // Extract and combine parts to create a 16-char hash
  return uuid.replace(/-/g, '').substring(0, 16);
};

/**
 * Creates and stores a new session token
 */
export const createSessionToken = (bluetoothVerified: boolean = false): string => {
  const token = generateSessionToken();
  const now = Date.now();
  
  const tokenData: SessionToken = {
    token,
    createdAt: now,
    expiresAt: now + TOKEN_EXPIRY_MS,
    used: false,
    bluetoothVerified
  };
  
  // Store in sessionStorage
  const tokens = getAllTokens();
  tokens[token] = tokenData;
  sessionStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(tokens));
  
  return token;
};

/**
 * Retrieves all stored tokens
 */
const getAllTokens = (): Record<string, SessionToken> => {
  const stored = sessionStorage.getItem(TOKEN_STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
};

/**
 * Validates a session token
 */
export const validateSessionToken = (token: string): {
  valid: boolean;
  reason?: string;
  tokenData?: SessionToken;
} => {
  if (!token) {
    return { valid: false, reason: 'No token provided' };
  }
  
  const tokens = getAllTokens();
  const tokenData = tokens[token];
  
  if (!tokenData) {
    return { valid: false, reason: 'Token not found' };
  }
  
  const now = Date.now();
  
  if (tokenData.used) {
    return { valid: false, reason: 'Token already used' };
  }
  
  if (now > tokenData.expiresAt) {
    return { valid: false, reason: 'Token expired' };
  }
  
  return { valid: true, tokenData };
};

/**
 * Marks a token as used
 */
export const markTokenAsUsed = (token: string): void => {
  const tokens = getAllTokens();
  if (tokens[token]) {
    tokens[token].used = true;
    sessionStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(tokens));
  }
};

/**
 * Checks if a token needs refreshing
 */
export const shouldRefreshToken = (token: string): boolean => {
  const tokens = getAllTokens();
  const tokenData = tokens[token];
  
  if (!tokenData) return true;
  
  const now = Date.now();
  const timeElapsed = now - tokenData.createdAt;
  
  return timeElapsed >= TOKEN_REFRESH_THRESHOLD_MS;
};

/**
 * Cleans up expired tokens
 */
export const cleanupExpiredTokens = (): void => {
  const tokens = getAllTokens();
  const now = Date.now();
  
  const activeTokens = Object.entries(tokens).reduce((acc, [key, value]) => {
    if (now <= value.expiresAt) {
      acc[key] = value;
    }
    return acc;
  }, {} as Record<string, SessionToken>);
  
  sessionStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(activeTokens));
};

/**
 * Gets time remaining for a token in seconds
 */
export const getTokenTimeRemaining = (token: string): number => {
  const tokens = getAllTokens();
  const tokenData = tokens[token];
  
  if (!tokenData) return 0;
  
  const now = Date.now();
  const remaining = tokenData.expiresAt - now;
  
  return Math.max(0, Math.floor(remaining / 1000));
};

/**
 * Formats time remaining as MM:SS
 */
export const formatTokenTimeRemaining = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};
