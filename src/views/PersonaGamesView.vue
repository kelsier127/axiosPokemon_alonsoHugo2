<script setup>
import { usePersonaData } from '@/composables/UsePersonaData.js';

let {data} = usePersonaData();

</script>

<template>
    <h1>Persona games</h1>
    <section class="gameList">
        <RouterLink :to="`/personaGames/${game.id}`" class="gameCard" v-for="(game, index) in data " :key="index">
            <h3> {{ game.title }} </h3>
            <p>Fecha de salida: {{ game.year }}</p>
            <p>Consolas en la que puedes jugar:</p>
            <ul>
                <li v-for="(console, index) in game.platforms" :key="index">
                    {{ console }}
                </li>
            </ul>
        </RouterLink>
    </section>

    <section>
        <RouterView />
    </section>
</template>

<style scoped>
a{
    all:unset;
    cursor: pointer;
}
.gameList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.gameCard {
    border: 1px solid black;
    border-radius: 10px;
    background-color: rgb(146, 246, 246);
    padding: 1rem;
    margin: 1rem;
    width: 250px;
}
</style>