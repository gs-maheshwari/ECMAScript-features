<script setup lang="ts">
const cart = ["apple", "banana", "pear"];
</script>

<template>
    <div>Cart {{ cart }}</div>
    <div>Last item with at (allow negative index) = {{ cart.at(-1) }}</div>
    <div>Last item with cart[-1] = {{ cart[-1] }}</div>
</template>
