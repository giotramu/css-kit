(function (window: Window): void {
  const doc = window.document;
  const localStorage = window.localStorage;

  doc.addEventListener('DOMContentLoaded', init, false);

  function init(): void {
    const {documentElement} = doc;
    const triggers = {
      set: doc.querySelector('[data-ck="set-color-scheme"]'),
      unset: doc.querySelector('[data-ck="unset-color-scheme"]')
    };

    const userPreference = readColorPreferences(localStorage);
    setColorScheme({
      colorEnum: userPreference.colorScheme,
      html: documentElement,
      storage: localStorage
    });

    if (triggers.set === null) {
      return;
    }

    triggers.set.addEventListener(
      'click',
      () => {
        const {colorScheme} = documentElement.dataset;
        setColorScheme({
          colorEnum: switchColorScheme(colorScheme),
          html: documentElement,
          storage: localStorage
        });
      },
      false
    );

    if (triggers.unset === null) {
      return;
    }

    triggers.unset.addEventListener(
      'click',
      () => unsetColorScheme({html: documentElement, storage: localStorage}),
      false
    );
  }

  function readColorPreferences(storage: Storage): ReadColorPreferences {
    const previousSettings = storage.getItem('color-scheme');

    let colorScheme: ColorScheme = ColorScheme.none;
    let supports = false;

    switch (previousSettings) {
      case 'light':
        colorScheme = ColorScheme.light;
        break;

      case 'dark':
        colorScheme = ColorScheme.dark;
        break;

      case null:
        if (window.matchMedia(`(prefers-color-scheme: light)`).matches) {
          colorScheme = ColorScheme.light;
          supports = true;
        }

        if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
          colorScheme = ColorScheme.dark;
          supports = true;
        }

        if (
          window.matchMedia(`(prefers-color-scheme: no-preference)`).matches
        ) {
          colorScheme = ColorScheme.none;
          supports = true;
        }
        break;
    }

    return {colorScheme, supports};
  }

  function switchColorScheme(color: unknown): ColorScheme {
    switch (color) {
      case 'light':
        return ColorScheme.dark;

      case 'dark':
        return ColorScheme.light;

      default:
        return ColorScheme.none;
    }
  }

  function setColorScheme({colorEnum, html, storage}: SetColorScheme): void {
    const event = new CustomEvent('setColorScheme', {
      detail: ColorScheme[colorEnum]
    });
    html.dispatchEvent(event);

    switch (colorEnum) {
      case ColorScheme.light:
        html.dataset.colorScheme = 'light';
        storage.setItem('color-scheme', 'light');
        break;

      case ColorScheme.dark:
        html.dataset.colorScheme = 'dark';
        storage.setItem('color-scheme', 'dark');
        break;

      case ColorScheme.none:
        html.dataset.colorScheme = 'light';
        storage.setItem('color-scheme', 'light');
        break;
    }
  }

  function unsetColorScheme({html, storage}: UnsetColorScheme): void {
    const event = new CustomEvent('unsetColorScheme', {
      detail: ColorScheme[ColorScheme.none]
    });
    html.dispatchEvent(event);

    html.removeAttribute('data-color-scheme');
    storage.removeItem('color-scheme');
  }
})(window);

// --- typings
enum ColorScheme {
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
