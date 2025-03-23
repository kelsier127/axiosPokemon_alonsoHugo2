<script setup>
import { useRoute } from "vue-router"
import usePokemonEspecifico from "../composables/usePokemonEspecifico.js"

const route = useRoute()
const id = parseInt(route.params.id) + 1
const url = "https://pokeapi.co/api/v2/pokemon/" + id
.
const { data } = usePokemonEspecifico(url)
</script>

<template>
  <div v-if="data">
    <h1>{{ data.name.toUpperCase() }}</h1>
    <img :src="data.sprites.front_default" alt="sprite" />
    <p><strong>ID:</strong> {{ data.id }}</p>
    <p><strong>Altura:</strong> {{ data.height / 10 }} m</p>
    <p><strong>Peso:</strong> {{ data.weight / 10 }} kg</p>
    <p><strong>Tipos:</strong>
      <span v-for="(t, index) in data.types" :key="index">
        {{ t.type.name }}<span v-if="index < data.types.length - 1"> / </span>
      </span>
    </p>
  </div>

  <div v-else>
    Cargando datos del Pokémon...
  </div>
</template>

<style scoped>
img {
  width: 150px;
  margin-top: 10px;
}
</style>
