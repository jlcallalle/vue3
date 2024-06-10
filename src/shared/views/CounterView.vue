<script setup lang="ts">
import { ref } from "vue";

const counter = ref(0);
/* const message = ref('¡Hola, Mundo!'); */
/* 
const increase = () => {
      counter.value++;
} */

</script>

<template>
  <div class="about">
    <p>Contador: {{ counter }}</p>
    <button @click="counter++">+1</button>
  </div>
</template>