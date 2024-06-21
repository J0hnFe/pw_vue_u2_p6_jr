<template>
<div class="pokemon-container">
    <img v-show="mostrarPokemon"
   :src ="imagenSrc" alt="Error en la imagen"/>
  
  <img v-show="!mostrarPokemon"
  class="oculta-pokemon"
  :src ="imagenSrc" alt="Error en la imagen"/>
</div>
</template>

<script>
export default {
    data () {
        return {
            //526
            // mostrar: false,
            // idPokemon: 526,
        };
    },

    props: {
        idPokemon: {
            type: Number,
            required: true,
        },

        mostrarPokemon: {
            type: Boolean,
            required: true,
            default: false,
        }
    },

    computed: {
        imagenSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.idPokemon}.svg`
        }
    }
}
</script>

<style scoped>
.oculta-pokemon {
    filter: brightness(0);
}

img {
    height: 400px;
    width: 400px;
    right: 35%;
    position: absolute;
}

.pokemon-container {
    height:400px;
    background-color: rgb(240, 213, 194);
}

</style>