<script setup lang="ts">
import { ref } from 'vue'

const message = ref('¡Hola, Mundo 2!');
const counter = ref(0)
/* const message = ref('¡Hola, Mundo!'); */
/* 
const increase = () => {
      counter.value++;
} */
</script>

<template>
  <div class="about">
    <p>Mensaje: {{ message }}</p>
    <p>Contador: {{ counter }}</p>
    <button @click="counter++">+1</button>
  </div>
</template>
