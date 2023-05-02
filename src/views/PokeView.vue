<script setup>

// import { ref } from 'vue';
// import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import { useGetData } from '@/composables/getData';
import { useFavoritesStore } from '@/store/favorites'

const route = useRoute();
const router = useRouter();
const useFavorites = useFavoritesStore();


const { add, findPoke } = useFavorites;

// const pokemon = ref({})

const back = () => {
    router.push('/pokemons')
}

const { getData, data, loading, error } = useGetData()
const url = ('https://pokeapi.co/api/v2/pokemon/')

// const getData = async () => {
//     const url = ('https://pokeapi.co/api/v2/pokemon/')
//     try {
//         const { data } = await axios.get(url + `${route.params.pokeName}`);
//         pokemon.value = data;
//         console.log(data.name);
//     }
//     catch (err) {
//         console.log(err)
//         pokemon.value = null;
//     }
// }

getData(url + `${route.params.pokeName}`);

</script>

<template>
    <p v-if="loading">Loading...</p>
    <div v-if="error" class="alert alert-danger mt-2"> Pokemon not found</div>
    <div v-if="data">
        <h1> Poke name: {{ $route.params.pokeName }}</h1>
        <img :src='data.sprites?.front_default' alt='Pokemon image' />
        <button 
            class="btn btn-primary mb-2" 
            :disabled="findPoke(data.name)"
            @click="add(data)">
                Add to favorites
        </button>
    </div>
    <button class="btn btn-outline-info btn-sm" @click="back">GO BACK</button>
</template>