import { DefaultTheme } from 'react-native-paper';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Modern, startup-inspired color palette
export const COLORS = {
  // Brand colors – elegant and modern
  primary: '#6C5DD3',        // Violet-indigo (modern, calm, powerful)
  primaryLight: '#9E8CFC',   // Light violet
  primaryDark: '#4737A8',    // Deep indigo
  primaryGradient: ['#6C5DD3', '#4737A8'],

  // Secondary colors – soft contrast tones
  secondary: '#FF6B6B',      // Coral red (attention-grabbing)
  secondaryLight: '#FF9C9C',
  secondaryDark: '#D94C4C',
  secondaryGradient: ['#FF6B6B', '#D94C4C'],

  // Accent colors – cool and futuristic
  accent: '#00C9A7',         // Aqua-teal (modern tech accent)
  accentLight: '#67E6C9',
  accentDark: '#009B82',
  accentGradient: ['#00C9A7', '#009B82'],

  // Neutrals – clean, modern background tones
  background: '#F4F6F8',     // Light grayish white
  surfaceLight: '#FFFFFF',
  surface: '#F0F2F5',
  black: '#1C1C1E',          // Soft black
  gray: '#6E6E73',           // Apple-style system gray
  lightGray: '#E5E5EA',
  darkGray: '#3A3A3C',

  // Status colors
  success: '#4CAF50',
  successLight: '#A5D6A7',
  error: '#FF4D4F',
  errorLight: '#FFBABA',
  warning: '#FFC107',
  warningLight: '#FFE082',
  info: '#2196F3',
  infoLight: '#90CAF9',

  // UI elements
  card: '#FFFFFF',
  border: '#E0E0E0',
  divider: '#E5E5EA',
  placeholder: '#9E9E9E',
  disabled: '#BDBDBD',
  disabledBackground: '#F5F5F5',
  backdrop: 'rgba(0, 0, 0, 0.4)',
  overlay: 'rgba(0, 0, 0, 0.2)',

  // Social media
  google: '#DB4437',
  facebook: '#4267B2',
  apple: '#000000',
};

// Typography
export const FONTS = {
  heading1: {
    fontFamily: 'Roboto-Bold',
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0.25,
  },
  heading2: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: 0,
  },
  heading3: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    lineHeight: 26,
    letterSpacing: 0.15,
  },
  heading4: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  caption: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  button: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  overline: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
};

// Spacing
export const SIZES = {
  base: 8,
  font: 14,
  radius: 12,
  radiusLg: 16,
  radiusSm: 8,
  radiusXs: 4,
  radiusRound: 50,
  padding: 24,
  paddingSm: 16,
  paddingXs: 8,
  paddingLg: 32,
  paddingXl: 40,
  margin: 20,
  marginSm: 12,
  marginXs: 8,
  marginLg: 32,
  marginXl: 40,

  borderWidth: 1,
  borderWidthThick: 2,

  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 18,
  h4: 16,
  h5: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  width,
  height,
};

// Shadows
export const SHADOWS = {
  none: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  small: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 5,
  },
  large: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  extraLarge: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 12,
  },
  colored: {
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 7,
  },
};

// Animation timing
export const ANIMATION = {
  fast: 200,
  medium: 300,
  slow: 500,
  verySlow: 800,
};

// React Native Paper Theme
export const paperTheme = {
  ...DefaultTheme,
  dark: false,
  roundness: SIZES.radiusSm,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary,
    accent: COLORS.accent,
    background: COLORS.background,
    surface: COLORS.surfaceLight,
    text: COLORS.black,
    error: COLORS.error,
    disabled: COLORS.disabled,
    placeholder: COLORS.placeholder,
    backdrop: COLORS.backdrop,
    notification: COLORS.error,
    onSurface: COLORS.black,
    card: COLORS.card,
    border: COLORS.border,
  },
  fonts: {
    regular: { fontFamily: 'Roboto-Regular', fontWeight: 'normal' },
    medium: { fontFamily: 'Roboto-Medium', fontWeight: 'normal' },
    light: { fontFamily: 'Roboto-Light', fontWeight: 'normal' },
    thin: { fontFamily: 'Roboto-Thin', fontWeight: 'normal' },
    bodyLarge: { fontFamily: 'Roboto-Regular', fontWeight: 'normal' },
    bodyMedium: { fontFamily: 'Roboto-Regular', fontWeight: 'normal' },
    bodySmall: { fontFamily: 'Roboto-Regular', fontWeight: 'normal' },
    labelLarge: { fontFamily: 'Roboto-Medium', fontWeight: 'normal' },
    labelMedium: { fontFamily: 'Roboto-Medium', fontWeight: 'normal' },
    labelSmall: { fontFamily: 'Roboto-Medium', fontWeight: 'normal' },
    titleLarge: { fontFamily: 'Roboto-Bold', fontWeight: 'normal' },
    titleMedium: { fontFamily: 'Roboto-Bold', fontWeight: 'normal' },
    titleSmall: { fontFamily: 'Roboto-Bold', fontWeight: 'normal' },
    displayLarge: { fontFamily: 'Roboto-Bold', fontWeight: 'normal' },
    displayMedium: { fontFamily: 'Roboto-Bold', fontWeight: 'normal' },
    displaySmall: { fontFamily: 'Roboto-Bold', fontWeight: 'normal' },
    headlineLarge: { fontFamily: 'Roboto-Bold', fontWeight: 'normal' },
    headlineMedium: { fontFamily: 'Roboto-Bold', fontWeight: 'normal' },
    headlineSmall: { fontFamily: 'Roboto-Bold', fontWeight: 'normal' },
  },
};

export default {
  COLORS,
  FONTS,
  SIZES,
  SHADOWS,
  ANIMATION,
  paperTheme,
};
