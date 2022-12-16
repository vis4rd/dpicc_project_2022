<script setup>
    import WelcomeItem from "../components/WelcomeItem.vue";
</script>

<template>
    <WelcomeItem>
        <template #heading>Documentation</template>

        Vue's official documentation provides you with all information you need to get started.
    </WelcomeItem>

    <WelcomeItem>
        <template #heading>Tooling</template>

        This project is served and bundled with Vite. The recommended IDE setup is VSCode + Volar.
        If you need to test your components and web pages, check out Cypress and Cypress Component
        Testing.

        <br />

        More instructions are available in <code>README.md</code>.
    </WelcomeItem>

    <WelcomeItem>
        <template #heading>Ecosystem</template>

        Get official tools and libraries for your project: Pinia, Vue Router, Vue Test Utils, and
        Vue Dev Tools. If you need more resources, we suggest paying Awesome Vue a visit.
    </WelcomeItem>

    <WelcomeItem>
        <template #heading>Community</template>

        Got stuck? Ask your question on Vue Land, our official Discord server, or StackOverflow. You
        should also subscribe to our mailing list and follow the official @vuejs twitter account for
        latest news in the Vue world.
    </WelcomeItem>

    <WelcomeItem>
        <template #heading>Support Vue</template>

        As an independent project, Vue relies on community backing for its sustainability. You can
        help us by becoming a sponsor.
    </WelcomeItem>
</template>
