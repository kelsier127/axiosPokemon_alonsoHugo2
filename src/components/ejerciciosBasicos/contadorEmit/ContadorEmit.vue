<script setup>
import { ref } from 'vue'

import BotonEmit from './BotonEmit.vue';

let contador = ref(0)

const restarAlContador = () =>{
    contador.value--
}
const sumarAlContador = () =>{
    contador.value++
}

</script>

<template>
    <div class="container">
        <h2>Contador con emit</h2>
        <p>{{contador}}</p>
        <BotonEmit @restar="restarAlContador" @sumar="sumarAlContador" />

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