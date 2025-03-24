<script setup>
</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink> | 
        <RouterLink to="/pokemones">pokjemon</RouterLink> | 
        <RouterLink to="/carrito">Tienda épica</RouterLink> | 
        <RouterLink to="/taskList">task List</RouterLink> | 
        <RouterLink to="/vueBasico">Vue Basico</RouterLink> | 
        <RouterLink to="/personaGames">Persona</RouterLink>
      </nav>
</template>

<style scoped>
    nav{
        display: flex;
        justify-content: center;
        margin: 1rem;
    }
    nav a{
        margin: 0 1rem;
        color: black;
    }
    nav a:hover{
        color: rgb(118, 118, 118);
    }
    nav a:active{
        color: blue;
    }
</style>