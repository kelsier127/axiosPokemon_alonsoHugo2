<script setup>
import { usePersonaData } from '@/composables/UsePersonaData.js';
import { defineProps, computed } from 'vue';

const props = defineProps({
  id: [String, Number]
})

const realId = computed(() => parseInt(props.id))
const { data } = usePersonaData()

const chosenGame = computed(() =>
  data.value.find(game => game.id === realId.value)
)

</script>

<template>
  <h1>Persona Single View</h1>

  <div class="singleCard">
    <h3>{{ chosenGame.title }}</h3>
    <p>{{ chosenGame.description }}</p>
    <p>Año de salida: {{ chosenGame.year }}</p>
    <p>Genero: {{ chosenGame.genre }}</p>
    <p>Desarrollador: {{ chosenGame.developer }}</p>
    <ul>
        <li v-for="(console, index) in chosenGame.platforms" :key="index">
            {{ console }}
        </li>
    </ul>
  </div>
</template>

<style scoped>
.singleCard{
    border: 1px solid black;
    border-radius: 10px;
    background-color: rgb(146, 246, 246);
    padding: 1rem;
    margin: 1rem;
    width: 250px;
}
</style>
