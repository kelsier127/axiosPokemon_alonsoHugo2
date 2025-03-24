<script setup>
import { provide, ref } from 'vue';
import BtnRestar from './BtnRestar.vue';
import BtnSumar from './BtnSumar.vue';

let contador = ref(0);


provide('incrementar', ()=>{
    console.log("incrementar");
    console.log(contador.value);
    contador.value++;
});
provide('decrementar', ()=>{
    console.log("decrementar");
    console.log(contador.value);
    contador.value--;
});

</script>

<template>
    <div class="container">
        <h1>Contador con inyección y emisión de eventos</h1>
        <p>Contador: {{ contador }}</p>
        <BtnRestar/>
        <BtnSumar/>
    </div>
</template>

<style scoped>
.container{
    text-align: center;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>