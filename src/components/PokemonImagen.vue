<template>
<div class="pokemon-container">
    <img v-show="mostrar"
   src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/487.svg" alt="Error en la imagen"/>
  
  <img v-show="!mostrar"
  class="oculta-pokemon"
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/487.svg" alt="Error en la imagen"/>
</div>
</template>

<script>
export default {
    data () {
        return {
            mostrar: true,
        };
    },
}
</script>

<style scoped>
.oculta-pokemon {
    filter: brightness(0);
}

img {
    height: 400px;
    width: 400px;
    right: 40%;
    position: absolute;
}

.pokemon-container {
    height:400px;
    background-color: rgb(227, 156, 105);
}

</style>