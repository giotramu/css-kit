interface ColorSchemeInterface {
    emit: Document['dispatchEvent'];
    htmlRoot: Document['documentElement'];
    mediaQuery: Window['matchMedia'];
    triggers: TriggersInterface;
    storage: Storage;
}
interface TriggersInterface {
    set: Element | null;
    unset: Element | null;
}
declare function initColorSchemeSwitcher({ emit, htmlRoot, mediaQuery, storage, triggers }: ColorSchemeInterface): void;
interface ResetColorSchemeInterface {
    emit: Document['dispatchEvent'];
    htmlRoot: Document['documentElement'];
    mediaQuery: Window['matchMedia'];
    storage: Storage;
}
declare function resetColorScheme({ emit, htmlRoot, mediaQuery, storage }: ResetColorSchemeInterface): void;
interface SetColorSchemeInterface {
    emit: Document['dispatchEvent'];
    htmlRoot: Document['documentElement'];
    scheme: ColorSchemeType;
    storage: Storage;
}
declare function setColorScheme({ emit, htmlRoot, scheme, storage }: SetColorSchemeInterface): void;
interface UnsetColorSchemeInterface extends Omit<SetColorSchemeInterface, 'scheme'> {
}
declare function unsetColorScheme({ emit, htmlRoot, storage }: UnsetColorSchemeInterface): void;
interface ReadUserPreferencesInterface {
    htmlRoot: Document['documentElement'];
    mediaQuery: Window['matchMedia'];
    storage: Storage;
}
declare function readUserPreferences({ htmlRoot, mediaQuery, storage }: ReadUserPreferencesInterface): ColorSchemeType;
declare function readSchemeFromHtmlRoot(htmlRoot: Document['documentElement']): ColorSchemeType | null;
declare function readSchemeFromStorage(storage: Storage): ColorSchemeType | null;
declare function readSchemeFromMediaQuery(mediaQuery: Window['matchMedia']): ColorSchemeType;
declare type ColorSchemeType = 'light' | 'dark';
declare function switchColorScheme(scheme: unknown): ColorSchemeType;
