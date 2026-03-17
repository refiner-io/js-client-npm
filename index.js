'use strict';

let refinerClientAlreadyLoaded = false;
let loadPromise = null;  // Cache so all callers share the same promise

function loadRefinerClient() {
  if (loadPromise) return loadPromise;

  loadPromise = new Promise(function(resolve, reject) {
    const script = document.createElement('script');
    script.src = 'https://js.refiner.io/v001/client.js';

    script.onload = function() {
      refinerClientAlreadyLoaded = true;
      resolve();
    }

    script.onerror = function(event) {
        const errorDetails = event && event.target ?
            `URL: ${event.target.src}, Type: ${event.type}` :
            'Unknown error';
        reject(new Error(`Could not load Refiner client. ${errorDetails}`));
    }

    document.head.appendChild(script);
  });

  return loadPromise;
}

window._refinerQueue = window._refinerQueue || [];
window._refiner = function() {
  let p = Promise.resolve();
  if (!refinerClientAlreadyLoaded) {
      p = loadRefinerClient();
  }
  _refinerQueue.push(arguments);
  return p;
}

window._refiner('setInstallationMethod', 'npm').catch(function(err) {
  console.warn('[Refiner] Client script failed to load:', err.message);
});

module.exports = window._refiner;
