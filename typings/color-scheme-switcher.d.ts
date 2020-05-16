declare enum ColorScheme {
  'dark' = 1,
  'light' = 2,
  'none' = -1
}
interface ReadColorPreferences {
  colorScheme: ColorScheme;
  supports: boolean;
}
interface SetColorScheme {
  colorEnum: ColorScheme;
  html: Document['documentElement'];
  storage: Storage;
}
interface UnsetColorScheme {
  html: Document['documentElement'];
  storage: Storage;
}
