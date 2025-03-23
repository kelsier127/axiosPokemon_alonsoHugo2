import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonesView from '@/views/PokemonesView.vue'
import PokemonEspecificoView from '@/views/PokemonEspecificoView.vue'
import CarritoView from '@/views/CarritoView.vue'
import TaskList from '@/views/TaskList.vue'
import PersonaGamesView from '@/views/PersonaGamesView.vue'
import PersonaSingleView from '@/views/PersonaSingleView.vue'

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
    {
      path: '/taskList',
      name: 'taskList',
      component: TaskList
    },
    {
      path: '/personaGames',
      name: 'personaGames',
      component: PersonaGamesView,
      children: [{
        path: ':id',
        component: PersonaSingleView,
        props: route => ({ id:route.params.id }),
      }]
    },
    //aqui añadir vistas
  ],
})

export default router
