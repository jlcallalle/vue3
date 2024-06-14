<script setup>
import { ref } from "vue";
// A "ref" is a reactive data source that stores a value.
// Technically, we don't need to wrap the string with ref()
// in order to display it, but we will see in the next
// example why it is needed if we ever intend to change
// the value.

const mensaje = ref('Hola Mundo!')
const isRed = ref(true)
const color = ref('green')

function reverseMessage() {
  mensaje.value = mensaje.value.split('').reverse().join('')
}
function notify() {
  alert('navigation was prevented.')
}

function toggleRed() {
  isRed.value = !isRed.value
}

function toggleColor() {
  color.value = color.value === 'green' ? 'blue' : 'green'
} 
</script>


<template>
  <main>
    <!-- <p>homa mundo</p> -->
    <p> {{ mensaje }}</p>
    <button @click="reverseMessage">Reverse Message</button>
    <br>
    <a href="#" @click.prevent="notify">mostrar Alert</a>
    <br>

    <!--
    class bindings have special support for objects and arrays
    in addition to plain strings
    -->
    <p :class="{ red: isRed }" @click="toggleRed">
      Toogle click red
    </p>

    <!-- style bindings also support object and arrays -->
    <p :style="{ color }" @click="toggleColor">
      Toogle click verde y azul
    </p>

  </main>
</template>

<style>
.red {
  color: red;
}
</style>