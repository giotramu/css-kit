(function runColorSchemeSwitcher(window: Window): void {
  const {document, localStorage, matchMedia} = window;
  const {addEventListener, dispatchEvent, documentElement} = document;

  addEventListener(
    'DOMContentLoaded',
    () => {
      const triggers = {
        set: document.querySelector('[data-ck-trigger="set-color-scheme"]'),
        unset: document.querySelector('[data-ck-trigger="unset-color-scheme"]')
      };

      initColorSchemeSwitcher({
        emit: dispatchEvent,
        htmlRoot: documentElement,
        mediaQuery: matchMedia,
        storage: localStorage,
        triggers
      });
    },
    false
  );
})(window);

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

function initColorSchemeSwitcher({
  emit,
  htmlRoot,
  mediaQuery,
  storage,
  triggers
}: ColorSchemeInterface): void {
  resetColorScheme({
    emit,
    htmlRoot,
    mediaQuery,
    storage
  });

  if (triggers.set === null) {
    return;
  }

  triggers.set.addEventListener(
    'click',
    () => {
      const {colorScheme} = htmlRoot.dataset;

      setColorScheme({
        emit,
        htmlRoot,
        scheme: switchColorScheme(colorScheme),
        storage
      });
    },
    false
  );

  if (triggers.unset === null) {
    return;
  }

  triggers.unset.addEventListener(
    'click',
    () =>
      unsetColorScheme({
        emit,
        htmlRoot,
        storage
      }),
    false
  );
}

interface ResetColorSchemeInterface {
  emit: Document['dispatchEvent'];
  htmlRoot: Document['documentElement'];
  mediaQuery: Window['matchMedia'];
  storage: Storage;
}

function resetColorScheme({
  emit,
  htmlRoot,
  mediaQuery,
  storage
}: ResetColorSchemeInterface): void {
  const initialColorScheme = readUserPreferences({
    htmlRoot,
    storage,
    mediaQuery
  });

  setColorScheme({
    emit,
    htmlRoot,
    scheme: initialColorScheme,
    storage
  });

  emit(
    new CustomEvent('ResetColorScheme', {
      detail: {colorScheme: initialColorScheme}
    })
  );
}

interface SetColorSchemeInterface {
  emit: Document['dispatchEvent'];
  htmlRoot: Document['documentElement'];
  scheme: ColorSchemeType;
  storage: Storage;
}

function setColorScheme({
  emit,
  htmlRoot,
  scheme,
  storage
}: SetColorSchemeInterface): void {
  storage.setItem('color-scheme', scheme);
  htmlRoot.dataset.colorScheme = scheme;

  emit(
    new CustomEvent('SetColorScheme', {
      detail: {colorScheme: scheme}
    })
  );
}

interface UnsetColorSchemeInterface
  extends Omit<SetColorSchemeInterface, 'scheme'> {}

function unsetColorScheme({
  emit,
  htmlRoot,
  storage
}: UnsetColorSchemeInterface): void {
  htmlRoot.removeAttribute('data-color-scheme');
  storage.removeItem('color-scheme');

  emit(
    new CustomEvent('UnsetColorScheme', {
      detail: {colorScheme: null}
    })
  );
}

interface ReadUserPreferencesInterface {
  htmlRoot: Document['documentElement'];
  mediaQuery: Window['matchMedia'];
  storage: Storage;
}

function readUserPreferences({
  htmlRoot,
  mediaQuery,
  storage
}: ReadUserPreferencesInterface): ColorSchemeType {
  /**
   * 1. Read `html` tag, and ignore the rest;
   * 2. Read the `color-scheme` key from browser local storage, and ignore the rest;
   * 3. Finally, read the `prefers-color-scheme` media queries, and if the prefers-color-scheme is `light` or `no-preferences`, returns `light`.
   */
  return (
    readSchemeFromHtmlRoot(htmlRoot) ??
    readSchemeFromStorage(storage) ??
    readSchemeFromMediaQuery(mediaQuery)
  );
}

function readSchemeFromHtmlRoot(
  htmlRoot: Document['documentElement']
): ColorSchemeType | null {
  const scheme = htmlRoot.dataset.colorScheme;
  return scheme === 'light' || scheme === 'dark' ? scheme : null;
}

function readSchemeFromStorage(storage: Storage): ColorSchemeType | null {
  const prevSchemePreference = storage.getItem('color-scheme');
  return prevSchemePreference === 'light' || prevSchemePreference === 'dark'
    ? prevSchemePreference
    : null;
}

function readSchemeFromMediaQuery(
  mediaQuery: Window['matchMedia']
): ColorSchemeType {
  const darkSchemePreference = mediaQuery(`(prefers-color-scheme: dark)`)
    .matches;
  return darkSchemePreference ? 'dark' : 'light';
}

type ColorSchemeType = 'light' | 'dark';

function switchColorScheme(scheme: unknown): ColorSchemeType {
  return scheme === 'light' ? 'dark' : 'light';
}
