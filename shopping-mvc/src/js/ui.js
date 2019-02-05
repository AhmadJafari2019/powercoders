/**
 * Create the controller to run the application.
 */
function domContentLoaded() {
  const inputBox = document.querySelector('input');
  inputBox.focus();
  new Controller();
}

if (document.readyState === 'loading') {
  //DOMContentLoaded has not fired yet.
  document.addEventListener('DOMContentLoaded', function () {
    domContentLoaded();
  });
} else {
  //DOMContentLoaded has fired.
  domContentLoaded();
}

