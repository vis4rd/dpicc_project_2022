import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { music } from "../music_data/music_data.js";

export const TempoStore = defineStore("tempo", () => {
    const options = music().tempos;
    const selected = ref([]);
    const unselected = computed(() => {
        return options.filter((value, index, array) => {
            return !selected.value.includes(value);
        });
    });

    function updateSelected(event) {
        if (event.target.checked) {
            selected.value.push(event.target.name);
        } else {
            let index = selected.value.findIndex((value) => value == event.target.name);
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
