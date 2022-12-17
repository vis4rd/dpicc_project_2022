<script setup>
    import CheckboxButton from "../components/CheckboxButton.vue";

    const props = defineProps({
        targetStore: { required: true },
    });
</script>

<template>
    <div class="options_group">
        <div class="options_group_prefix">
            <slot><h3>OH NO</h3></slot>
        </div>
        <div class="options_group_content_area">
            <div class="options_group_content">
                <template
                    v-for="option in props.targetStore.options"
                    :key="option"
                >
                    <CheckboxButton
                        :on_click_func="props.targetStore.updateSelected"
                        :label="option"
                        :checked="props.targetStore.isSelected(option)"
                    />
                </template>
            </div>
        </div>

        <!-- DEBUG DATA -->
        <!-- <br />
        options = {{ props.targetStore.options }}
        <br />
        selected = {{ props.targetStore.selected }}
        <br />
        unselected = {{ props.targetStore.unselected }} -->
    </div>
</template>

<style scoped>
    .options_group {
        display: flex;
        flex-direction: column;
        place-items: center;

        margin: 1rem;

        width: 50%;
    }

    .options_group_prefix {
        text-align: center;

        padding: 0;
    }

    .options_group_prefix h3 {
        margin: 0;
        padding: 0;
    }

    .options_group_content_area {
        width: 100%;
    }

    .options_group_content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        padding: 0.5rem;

        border-style: solid;
        border-width: 1px;
        border-color: var(--color-border);
        border-radius: 10px;
    }
</style>
