<script setup>
import { defineProps } from 'vue';

let props = defineProps(["estado"])
</script>

<template>
    <p>{{ estado ? "bombilla encendida" : "bombilla apagada" }}</p>
</template>