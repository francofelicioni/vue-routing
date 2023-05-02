import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritesStore = defineStore('favorites', ()=> {

    const favorites = ref([])

    if (localStorage.getItem('favoritesPokes')) {
        favorites.value = JSON.parse(localStorage.getItem('favoritesPokes'))
    }

    const add = (poke) => {
        favorites.value.push(poke)
        localStorage.setItem('favoritesPokes', JSON.stringify(favorites.value))
    }

    const remove = (id) => {
        favorites.value = favorites.value.filter (item => item.id !== id)
        localStorage.setItem('favoritesPokes', JSON.stringify(favorites.value))
    }

    const findPoke = name =>  favorites.value.find (item => item.name === name)
    

    return {
        favorites,
        add,
        remove,
        findPoke
    }
})