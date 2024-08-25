<script setup lang="ts">
import { ref } from "vue";
const output = ref("Loading response");
const { promise, resolve, reject } = Promise.withResolvers();

setTimeout(() => {
    resolve("Resolved");
}, 5000);

setTimeout(() => {
    reject("Rejected");
}, 6000);

promise.then((res) => (output.value = `Cool ${res}`)).catch((err) => (output.value = `Bad ${err}`));
</script>
<template>{{ output }}</template>
