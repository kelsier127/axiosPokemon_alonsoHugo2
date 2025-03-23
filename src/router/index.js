import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonesView from '@/views/PokemonesView.vue'
import PokemonEspecificoView from '@/views/PokemonEspecificoView.vue'
import CarritoView from '@/views/CarritoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/pokemones',
      name: 'pokemones',
      component: PokemonesView,
    },
    {
      path: '/pokemones/:id',
      name: 'pokemonEspecifico',
      component: PokemonEspecificoView,
      props: route => ({ id:route.params.id }),
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: CarritoView,
    },
    //aqui añadir vistas
  ],
})

export default router
