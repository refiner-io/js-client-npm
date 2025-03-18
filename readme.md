# Refiner.io NPM Client Wrapper

This package provides a simple installation of the [Refiner](https://refiner.io) JavaScript Web-Client to launch in-app surveys for web applications. 

The package automatically injects the Refiner JavaScript Web-Client and exports an object that wraps all [client methods](https://refiner.io/docs/kb/javascript-client/reference/). All method calls are queued end executed once the client is fully loaded.

## Installation

```sh
npm install refiner-js;
```

## Usage

### Quick installation 

Copy & paste the code below into your applications and replace the static value ‘REFINER_PROJECT_ID’. You can find your project ID in the your Refiner dashboard under "Settings > Installation".

That's it! The Refiner JavaScript is now loaded and communicating with the Refiner API.

```js
import _refiner from 'refiner-js';

_refiner('setProject', 'REFINER_PROJECT_ID');
```

### Identify your users (recommended)

Refiner unleashes its full power when you identify your users and we highly recommend that you take the time to set up user identification.

Identifying your users allows you to better target specific accounts, sync survey responses with your user data, trigger user specific automations etc.

Identifying a user is easy with our Javascript client. All you need to do is to call a identifyUser method once our Javasript client was loaded.

```js
_refiner('identifyUser', {
  id: 'USER-ID-ABC-123', // Each user needs an ID or email address
  email: 'jane@awesome.com', // Each user needs an ID or email address
  name: 'Jane Doe', // The full name of the user
});
```

Check out our [documentation](https://refiner.io/docs/) for more info.
