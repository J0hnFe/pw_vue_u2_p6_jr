<template>
    <div class="opciones-container">
        <ul>
            <li v-for="pokemon in pokemons" 
            :key="pokemon.id" 
            @click="$emit('seleccionPokemon', 
            {ident: pokemon.id, 
            nomb: pokemon, 
            test:'esto es prueba'})">
                {{ pokemon.nombre }} 
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        pokemons: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style>
.opciones-container {
    display: flex;
    justify-content: center;
    margin-top: 450px
}

ul {
    list-style-type: none;
    padding: 0; /* Elimina el padding por defecto */
    display: flex; /* Establezco ul como un contenedor flex */
    flex-direction: column; /* Organizo elementos li verticalmente */
    align-items: center; /* Centro elementos li horizontalmente */
}

li {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin-bottom: 10px;
    width: 250px;
    background-color: azure;
    cursor: pointer;
}

li:hover {
    background-color: rgb(227, 156, 105);
}
</style>