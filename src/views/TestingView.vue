<script setup>
    import CheckboxButton from "../components/CheckboxButton.vue";
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
        <CheckboxButton
            :on_click_func="tempoStore.updateSelected"
            :label="option"
            :checked="tempoStore.isSelected(option)"
        />
    </template>

    <br />
    selected = {{ tempoStore.selected }}
    <br />
    unselected = {{ tempoStore.unselected }}
</template>

<style scoped>
    /*  */
</style>
