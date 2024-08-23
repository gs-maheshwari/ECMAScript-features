<script setup lang="ts">
import ESVersions from "./components/ESVersions.vue";
const title = "ECMAScript Features";
</script>

<template>
    <h1>{{ title }}</h1>
    <ESVersions></ESVersions>
</template>

<style scoped>
h1 {
    margin: 1rem;
}
</style>
