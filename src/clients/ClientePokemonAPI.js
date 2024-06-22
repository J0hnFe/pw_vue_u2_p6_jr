
const obtenerVectorNumerico = (longitud) => {

    const vector = [];
    for (let i = 0; i < longitud; i++) {
        vector[i] = obtenerAleatorio(1, 600)
    }
    return vector
}

function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const obtenerPokemons = async (longitud) => {
    const vectorFinal = [];
    const vector = obtenerVectorNumerico(longitud);

    for (let i = 0; i < vector.length; i++) {
        vectorFinal[i] = await construirPokemon(vector[i]);
    }
    return vectorFinal;
}

async function construirPokemon(identificador) {
    const data = await consumirAPI(identificador);
    const obj = {
        nombre: data.name,
        id: data.id
    }
    return obj;
}

const consumirAPI = async (id) => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
}

const obtenerPokemonsFachada = async (longitud) => {
    return await obtenerPokemons(longitud);
}

export default obtenerPokemonsFachada