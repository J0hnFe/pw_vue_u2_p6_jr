<template>
  <!-- <Contador></Contador> puedo abreviarlo-->
  <img alt="Vue logo" src="./assets/logo.png">
  <Contador titulo="Estudiante" :num="-1" /> <!-- Accedo a props desde componente padre -->
  <Contador titulo="Profesor" />
  <!-- <Contador v-bind:num="calcularValor()" /> -->
  <Contador :num="calcularValor()" /> <!-- Otra forma de v-bind -->
</template>

<script>
import Contador from "./components/Contador.vue";

export default {
  name: "App",
  components: {
    Contador,
  },

  methods: {
    calcularValor() {
      return 10 + 2;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
