<template>
    <div class="element_batch">
        <div class="batch_element_label">
            <slot>Here</slot>
        </div>
        <div class="batch_element_score">
            <slot name="score"></slot>
        </div>
    </div>
</template>

<style scoped>
    .element_batch {
        display: flex;
        flex-direction: row;
        justify-content: center;

        text-align: center;

        width: 100%;
    }
    .batch_element_label {
        display: flex;
        flex-direction: row;
        justify-content: center;

        text-align: center;

        width: 30%;

        margin: 4px;
        padding: 5px 15px;
        background-color: transparent;

        border-style: solid;
        border-radius: 6px;
        border-width: 1px;
        border-color: var(--color-border);

        transition: var(--transition-time);
    }

    .batch_element_score {
        display: inline-flex;
        justify-content: center;

        text-align: center;

        width: 20%;
        min-width: fit-content;

        margin: 4px;
        padding: 5px 15px;
        background-color: transparent;

        color: var(--vt-c-green);
        font-weight: bold;

        border-style: solid;
        border-radius: 6px;
        border-width: 1px;
        border-color: var(--color-border);

        transition: var(--transition-time);
    }

    .batch_element_label:hover {
        border-color: var(--color-border-hover);
    }
</style>
