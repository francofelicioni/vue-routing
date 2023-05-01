<script setup>
// import axios from 'axios';
import { RouterLink } from 'vue-router';
import { useGetData } from '@/composables/getData.js';

const url = ('https://pokeapi.co/api/v2/pokemon')

const {data, getData, loading, error} = useGetData();

// data va a contener la informacion que devuelve la API

// const getData = async () => {
    //     const url = ('https://pokeapi.co/api/v2/pokemon')
//     try {
//         const { data } = await axios.get(url)
//         // console.log(data.results)
//         pokemons.value = await data.results;
//         // console.log(pokemons)
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

getData(url);

</script>
    
<template>
    <h1>Pokemons</h1>
    <p v-if="loading">Loading pokemons...</p>
    <div v-if="error" class="alert alert-danger mt-2">{{ error }}</div>
    <div v-if="data">
        <ul>
            <li v-for="pokemon in data.results">
                <router-link :to="`/pokemons/${pokemon.name}`">
                    {{ pokemon.name }}
                </router-link>
            </li>
        </ul>
        <button :disabled="!data.previous" class="btn btn-danger me-2" @click="getData(data.previous)">Previous</button>
        <button :disabled="!data.next" class="btn btn-success" @click="getData(data.next)">Next</button>
    </div>
</template>