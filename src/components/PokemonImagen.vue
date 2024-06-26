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
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.idPokemon}.svg`;
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
}

.pokemon-container {
    height: 400px;
    width: 400px;
    left: 50%;
    padding: 10px;
    position: absolute;
    transform: translateX(-50%);
    background-color: rgb(246, 255, 182);
}
</style>