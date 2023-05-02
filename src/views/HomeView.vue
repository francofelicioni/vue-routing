<script setup>
import { useCounterStore } from '@/store/counter.js';
import { storeToRefs } from 'pinia';

const useCounter = useCounterStore()
const {increment} = useCounter
const { count, double } = storeToRefs(useCounter)
</script>

<template>
  <main>
    <h1>Home counter: {{ count }}</h1>
    <button @click="increment" >INCREASE</button>
    <h2>Double {{ double }}</h2>
  </main>
</template>
