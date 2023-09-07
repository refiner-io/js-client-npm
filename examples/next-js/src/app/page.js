// Refiner requires the 'use client' directive to be present at the top of the file, because it is a client-side library.
// To use Refiner on the server, please use the API directly: https://refiner.io/docs/api
'use client' 

import { useEffect } from 'react';
import _refiner from 'refiner-js';


if (typeof window !== 'undefined') {
	_refiner('setProject', 'XYZ-XYZ-XYZ-XYZ-XYZ');
}

export default function Home() {

  useEffect(() => {
      _refiner('identifyUser', {
        id: 'USER-ID-XYZ-123',
        email: 'jane@awesome.com',
        name: 'Jane Doe',
      });

      _refiner('showForm', 'XYZ-XYZ-XYZ-XYZ-XYZ', true);
  }, []);


  return (
    <main>
      Refiner — Next 13 demo
    </main>
  )
}
