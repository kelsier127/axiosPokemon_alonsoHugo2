<script setup>
import { inject } from 'vue';
let restar = inject("decrementar");
</script>
<template>
    <div>
        <button @click="restar">Restar 1</button>
      </div>
</template>