<script setup>
    import { ref } from "vue";
    import { onBeforeUnmount } from "vue";
    import neo4j from "neo4j-driver";

    const uri = "neo4j+s://7d0dd3ed.databases.neo4j.io";
    const user = "neo4j";
    const password = "top-secret";
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

    const people = ref([]); // retrieved data

    async function fetchData() {
        const session = driver.session(); // create a new session

        try {
            // execute a Cypher query
            const result = await session.run("MATCH (n:Person) RETURN n.name AS name, n.id AS id");

            // update the people data
            people.value = result.records.map((record) => ({
                name: record.get("name"),
                id: record.get("id"),
            }));
        } catch (e) {
            console.log(`Error happened, pls help: ${e}`);
        } finally {
            session.close();
        }
    }

    onBeforeUnmount(() => {
        driver.close();
    });

    fetchData();
</script>

<template>
    <div>
        <ul>
            <li
                v-for="person in people"
                :key="person.id"
            >
                {{ person.name }}
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
