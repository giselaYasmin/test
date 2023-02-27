<script setup>
import Portada from './components/Portada.vue'
import Navbar from './components/Navbar.vue'
import router from './router'
</script>

<template>
  <div class="main">
      <div id="app">
      <router-view />
    </div>
    <Navbar/>
  </div>
 
</template>

<style scoped>

</style>
