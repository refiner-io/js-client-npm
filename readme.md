# Refiner NPM Client Wrapper

This repository hosts the official Refiner NPM wrapper. The wrapper loads the Refiner JavaScript Web-Client to your application and gives you access to all [client methods](https://refiner.io/docs/kb/javascript-client/reference/). 

You can use the Refiner NPM client to track user data in Refiner and launch in-app surveys within your application. All method calls are queued end executed once the client is fully loaded.

Refiner is a microsurvey tool designed specifically for web and mobile applications. Collect spot-in insights from your users with perfectly timed [in-app surveys](https://refiner.io/features/in-product-microsurveys/).

With Refiner you can ask your users any question while they are using your react-native app. Measure [customer satisfaction (CSAT)](https://refiner.io/solutions/csat/), [Net Promoter Score (NPS)](https://refiner.io/solutions/nps/), or [customer effort score (CES)](https://refiner.io/solutions/ces/), research what to built next or profile your users. Refiner supports all product feedback survey use cases and comes packed with expert-built templates that will get you started quickly.

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
