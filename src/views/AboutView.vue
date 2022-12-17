<script setup>
    import { useCounterStore } from "../stores/counter.js";

    const counterStore = useCounterStore();
    const increment = counterStore.increment;
</script>

<template>
    <div class="vertical">
        <div class="about">
            <h1>
                This is an about page: {{ counterStore.count }} and {{ counterStore.doubleCount }}
            </h1>
        </div>
        <button @click="increment()">Increment</button>
    </div>
</template>

<style scoped>
    .about {
        min-height: 50px;
        display: flex;
        align-items: center;
    }

    .vertical {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .vertical button {
        width: 20%;
        max-width: 300px;
        min-width: fit-content;
    }
</style>
