<template>
    <div class="pokemon-container">
        <img v-show="mostrarPokemon" v-bind:src="imagenSrc" alt="Error en la img" />
        <img v-show="!mostrarPokemon" class="oculta-pokemon" v-bind:src="imagenSrc" alt="Error en la img" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            mostrar: true,

        };
    },
    props: {
        idPokemon: {
            type: Number,
            required: true
        },
        mostrarPokemon: {
            type: Boolean,
            required: true,
        }
    },
    computed: {
        imagenSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.idPokemon}.svg`
                ;
        },
    },
};
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
    height: 400px;
    background-color: rgb(166, 229, 166);
}
</style>