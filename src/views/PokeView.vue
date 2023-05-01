<script setup>

import { ref } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const pokemon = ref({})

const back = () => {
    router.push('/pokemons')
}

const getData = async () => {
    const url = ('https://pokeapi.co/api/v2/pokemon/')

    try {
        const { data } = await axios.get(url + `${route.params.pokeName}`);
        pokemon.value = data;
        console.log(data.name);
    }
    catch (err) {
        console.log(err)
        pokemon.value = null;
    }

}

getData();

</script>

<template>
    <div v-if="pokemon">
        <h1> Poke name: {{ $route.params.pokeName }}</h1>
        <img :src='pokemon.sprites?.front_default' alt='Pokemon image' />
    </div>
    <h2 class="py-4" v-else>
        Pokemon not found!
    </h2>
    <button class="btn btn-outline-info btn-sm" @click="back">GO BACK</button>
</template>