<script setup>
    import { ref, onBeforeUnmount } from "vue";
    import neo4j from "neo4j-driver";

    import ListElement from "../components/ListElement.vue";
    import BaseButton from "../components/BaseButton.vue";

    import { TempoStore } from "../stores/tempo.js";
    import { EnvironmentStore } from "../stores/environment.js";
    import { FullnessStore } from "../stores/fullness.js";
    import { MoodStore } from "../stores/mood.js";
    import { TypeStore } from "../stores/type.js";

    const uri = import.meta.env.VITE_NEO4J_URI;
    const user = import.meta.env.VITE_NEO4J_USERNAME;
    const password = import.meta.env.VITE_NEO4J_PASSWORD;
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

    const tempoStore = TempoStore();
    const environmentStore = EnvironmentStore();
    const fullnessStore = FullnessStore();
    const moodStore = MoodStore();
    const typeStore = TypeStore();

    // retrieved data
    const scores = ref([]);
    const maxScores = ref([]);

    function prependString(string) {
        return string.length > 0 ? "|" : ":";
    }

    function constructLabels() {
        let labels = "";

        const prependLabel = () => {
            labels += labels.length > 0 ? prependString(labels) : "n" + prependString(labels);
        };

        if (tempoStore.selected.length > 0) {
            prependLabel();
            labels += "Tempo";
        }
        if (environmentStore.selected.length > 0) {
            prependLabel();
            labels += "Environment";
        }
        if (fullnessStore.selected.length > 0) {
            prependLabel();
            labels += "Fullness";
        }
        if (moodStore.selected.length > 0) {
            prependLabel();
            labels += "Mood";
        }
        if (typeStore.selected.length > 0) {
            prependLabel();
            labels += "Type";
        }
        return labels;
    }

    function constructRelationships() {
        let rels = "";
        if (tempoStore.selected.length > 0) {
            rels += prependString(rels);
            rels += "IN_TEMPO";
        }
        if (environmentStore.selected.length > 0) {
            rels += prependString(rels);
            rels += "BEST_ENVIRONMENT";
        }
        if (fullnessStore.selected.length > 0) {
            rels += prependString(rels);
            rels += "WITH_FULLNESS";
        }
        if (moodStore.selected.length > 0) {
            rels += prependString(rels);
            rels += "HAS_MOOD";
        }
        if (typeStore.selected.length > 0) {
            rels += prependString(rels);
            rels += "OF_TYPE";
        }
        return rels;
    }

    function constructConditions() {
        let conds = "";
        const prependCondition = () => {
            conds += conds.length > 0 ? "OR " : "WHERE ";
        };
        if (tempoStore.selected.length > 0) {
            prependCondition();
            conds += `(n:Tempo AND n.name IN ${JSON.stringify(tempoStore.selected)})\n`;
        }
        if (environmentStore.selected.length > 0) {
            prependCondition();
            conds += `(n:Environment AND n.name IN ${JSON.stringify(environmentStore.selected)})\n`;
        }
        if (fullnessStore.selected.length > 0) {
            prependCondition();
            conds += `(n:Fullness AND n.name IN ${JSON.stringify(fullnessStore.selected)})\n`;
        }
        if (moodStore.selected.length > 0) {
            prependCondition();
            conds += `(n:Mood AND n.name IN ${JSON.stringify(moodStore.selected)})\n`;
        }
        if (typeStore.selected.length > 0) {
            prependCondition();
            conds += `(n:Type AND n.name IN ${JSON.stringify(typeStore.selected)})\n`;
        }
        return conds;
    }

    function constructQuery() {
        let result = "";
        result += "MATCH (g:Genre)\n";
        result += `OPTIONAL MATCH (g)-[${constructRelationships()}]->(${constructLabels()})\n`;
        result += constructConditions();
        result += "RETURN g.name AS genre, count(n) AS score\n";
        result += "ORDER BY score DESC\n";

        return result;
    }

    async function fetchData() {
        const session = driver.session(); // create a new session

        try {
            //             const result = await session.run(`
            // MATCH (g:Genre)
            // OPTIONAL MATCH (g)-[:HAS_MOOD|OF_TYPE|IN_TEMPO]->(n:Mood|Type|Tempo)
            // WHERE (n:Mood AND n.name IN ["sad", "happy", "melancholic"])
            // OR (n:Type AND n.name IN ["instrumental", "vocal"])
            // OR (n:Tempo AND n.name IN ["slow", "fast"])
            // RETURN g.name AS genre, count(n) AS score
            // ORDER BY score DESC
            //             `);

            // MATCH (g:Genre)-->(n)
            // RETURN g.name AS genre, count(n) AS score
            // ORDER BY score DESC
            if (
                tempoStore.selected.length +
                    environmentStore.selected.length +
                    fullnessStore.selected.length +
                    moodStore.selected.length +
                    typeStore.selected.length >
                0
            ) {
                const result = await session.run(constructQuery());
                console.log(`Query: ${constructQuery()}`);

                scores.value = result.records.map((record) => ({
                    name: record.get("genre"),
                    score: record.get("score"),
                }));
            }

            const result2 = await session.run(
                `MATCH (g:Genre)-->(n)
                RETURN g.name AS genre, count(n) AS score
                ORDER BY score DESC`
            );
            console.log(`Query: ${constructQuery()}`);

            maxScores.value = result2.records.map((record) => ({
                name: record.get("genre"),
                score: record.get("score"),
            }));
        } catch (e) {
            console.log(`Error happened, pls help: ${e}`);
        } finally {
            session.close();
        }
    }

    fetchData();

    onBeforeUnmount(() => {
        driver.close();
    });
</script>

<template>
    <div class="async">
        <BaseButton @click="fetchData()">Click to refresh</BaseButton>
        <template
            v-for="score in scores.slice(0, 5)"
            :key="score.name"
        >
            <ListElement>
                {{ score.name }}
                <template #score> {{ ((score.score / 13) * 100).toPrecision(4) }}% match </template>
            </ListElement>
        </template>
    </div>
</template>

<style scoped>
    .async {
        display: flex;
        flex-direction: column;
        place-items: center;
        place-content: center;

        width: 100%;
        min-height: 6rem;
        padding: 0.5rem 0;

        border-style: solid;
        border-width: 1px;
        border-color: var(--color-border);
        border-radius: 10px;
    }
</style>
