<template>
    <h1 v-if="!pokemonCorrecto">Por favor espere...</h1>
    <div v-else>
        <h1>Selecciona el pokemon correcto:</h1>
        <PokemonImagen :idPokemon="pokemonCorrecto.id" :mostrarPokemon="mostrar" />
        <PokemonOpciones :pokemons="arreglo" @seleccionPokemon="revisarRespuesta($event)" />
        <h2 v-if="gano">Felicidades ha ganado</h2>

    </div>
</template>

<script>
import PokemonImagen from '../components/PokemonImagen'
import PokemonOpciones from '../components/PokemonOpciones'
import obtenerPokemonsFachada from "../clients/ClientePokemonAPI.js";

export default {
    components: {
        PokemonImagen,
        PokemonOpciones,
    },

    methods: {
        async cargaInicial() {
            const vectorInicial = await obtenerPokemonsFachada(4);
            this.arreglo = vectorInicial;
            const indice = Math.floor(Math.random() * 7);
            this.pokemonCorrecto = this.arreglo[indice];
        },

        revisarRespuesta(dato) {
            console.log("Se emitio evento desde el hijo");
            console.log(dato)

            if (dato.ident === this.pokemonCorrecto.id) {
                this.mostrar = true;
                this.gano = true;
                this.arreglo = [this.pokemonCorrecto]
            } else {
                console.log("error...")
            }
        }
    },

    data() {
        return {
            arreglo: [],
            pokemonCorrecto: null,
            mostrar: false,
            gano: false
        };
    },
    mounted() {
        this.cargaInicial(4);
    },
};
</script>

<style></style>