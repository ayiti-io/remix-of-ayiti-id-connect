export const BLUETOOTH_STRINGS = {
  ht: {
    title: "Konekte pa Bluetooth pou kontinye",
    subtitle: "Ou dwe konekte ak 'Konekte rezo Ayiti.io' pou aksede sistèm nan",
    scan: "Skan & Konekte",
    manual: "Mwen konekte deja",
    step1: "1. Limen Bluetooth ou",
    step2: "2. Chèche 'Konekte rezo Ayiti.io'",
    step3: "3. Touye bouton 'Skan & Konekte'",
    scanning: "Ap skan...",
    connecting: "Ap konekte...",
    connected: "Konekte avèk siksè!",
    error: "Erè koneksyon",
    retry: "Eseye ankò",
    notSupported: "Navigatè sa a pa sipòte Bluetooth",
    manualTitle: "Konekte manyèlman",
    manualStep1: "1. Louvri Settings → Bluetooth",
    manualStep2: "2. Konekte ak 'Konekte rezo Ayiti.io'",
    manualStep3: "3. Tounen isit la epi peze 'Mwen konekte deja'",
    continue: "Kontinye"
  },
  en: {
    title: "Bluetooth Connection Required",
    subtitle: "You must connect to 'Konekte rezo Ayiti.io' to access the system",
    scan: "Scan & Connect",
    manual: "I'm already connected",
    step1: "1. Turn on Bluetooth",
    step2: "2. Look for 'Konekte rezo Ayiti.io'",
    step3: "3. Tap 'Scan & Connect' button",
    scanning: "Scanning...",
    connecting: "Connecting...",
    connected: "Connected successfully!",
    error: "Connection error",
    retry: "Try again",
    notSupported: "This browser doesn't support Bluetooth",
    manualTitle: "Connect manually",
    manualStep1: "1. Open Settings → Bluetooth",
    manualStep2: "2. Connect to 'Konekte rezo Ayiti.io'",
    manualStep3: "3. Return here and tap 'I'm already connected'",
    continue: "Continue"
  },
  fr: {
    title: "Connectez-vous via Bluetooth pour continuer",
    subtitle: "Vous devez vous connecter à 'Konekte rezo Ayiti.io' pour accéder au système",
    scan: "Scanner & Connecter",
    manual: "Je suis déjà connecté",
    step1: "1. Activez Bluetooth",
    step2: "2. Recherchez 'Konekte rezo Ayiti.io'",
    step3: "3. Appuyez sur 'Scanner & Connecter'",
    scanning: "Scan en cours...",
    connecting: "Connexion...",
    connected: "Connecté avec succès!",
    error: "Erreur de connexion",
    retry: "Réessayer",
    notSupported: "Ce navigateur ne supporte pas Bluetooth",
    manualTitle: "Connexion manuelle",
    manualStep1: "1. Ouvrez Paramètres → Bluetooth",
    manualStep2: "2. Connectez-vous à 'Konekte rezo Ayiti.io'",
    manualStep3: "3. Revenez ici et appuyez sur 'Je suis déjà connecté'",
    continue: "Continuer"
  },
  nl: {
    title: "Verbind via Bluetooth om verder te gaan",
    subtitle: "U moet verbinding maken met 'Konekte rezo Ayiti.io' om toegang te krijgen",
    scan: "Scannen & Verbinden",
    manual: "Ik ben al verbonden",
    step1: "1. Schakel Bluetooth in",
    step2: "2. Zoek naar 'Konekte rezo Ayiti.io'",
    step3: "3. Tik op 'Scannen & Verbinden'",
    scanning: "Scannen...",
    connecting: "Verbinden...",
    connected: "Succesvol verbonden!",
    error: "Verbindingsfout",
    retry: "Opnieuw proberen",
    notSupported: "Deze browser ondersteunt geen Bluetooth",
    manualTitle: "Handmatig verbinden",
    manualStep1: "1. Open Instellingen → Bluetooth",
    manualStep2: "2. Verbind met 'Konekte rezo Ayiti.io'",
    manualStep3: "3. Kom terug en tik op 'Ik ben al verbonden'",
    continue: "Doorgaan"
  }
};

export type Language = keyof typeof BLUETOOTH_STRINGS;

export const getStrings = (lang: Language = 'en') => {
  return BLUETOOTH_STRINGS[lang] || BLUETOOTH_STRINGS.en;
};
