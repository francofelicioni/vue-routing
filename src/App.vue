<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>



<template>
  <nav class="navbar bg-dark navbar-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        PokeAPI
      </router-link>
      <div>
        <!-- Esta es otra forma de indicar clases activas, en este caso se debe ingresar a cada <router-link></router-link> -->
        <!-- <router-link active-class="active" class="btn btn-outline-primary me-2" type="button" to="/">Home</router-link> -->
        <router-link class="btn btn-outline-primary me-2" type="button" to="/">Home</router-link>
        <!-- <router-link active-class="active" class="btn btn-outline-primary" type="button" to="/pokemons">Pokemons</router-link> -->
        <router-link class="btn btn-outline-primary me-2" type="button" to="/pokemons">Pokemons</router-link>
        <router-link class="btn btn-outline-primary" type="button" to="/favorites">Favorites</router-link>
      </div>
    </div>
  </nav>

  <div class="container text-center">
    <RouterView />
  </div>
</template>

