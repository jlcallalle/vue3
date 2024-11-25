<!-- <script>
// forma tradicional fuera del Script Setup
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const counter = ref(6)

    const increase = () => {
      counter.value++
    }

    //tengo que agregar en return, para poder usar
    return {
      counter,
      increase 
    }
  }
})
</script> -->

<script setup lang="ts">
// forma con script Setup,

import { ref } from 'vue';

const counter = ref(5);
/* const increase = () => {
  counter.value++
} */
</script>

<template>
  <div class="about">
    <p>Contador: {{ counter }}</p>
    <button @click="counter++">+1</button>
  </div>
</template>
