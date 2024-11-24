<script setup>
import { ref } from 'vue'

const mensaje = ref('Hola Mundo!')
const isRed = ref(true)
const color = ref('green')
const usuario = ref({ nombre: 'Jorge', edad: 25 });

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
    <p>mensaje: {{ mensaje }}</p>
    <p>isRed: {{ isRed }}</p>
    <p>color: {{ color }}</p>
    <p>usuario: {{ usuario }}</p>
    <button @click="reverseMessage">Reverse Message</button>
    <br />
    <a href="#" @click.prevent="notify">mostrar Alert</a>
    <br />
 
    <p :class="{ red: isRed }" @click="toggleRed">Toogle click red</p>

    <p :style="{ color }" @click="toggleColor">Toogle click verde y azul</p>
  </main>
</template>

<style>
.red {
  color: red;
}
</style>
