<script setup lang="ts">
import { ref } from "vue";

const message = ref('¡Hola, Mundo!');
const counter = ref(0);

const increase = () => {
      counter.value++;
}

</script>

<template>
  <div class="about">
    <p>Mensaje: {{ message }}</p>
    <p>Contador: {{ counter }}</p>
    <button @click="increase">+1</button>
  </div>
</template>