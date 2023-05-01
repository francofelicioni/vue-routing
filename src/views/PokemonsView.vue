<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { RouterLink } from 'vue-router'

const pokemons = ref([]);

const getData = async () => {
    const url = ('https://pokeapi.co/api/v2/pokemon')
    try {
        const { data } = await axios.get(url)
        // console.log(data.results)
        pokemons.value = await data.results;
        // console.log(pokemons)
    }
    catch (err) {
        console.log(err)
    }
}

getData();
console.log('pokemons', pokemons)

</script>
    
<template>
    <h1>Pokemons</h1>
    <div>
        <ul>
            <li v-for="pokemon in pokemons">
                <router-link :to="`/pokemons/${pokemon.name}`">
                    {{ pokemon.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>