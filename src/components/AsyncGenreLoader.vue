<script setup>
    import { defineAsyncComponent } from "vue";

    import LoadingComponent from "./LoadingComponent.vue";
    import ErrorComponent from "./ErrorComponent.vue";

    const GenreList = defineAsyncComponent({
        loader: async () => {
            // await new Promise((resolve) => setTimeout(resolve, 30000)); // DEBUG
            return import("./GenreList.vue");
        },

        loadingComponent: LoadingComponent,
        errorComponent: ErrorComponent,
        delay: 200, // 0.2s
        timeout: 20000, // 20s
    });
</script>

<template>
    <div class="genres">
        <h2 class="genres_title">Your top 5 music genres!</h2>
        <div class="async">
            <GenreList />
        </div>
    </div>
</template>

<style scoped>
    .genres {
        display: flex;
        flex-direction: column;
        place-items: center;

        width: 50%;

        margin: 1rem;
    }

    .genres_title {
        margin: 0;
        padding: 0;
        color: var(--vt-c-green);
    }

    .async {
        display: flex;
        flex-direction: column;
        place-items: center;
        place-content: center;

        width: 100%;
        min-height: 6rem;

        border-style: solid;
        border-width: 1px;
        border-color: var(--color-border);
        border-radius: 10px;
    }
</style>
