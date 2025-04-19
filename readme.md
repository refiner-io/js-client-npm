# Refiner NPM Client Wrapper

This repository hosts the official Refiner NPM wrapper. The wrapper loads the Refiner JavaScript Web-Client to your application and gives you access to all [client methods](https://refiner.io/docs/kb/javascript-client/reference/). 

You can use the Refiner NPM client to track user data in Refiner and launch in-app surveys within your application. All method calls are queued end executed once the client is fully loaded.

Refiner is a microsurvey tool designed specifically for web and mobile applications. Collect spot-in insights from your users with perfectly timed [in-app surveys](https://refiner.io/features/in-product-microsurveys/).

With Refiner you can ask your users any question while they are using your application. Measure [customer satisfaction (CSAT)](https://refiner.io/solutions/csat/), [Net Promoter Score (NPS)](https://refiner.io/solutions/nps/), or [customer effort score (CES)](https://refiner.io/solutions/ces/), research what to built next or profile your users. Refiner supports all product feedback survey use cases and comes packed with expert-built templates that will get you started quickly.

## Installation

```sh
npm install refiner-js;
```

## Usage

The repository includes [sample implementations](https://github.com/refiner-io/js-client-npm/tree/master/examples) for Next.js and Vue.js frameworks.

Check out our [documentation](https://refiner.io/docs/kb/install-client/npm-package/) for more information on how to initalize and use the client.

### Quick installation 

Copy & paste the code below into your applications and replace the static value `PROJECT_ID`. You can find your project / environment ID in the your Refiner dashboard under `Settings > Web Client`.

The JavaScript Web-Client is now loaded and ready to communicate with the Refiner backend API.

```js
import _refiner from 'refiner-js';

_refiner('setProject', 'PROJECT_ID');
```

### Identify users (recommended)

Identifying your users with a uniqueu identifier allows you to better target specific user groups, sync survey responses with other tools, trigger user specific automations, etc. 

We recommend to [identify your users](https://refiner.io/docs/kb/javascript-client/anonymous-vs-identified-users-mode/) whenever possible.

```js
_refiner('identifyUser', {
  id: 'USER-ID-ABC-123', // Each user needs an ID or email address
  email: 'jane@awesome.com', // Each user needs an ID or email address
  name: 'Jane Doe', // The full name of the user
});
```

### All client methods

For a full list of client methods, please continue reading our [client reference](https://refiner.io/docs/kb/javascript-client/reference/).

