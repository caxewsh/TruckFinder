export const colors = {
  // Couleurs principales
  primary: '#DD7230',    // Orange vif
  secondary: '#F4C95D',  // Jaune doré
  accent: '#E7E393',     // Jaune pâle
  dark: '#2E1F27',       // Noir bleuté
  medium: '#854D27',     // Marron
  
  // Nuances de gris
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  gray: '#9E9E9E',       // Gris plus visible pour les onglets inactifs
  darkGray: '#757575',   // Gris plus foncé pour le texte secondaire
  
  // États
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FFC107',
  info: '#2196F3',
  
  // Arrière-plans
  background: '#FFFFFF',
} as const;

export type ColorName = keyof typeof colors;
