export const colors = {
  ink: '#1C1B29',
  inkSoft: '#3A3947',
  background: '#FBF8F4',
  surface: '#FFFFFF',
  border: '#EAE3D8',
  accent: '#C9A66B',
  accentDark: '#A9814B',
  muted: '#6B6B76',
  onAccent: '#1C1B29',
  onInk: '#FBF8F4',
  success: '#4C7A5E',
  danger: '#B3523F',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const radii = {
  sm: 8,
  md: 14,
  lg: 22,
  pill: 999,
};

export const typography = {
  display: { fontSize: 30, fontWeight: '700' as const, lineHeight: 36 },
  h1: { fontSize: 24, fontWeight: '700' as const, lineHeight: 30 },
  h2: { fontSize: 19, fontWeight: '700' as const, lineHeight: 25 },
  body: { fontSize: 15, fontWeight: '400' as const, lineHeight: 22 },
  bodySmall: { fontSize: 13, fontWeight: '400' as const, lineHeight: 19 },
  label: { fontSize: 12, fontWeight: '600' as const, lineHeight: 16, letterSpacing: 0.6 },
};
