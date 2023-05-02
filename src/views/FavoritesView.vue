<script setup>
import { useFavoritesStore } from '@/store/favorites'
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';

const useFavorites = useFavoritesStore()
const { favorites } = storeToRefs(useFavorites)
const { remove } = useFavorites;

</script>

<template>
    <h1>Favorites</h1>
    <h2 v-if="favorites.length === 0">No favorites added yet</h2>
    <ul v-else v-for="favorite in favorites" :key="useFavoritesStore.id" class="list-group">
        <li class="flex flex-row list-group-item">
            <div>
                {{ favorite.name }}
            </div>
            <div>
                <router-link class="btn btn-info m-2" :to="`/pokemons/${favorite.name}`">
                    More info
                </router-link>
                <button class="btn btn-danger m-2" @click="remove(favorite.id)">
                    Remove
                </button>
            </div>
        </li>
    </ul>
</template>