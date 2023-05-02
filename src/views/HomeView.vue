<script setup>
import { useCounterStore } from '@/store/counter.js';

const useCounter = useCounterStore()
</script>

<template>
  <main>
    <h1>Home counter: {{ useCounter.count }}</h1>
    <button @click="useCounter.increment" >INCREASE</button>
    <h2>Double {{ useCounter.double }}</h2>
  </main>
</template>
