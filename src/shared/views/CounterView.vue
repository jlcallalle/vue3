<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const counter = ref(6);

    const increase = () => {
      counter.value++;
    }
    return {
      counter,
      increase,
    }
  }
});
</script>

<template>
  <div class="about">
    <p>Counter View: {{ counter }}</p>
    <button @click="increase">+1</button>
  </div>
</template>