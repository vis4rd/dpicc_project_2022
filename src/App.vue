<script setup>
    import { RouterView } from "vue-router";
    import HeaderBar from "./components/HeaderBar.vue";
</script>

<template>
    <header>
        <HeaderBar />
    </header>

    <main>
        <RouterView />
    </main>
</template>

<style scoped>
    header {
        display: flex;
        flex-direction: column;
        place-items: center;

        padding: 1rem;
        margin-bottom: 2rem;

        border-style: solid;
        border-radius: 6px;
        border-width: 1px;
        border-color: var(--color-border);
    }

    main {
        display: flex;
        flex-direction: column;
        place-items: center;

        padding: 1rem;
        margin-top: 2rem;

        border-style: solid;
        border-radius: 6px;
        border-width: 1px;
        border-color: var(--color-border);
    }
</style>
