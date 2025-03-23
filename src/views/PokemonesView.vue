<script setup>
import { ref, watch } from "vue";
import { onMounted } from "vue";
import usePokemonData from "../composables/UsePokemonData.js";
import usePokemonSprites from "../composables/UsePokemonSprites.js";

let url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

let { data } = usePokemonData(url);
let sprites = ref([]);

watch(data, async (newValue) => {
  sprites.value = [];
  for (let pokemon of newValue) {
    const spriteUrl = await usePokemonSprites(pokemon.url);
    sprites.value.push(spriteUrl);
  }
});
</script>

<template>
  <div class="pokemonContainer">
    <RouterLink :to="`/pokemones/${index}`" class="pokemonCard" v-for="(pokemon, index) in data" :key="index">
      <div>
        <img :src="sprites[index]" />
        <p>{{ pokemon.name }}</p> 
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.pokemonContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.pokemonCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
}
</style>
