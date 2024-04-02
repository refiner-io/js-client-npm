'use strict';

let clientAlreadyLoaded = false;

function loadRefinerClient() {
  clientAlreadyLoaded = true;
  new Promise(function(resolve, reject) {

    const script = document.createElement('script');
    script.src = 'https://js.refiner.io/v001/client.js';

    script.onload = function() {
      resolve();
    }

    script.onerror = function() {
      reject(new Error('Could not load Refiner client.'));
    }

    document.head.appendChild(script);

  });
}

window._refinerQueue = window._refinerQueue || [];
window._refiner = function() {
  if (!clientAlreadyLoaded) {
      loadRefinerClient();
  }
  _refinerQueue.push(arguments);
}

window._refiner('setInstallationMethod', 'npm');

module.exports = window._refiner;
