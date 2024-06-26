<template>
    <h1 v-if="!pokemonCorrecto">Por favor espere...</h1>
    <div v-else>
        <h1>Selecciona el pokemon correcto:</h1>
        <div class="stats">
            <h2>Intento: {{ intentos }}</h2>
            <h2>Puntaje: {{ puntaje }}</h2>
        </div>
        <PokemonImagen :idPokemon="pokemonCorrecto.id" :mostrarPokemon="mostrar" />
        <PokemonOpciones :pokemons="arreglo" @seleccionPokemon="revisarRespuesta($event)" />
        <h2 v-if="gano">Felicidades pokemon correcto!</h2>
        <h2 v-if="!gano && juegoStart">Intente de nuevo...</h2>
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
            const vectorInicial = await obtenerPokemonsFachada(7);
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
                this.arreglo = [this.pokemonCorrecto];
                this.intentos++;

                // Calcular puntaje 
                if (this.intentos === 1) this.puntaje = 10;
                else if (this.intentos === 2) this.puntaje = 8;
                else if (this.intentos === 3) this.puntaje = 5;
                else if (this.intentos === 4) this.puntaje = 3;
                else if (this.intentos === 5) this.puntaje = 2;
                else if (this.intentos === 6) this.puntaje = 1;
                else this.puntaje = 0;
            } else {
                this.intentos++;
                this.juegoStart = true;
                this.gano = false;
                console.log("error...")
            }
        }
    },

    data() {
        return {
            arreglo: [],
            pokemonCorrecto: null,
            mostrar: false,
            gano: false,
            juegoStart: false,
            intentos: 0,
            puntaje: 0, 
        };
    },
    mounted() {
        this.cargaInicial(4);
    },
};
</script>

<style>
.stats {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}
</style>