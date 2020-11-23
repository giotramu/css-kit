"use strict";
(function runColorSchemeSwitcher(window) {
    const { document, localStorage, matchMedia } = window;
    const { addEventListener, dispatchEvent, documentElement } = document;
    addEventListener('DOMContentLoaded', () => {
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
    }, false);
})(window);
function initColorSchemeSwitcher({ emit, htmlRoot, mediaQuery, storage, triggers }) {
    resetColorScheme({
        emit,
        htmlRoot,
        mediaQuery,
        storage
    });
    if (triggers.set === null) {
        return;
    }
    triggers.set.addEventListener('click', () => {
        const { colorScheme } = htmlRoot.dataset;
        setColorScheme({
            emit,
            htmlRoot,
            scheme: switchColorScheme(colorScheme),
            storage
        });
    }, false);
    if (triggers.unset === null) {
        return;
    }
    triggers.unset.addEventListener('click', () => unsetColorScheme({
        emit,
        htmlRoot,
        storage
    }), false);
}
function resetColorScheme({ emit, htmlRoot, mediaQuery, storage }) {
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
    emit(new CustomEvent('ResetColorScheme', {
        detail: { colorScheme: initialColorScheme }
    }));
}
function setColorScheme({ emit, htmlRoot, scheme, storage }) {
    storage.setItem('color-scheme', scheme);
    htmlRoot.dataset.colorScheme = scheme;
    emit(new CustomEvent('SetColorScheme', {
        detail: { colorScheme: scheme }
    }));
}
function unsetColorScheme({ emit, htmlRoot, storage }) {
    htmlRoot.removeAttribute('data-color-scheme');
    storage.removeItem('color-scheme');
    emit(new CustomEvent('UnsetColorScheme', {
        detail: { colorScheme: null }
    }));
}
function readUserPreferences({ htmlRoot, mediaQuery, storage }) {
    var _a, _b;
    /**
     * 1. Read `html` tag, and ignore the rest;
     * 2. Read the `color-scheme` key from browser local storage, and ignore the rest;
     * 3. Finally, read the `prefers-color-scheme` media queries, and if the prefers-color-scheme is `light` or `no-preferences`, returns `light`.
     */
    return ((_b = (_a = readSchemeFromHtmlRoot(htmlRoot)) !== null && _a !== void 0 ? _a : readSchemeFromStorage(storage)) !== null && _b !== void 0 ? _b : readSchemeFromMediaQuery(mediaQuery));
}
function readSchemeFromHtmlRoot(htmlRoot) {
    const scheme = htmlRoot.dataset.colorScheme;
    return scheme === 'light' || scheme === 'dark' ? scheme : null;
}
function readSchemeFromStorage(storage) {
    const prevSchemePreference = storage.getItem('color-scheme');
    return prevSchemePreference === 'light' || prevSchemePreference === 'dark'
        ? prevSchemePreference
        : null;
}
function readSchemeFromMediaQuery(mediaQuery) {
    const darkSchemePreference = mediaQuery(`(prefers-color-scheme: dark)`)
        .matches;
    return darkSchemePreference ? 'dark' : 'light';
}
function switchColorScheme(scheme) {
    return scheme === 'light' ? 'dark' : 'light';
}
