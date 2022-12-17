<script setup>
    // import { ref, reactive } from "vue";
    import { TempoStore } from "../stores/tempo.js";

    const tempoStore = TempoStore();
</script>

<template>
    <h1>This is an about page</h1>
    options = {{ tempoStore.options }}
    <br />

    <template
        v-for="option in tempoStore.options"
        :key="option"
    >
        <input
            type="checkbox"
            :id="option"
            :name="option"
            @click="tempoStore.updateSelected($event)"
        />
        <label :for="option">{{ option }}</label>
    </template>

    <br />
    selected = {{ tempoStore.selected }}
</template>

<style scoped>
    /*  */
</style>
