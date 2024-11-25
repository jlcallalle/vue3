<script setup lang="ts">
import {  RouterView } from 'vue-router'
import NavBar from '@/shared/views/components/NavBar.vue';

</script>

<template>
  <header>
    <div class="wrapper">
      <NavBar />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

</style>
