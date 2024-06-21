<template>
    <div class="opciones-container">
        <ul>
            <li v-for="p in poke" :key = "p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        poke: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style>
.opciones-container {
    display: flex;
    justify-content: center;
}

ul {
    list-style-type: none;
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