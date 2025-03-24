<script setup>
import {ref,provide} from 'vue';
import BotonToggle from './BotonToggle.vue';
import EstadoBombilla from './EstadoBombilla.vue';

let estado = ref(false)

provide("cambiar", ()=>{
    estado.value = !estado.value
    console.log(estado)
})

</script>

<template>
    <div class="container">
        <h1>Bombilla</h1>
        <BotonToggle/>
        <EstadoBombilla :estado="estado"/>
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