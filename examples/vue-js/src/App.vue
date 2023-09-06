<template>
    <main>
      Refiner — Vue.js demo
    </main>
</template>

<script setup>
import { onMounted } from 'vue'
import _refiner from 'refiner-js';

  onMounted(() => {
    _refiner('setProject', 'XYZ-XYZ-XYZ-XYZ-XYZ');

    _refiner('identifyUser', {
        id: 'USER-ID-XYZ-123',
        email: 'jane@awesome.com',
        name: 'Jane Doe',
      });

      _refiner('showForm', 'XYZ-XYZ-XYZ-XYZ-XYZ', true);
  })
</script>