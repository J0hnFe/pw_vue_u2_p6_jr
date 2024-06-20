<template>
    <img v-if="img" alt="lol image" v-bind:src="img" />

    <div class="oscuro">

        <div class="pregunta-container">
            <input v-model="pregunta" type="text" placeholder="Hazme una pregunta">
            <p>
                Recuerda terminar la pregunta con "?"
            </p>

            <div v-show="mensaje" class="respuesta">
                <h2>
                    {{ pregunta }}
                </h2>
                <h1>
                    {{ respuesta === 'yes' ? 'Si' : 'No' }}
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pregunta: null,
            respuesta: null,
            img: null,
            mensaje: false
        }
    },

    // Watcher. Es una opcion de option api
    watch: {
        pregunta(value, oldValue) {
            this.mensaje = false
            console.log({ value, oldValue });
            if (!value.includes('?')) return;

            // Consumir API para obtener respuesta
            this.obtenerRespuesta();
            this.mensaje = true;
        }
    },

    methods: {
        async obtenerRespuesta() {
            this.respuesta = "Pensando... 🤔"
            const data = await fetch('https://yesno.wtf/api').then(resp => resp.json());
            console.log(data)
            const { answer, forced, image } = data
            console.log(answer)
            this.respuesta = answer
            this.img = image;
            return data
        },

        async prueba() {
            const data2 = await this.obtenerRespuesta();
        }
    },
};
</script>

<style scoped>
img,
.oscuro {
    max-height: 100%;
    height: 100vh;
    max-width: 100%;
    width: 100vw;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: -1;
}

.oscuro {
    background-color: rgba(0, 0, 0, 0.5);
}

.pregunta-container {
    position: relative;
}

input {
    margin-top: 70px;
    width: 260px;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    text-align: center;
}

input:focus {
    outline: none;
}

p,
h1,
h2 {
    color: white;
}

p {
    font-size: 25px;
    margin-top: 25px;
}

.respuesta {
    margin-top: 100px;
}
</style>