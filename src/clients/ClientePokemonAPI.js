// Podemos declarar como lambda o como funcion

const obtenerVectorNumerico = (longitud) => {
    const vector = []
    for (let i = 0; i < longitud; i++) {
        vector[i] = obtenerAleatorio(1, 649);
    }
}

// Funcionalidad pa numeros aleatorios
function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const obtenerPoke = async (longitud) => {
    const vector = obtenerVectorNumerico(longitud);
    const vectorFinal = [];

    for (let i = 0; i < vector.lenght; i++) {
        vectorFinal[i] = await construirPokemon(vector[i])
    }
}

async function construirPokemon(identificador) {
    const data = await consumirApi(identificador);

    const obj = {
        nombre: data.nombre,
        id: data.id
    }
    return obj
}

const consumirApi = async (id) => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(r => r.json());
}

// Metodo para no exportar el metodo directo sino usar una "fachada"
const obtenerPokeFachada= async(longitud) => {
    return await obtenerPoke(longitud);
}

export default obtenerPokeFachada

