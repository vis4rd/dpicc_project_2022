<script setup>
    import CheckboxButton from "../components/CheckboxButton.vue";
    import { TempoStore } from "../stores/tempo.js";

    const tempoStore = TempoStore();
</script>

<template>
    <h2>This is an about page</h2>
    options = {{ tempoStore.options }}
    <br />

    <div class="options_group">
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
    </div>

    <br />
    selected = {{ tempoStore.selected }}
    <br />
    unselected = {{ tempoStore.unselected }}
</template>

<style scoped>
    .options_group {
        display: flex;
        width: auto;

        border: solid white 1px;
    }
</style>
