<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  setup() {

    const message = ref('¡Hola, Mundo!');
    const counter = ref(0);

    const increase = () => {
      counter.value++;
    }

    const doubledCount = computed(() => counter.value * 2);

    return {
      counter,
      increase,
      message,
      doubledCount
    }
  }
});
</script>

<template>
  <div class="about">
    <p>Mensaje: {{ message }}</p>
    <p>Contador: {{ counter }}</p>
    <p>Doble: {{ doubledCount }}</p>
    <button @click="increase">+1</button>
  </div>
</template>