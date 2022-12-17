<script setup>
    import { RouterLink } from "vue-router";
</script>

<template>
    <header>
        <div class="greetings">
            <h1>You did it</h1>
            <h3>I am somewhat of a scientist myself.</h3>
        </div>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/testing">Testing</RouterLink>
        </nav>
    </header>
</template>

<style scoped>
    h1,
    h3 {
        font-weight: normal;
        text-align: center;
    }

    nav {
        width: 100%;
        text-align: center;
    }

    nav a {
        display: inline-block;
        padding: 0 1rem;
        border-left: 1px solid var(--color-border);
    }

    nav a:first-of-type {
        border: 0;
    }

    header {
        display: flex;
        flex-direction: column;
        place-items: center;
        /* padding-right: 80px; */
    }
</style>
