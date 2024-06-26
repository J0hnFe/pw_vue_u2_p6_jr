<template>
  <PokemonPage />
</template>

<script>
import PokemonPage from "./pages/PokemonPage.vue";

export default {
  name: "App",
  components: {
    PokemonPage,
  },

  methods: {
    calcularValor() {
      return 10 + 2;
    }
  }
};
</script>
/**fdsgfdsgdf */
<style>
#app {
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
