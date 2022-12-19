<script setup>
    import { TempoStore } from "../stores/tempo.js";
    import { EnvironmentStore } from "../stores/environment.js";
    import { FullnessStore } from "../stores/fullness.js";
    import { MoodStore } from "../stores/mood.js";
    import { TypeStore } from "../stores/type.js";

    import OptionsGroup from "../components/OptionsGroup.vue";
    import AsyncGenreLoader from "../components/AsyncGenreLoader.vue";

    const tempoStore = TempoStore();
    const environmentStore = EnvironmentStore();
    const fullnessStore = FullnessStore();
    const moodStore = MoodStore();
    const typeStore = TypeStore();
</script>

<template>
    <h2>Click on buttons that best answer to these questions:</h2>

    <OptionsGroup :targetStore="tempoStore">
        <h3 class="option_group_h3">Choose your favourite music tempo:</h3>
    </OptionsGroup>

    <OptionsGroup :targetStore="environmentStore">
        <h3 class="option_group_h3">What environment do you listen to your music in?</h3>
    </OptionsGroup>

    <OptionsGroup :targetStore="fullnessStore">
        <h3 class="option_group_h3">How full of noises and sounds is the music you listen to?</h3>
    </OptionsGroup>

    <OptionsGroup :targetStore="moodStore">
        <h3 class="option_group_h3">Specify what mood of music you enjoy the most:</h3>
    </OptionsGroup>

    <OptionsGroup :targetStore="typeStore">
        <h3 class="option_group_h3">
            Do you have a preference between instrumental or vocal music?
        </h3>
    </OptionsGroup>

    <AsyncGenreLoader />
</template>

<style scoped>
    h2 {
        color: var(--vt-c-green);
    }
    .option_group_h3 {
        margin: 0;
        padding: 0;
    }
</style>
