<!-- Estructura Base -->

<!-- Todo lo relacionado a html -->
<template>
    <h2>{{ presentar }}</h2>
    <p>
        {{ numero }}
        <sup>2</sup> = {{ calcular }}
    </p>
    <div>
        <button @click="incrementar"> +1 </button>
        <button @click="disminuir"> -1 </button>
    </div>
</template>

<!-- Todo lo relacionado a js -->
<script>
export default {
    // Props
    props: ['titulo', 'num'], //pueden haber varias props, una "variable"

    // Options api para propiedades reactivas
    data() {
        return {
            numero: 5,
        };
    },

    methods: {
        calcularCuadrado() {
            console.log('Ha ingresado al metodo');
            return this.numero * this.numero;
        },

        calcularCuadrado2(n1, n2) {
            console.log('ha ingresado a la propiedad');
            return n1 * n2;
        },

        incrementar() {
            this.numero++
        },

        disminuir() {
            this.numero--
        }
    },

    // Propiedades computadas (similares pero no son metodos)
    computed: {
        calcular() {
            console.log('ha ingresado a la propiedad');
            return this.numero * this.numero;
        },

        presentar() {
            if(this.titulo !== undefined) {
                return this.titulo
            } else {
                return 'txt necesario'
            }
        }
    },
};
</script>

<!-- Todo lo relacionado a estilos -->
<style>
button {
    background: #344E41;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    margin: 10px 10px;
    padding: 15px 25px;
    cursor: pointer;
}

button:hover {
    background: #588157;
}
</style>
