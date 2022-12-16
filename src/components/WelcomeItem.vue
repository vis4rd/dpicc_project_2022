<template>
    <h3>
        <slot name="heading"></slot>
    </h3>
    <slot></slot>
</template>

<style scoped>
    h3 {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 0.4rem;
        color: var(--color-heading);
    }
</style>
