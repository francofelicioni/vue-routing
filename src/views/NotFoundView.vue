<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const back = () => {
    router.push('/')
}

</script>

<template>
    <div class="container">
        <h1 class="py-4">Not Found!</h1>
        <button @click="back" class="btn btn-outline-danger">GO TO HOME</button>
    </div>
</template>