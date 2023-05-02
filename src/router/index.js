import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active', //Con esto le indicamos cual será el nombre de la clase para la ruta que se encuentre activa. Luego Boostrap en este caso, nos las pintará de azul.
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('../views/PokemonsView.vue')
    },
    {
      path: '/pokemons/:pokeName',
      name: 'poke',
      component: () => import('../views/PokeView.vue')
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/FavoritesView.vue')
    },
    {
      path: '/:patMatch(.*)*',
      name: '404',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
