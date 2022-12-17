<script setup>
    const props = defineProps({
        label: { type: String, required: true },
        checked: { type: Boolean, default: false },
        on_click_func: { type: Function, default: () => {} },
    });

    function changeCheckedStatus(target) {
        var checkbox = findInput(target);
        if (checkbox != null) {
            checkbox.checked = !checkbox.checked;
        }
    }

    function findInput(target) {
        if (target.classList.contains("checkbox_wrapper")) {
            return target.children.namedItem(props.label);
        } else if (target.nodeName == "LABEL") {
            return target.previousSibling;
        } else {
            return null;
        }
    }
</script>

<template>
    <div
        class="checkbox_wrapper"
        @click="
            changeCheckedStatus($event.target);
            on_click_func(findInput($event.target));
        "
    >
        <input
            @click="on_click_func($event.target)"
            :checked="props.checked"
            :id="props.label"
            :name="props.label"
            type="checkbox"
        />
        <label>{{ label }}</label>
    </div>
</template>

<style scoped>
    .checkbox_wrapper {
        display: flex;
        flex-direction: row;

        text-align: center;
        font-size: inherit;

        margin: 4px;
        padding: 5px 15px;
        background-color: transparent;

        border-style: solid;
        border-radius: 6px;
        border-width: 1px;
        border-color: var(--color-border);

        cursor: pointer;
        transition: 0.4s;
    }

    .checkbox_wrapper input[type="checkbox"] {
        margin-right: 5px;
        cursor: pointer;
    }

    .checkbox_wrapper:hover {
        border-color: var(--color-border-hover);
    }

    .checkbox_wrapper input[type="checkbox"]:checked + label {
        color: var(--color-selected);
        transition: 0.4s;
    }

    .checkbox_wrapper:has(input[type="checkbox"]:checked) {
        border-color: var(--color-selected);
    }

    .checkbox_wrapper input[type="checkbox"] + label {
        color: var(--color-text);
        cursor: pointer;

        /* Prevent text selection */
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        transition: 0.4s;
    }
</style>
