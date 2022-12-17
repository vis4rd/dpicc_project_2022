import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { music } from "../music_data/music_data.js";

export const TempoStore = defineStore("fullness", () => {
    const options = music().fullnesses;
    const selected = ref([]);
    const unselected = computed(() => {
        // eslint-disable-next-line no-unused-vars
        return options.filter((value, index, array) => {
            return !selected.value.includes(value);
        });
    });

    function updateSelected(target) {
        if (target.checked) {
            selected.value.push(target.name);
        } else {
            let index = selected.value.findIndex((value) => value == target.name);
            selected.value.splice(index, 1);
        }
    }

    function isSelected(option) {
        return selected.value.findIndex((value) => value == option) >= 0;
    }

    function resetSelected() {
        selected.value = [];
    }

    return { options, selected, unselected, updateSelected, isSelected, resetSelected };
});
