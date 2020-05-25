"use strict";
(function (window) {
    const doc = window.document;
    const localStorage = window.localStorage;
    doc.addEventListener('DOMContentLoaded', initColorSchemeSwitcher, false);
    function initColorSchemeSwitcher() {
        const { documentElement } = doc;
        const triggers = {
            set: doc.querySelector('[data-ck-trigger="set-color-scheme"]'),
            unset: doc.querySelector('[data-ck-trigger="unset-color-scheme"]')
        };
        resetColorScheme({ html: documentElement, storage: localStorage });
        if (triggers.set === null) {
            return;
        }
        triggers.set.addEventListener('click', () => {
            const { colorScheme } = documentElement.dataset;
            setColorScheme({
                scheme: switchColorScheme(colorScheme),
                html: documentElement,
                storage: localStorage
            });
        }, false);
        if (triggers.unset === null) {
            return;
        }
        triggers.unset.addEventListener('click', () => unsetColorScheme({ html: documentElement, storage: localStorage }), false);
    }
    function resetColorScheme({ html, storage }) {
        const initialColorScheme = readUserPreferences({
            html,
            storage
        });
        setColorScheme({
            scheme: initialColorScheme,
            html,
            storage
        });
        const event = new CustomEvent('ResetColorScheme', {
            detail: { colorScheme: initialColorScheme }
        });
        doc.dispatchEvent(event);
    }
    function setColorScheme({ scheme, html, storage }) {
        storage.setItem('color-scheme', scheme);
        html.dataset.colorScheme = scheme;
        const event = new CustomEvent('SetColorScheme', {
            detail: { colorScheme: scheme }
        });
        doc.dispatchEvent(event);
    }
    function unsetColorScheme({ html, storage }) {
        html.removeAttribute('data-color-scheme');
        storage.removeItem('color-scheme');
        const event = new CustomEvent('UnsetColorScheme', {
            detail: { colorScheme: null }
        });
        doc.dispatchEvent(event);
    }
    function switchColorScheme(scheme) {
        return scheme === 'light' ? 'dark' : 'light';
    }
    function readUserPreferences({ html, storage }) {
        // 1. Read `html` tag, and ignore the rest
        if (html.dataset.colorScheme === 'light' ||
            html.dataset.colorScheme === 'dark') {
            return html.dataset.colorScheme;
        }
        // 2. Read the `color-scheme` key from browser local storage, and ignore the rest
        const prevColorScheme = storage.getItem('color-scheme');
        if (prevColorScheme === 'light' || prevColorScheme === 'dark') {
            return prevColorScheme;
        }
        // 3. Finally, read the `prefers-color-scheme` media queries
        if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
            return 'dark';
        }
        // If the local storage returns null
        // If the prefers-color-scheme is `light`
        // If the prefers-color-scheme is `no-preferences`
        return 'light';
    }
})(window);