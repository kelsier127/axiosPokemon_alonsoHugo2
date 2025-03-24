<script setup>
import ContadorInjectEmit from '@/components/ejerciciosBasicos/contador/ContadorInjectEmit.vue';
import BombillaExercise from '@/components/ejerciciosBasicos/bombilla/BombillaExercise.vue';
import ContadorEmit from '@/components/ejerciciosBasicos/contadorEmit/ContadorEmit.vue';
</script>

<template>
    <h1>Vue Basico</h1>
    
    <div>
        <h2>Div de componentes con ejercicios basicos</h2>
        <ContadorInjectEmit/>
        <BombillaExercise/>
        <ContadorEmit/>
    </div>
</template>
<style scoped>
    h1{
        text-align: center;
    }
    p{
        margin: 1rem;
    }

    </style>