import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { music } from "../music_data/music_data.js";

export const TempoStore = defineStore("tempo", () => {
    const options = music().tempos;
    const selected = ref([]);
    // const unselected = computed(() => options.value - selected.value);

    function updateSelected(event) {
        console.log(`event = ${event.target.checked}`);
        if (event.target.checked) {
            selected.value.push(event.target.name);
        } else {
            let index = selected.value.findIndex((value) => value == event.target.name);
            selected.value.splice(index, 1);
        }
        console.log(`selected = ${selected.value}`);
    }
    return { options, selected, updateSelected };
});
