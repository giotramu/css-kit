declare type ColorScheme = 'light' | 'dark';
interface ResetColorScheme {
  html: Document['documentElement'];
  storage: Storage;
}
interface ReadUserPreferences {
  html: Document['documentElement'];
  storage: Storage;
}
interface SetColorScheme {
  scheme: ColorScheme;
  html: Document['documentElement'];
  storage: Storage;
}
