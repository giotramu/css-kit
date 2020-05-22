/* eslint-disable @typescript-eslint/explicit-function-return-type */

(function (doc) {
  doc.addEventListener(
    'DOMContentLoaded',
    () => {
      initIconSwitch();
      initIndeterminates();
      initDialog();
    },
    false
  );

  function initIconSwitch() {
    doc.addEventListener('SetColorScheme', evt => {
      const colorScheme = evt.detail.colorScheme;
      const colorSchemeTrigger = doc.querySelector(
        '.icon-switch[data-ck-trigger="set-color-scheme"]'
      );

      if (colorScheme === 'dark') {
        colorSchemeTrigger.classList.remove('icon-switch-after');
        return;
      }

      colorSchemeTrigger.classList.add('icon-switch-after');
    });

    doc.addEventListener('ResetColorScheme', () =>
      // eslint-disable-next-line no-console
      console.log('The color scheme has been reset.')
    );
  }

  function initIndeterminates() {
    const indeterminates = doc.querySelectorAll('[data-indeterminate]');
    [].forEach.call(indeterminates, item => (item.indeterminate = true));
  }

  function initDialog() {
    const dialogTrigger = doc.querySelector('#DialogTrigger');
    const dialogClose = doc.querySelector('#DialogClose');

    dialogClose.addEventListener(
      'click',
      evt => {
        const button = evt.target;
        button.closest('dialog').close();
      },
      false
    );

    dialogTrigger.addEventListener(
      'click',
      evt => {
        if (typeof HTMLDialogElement === 'function') {
          const name = evt.target.dataset.dialog;
          const dialog = doc.querySelector(`dialog[data-dialog='${name}']`);
          dialog.showModal();
          return;
        }

        alert(`Your browser doesn't support HTML tag "dialog" yet.`);
      },
      false
    );
  }
})(window.document);
