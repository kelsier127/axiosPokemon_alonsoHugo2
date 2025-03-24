
<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['sumar', 'restar'])
</script>

<template>
<div>
    <button @click="emit('sumar')">Sumar</button>
    <button @click="emit('restar')">Sumar</button>
</div>
</template>