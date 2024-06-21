<template>
    <h1>Selecciona el pokemon correcto:</h1>
    <PokemonImagen :idPokemon="526" :mostrarPokemon="true"/>
    <PokemonOpciones :poke="arreglo"/>
</template>

<script>
import PokemonImagen from '../components/PokemonImagen.vue';
import PokemonOpciones from '../components/PokemonOpciones.vue';

// Cuando hago referencia a un archivo de funciones (no de componentes)
// uso nombre de funcionalidad q importo
import obtenerPokeFachada from '../clients/ClientePokemonAPI.js'

export default {
    components: {
        PokemonImagen,
        PokemonOpciones,
    },

    methods: {
        async cargaInicial() {
            const vectorInicial = await obtenerPokeFachada(526);
            this.arreglo = vectorInicial;
        },
    },

    data () {
        return {
            arreglo: [],
        };
    },

    // Cada vez q el componente se "monta" en la pg, se llama el metodo
    // Metodos del ciclo de vida no necesitan await
    mounted() {
       this.cargaInicial();
    }
};
</script>

<style></style>