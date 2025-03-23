<script setup>
import NavComponent from './components/NavComponent.vue'
</script>

<template>
  <div>
    <header>  
      <div class="wrapper">
        <HelloWorld msg="You did it!" />
    
          <NavComponent />
      </div>
    </header>

    <RouterView />
  </div>
  
</template>

<style scoped>

</style>
