'use strict';

let refinerClientAlreadyLoaded = false;

function loadRefinerClient() {
  refinerClientAlreadyLoaded = true;
  return new Promise(function(resolve, reject) {

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
  let loadPromise = Promise.resolve();
  if (!refinerClientAlreadyLoaded) {
      loadPromise = loadRefinerClient();
  }
  _refinerQueue.push(arguments);
  return loadPromise;
}

window._refiner('setInstallationMethod', 'npm');

module.exports = window._refiner;
