<script setup>
import { inject } from 'vue';

let sumar = inject("incrementar");
</script>
<template>
    <div>
        <button @click="sumar">Sumar 1</button>
      </div>
</template>