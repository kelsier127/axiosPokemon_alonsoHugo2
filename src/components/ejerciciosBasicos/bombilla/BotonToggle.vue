<script setup>
import { inject } from 'vue';

let estado = inject("cambiar")
</script>

<template>
    <div>
        <button @click="estado">Encender/Apagar</button>
    </div>
</template>