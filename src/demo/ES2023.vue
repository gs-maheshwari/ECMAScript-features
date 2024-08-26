<script setup lang="ts">
import InvTable from "./InvTable.vue";
import { inventory } from "../data/consts";

const props = defineProps<{ feature: string }>();

const map = new WeakMap();
const key = Symbol("MyKey");
map.set(key, "Hello");

const fndLst = inventory.findLast(({ quantity }) => quantity <= 3);
const fndLstIdx = inventory.findLastIndex(({ quantity }) => quantity <= 3);
</script>

<template>
    <InvTable v-if="props.feature === 'findLast' || props.feature === 'findLastIndex'"></InvTable>
    <div v-if="props.feature === 'findLast'">Last Item with qty less then 4 = {{ fndLst?.name }}</div>
    <div v-if="props.feature === 'findLastIndex'">Last Item Index with qty less then 4 = {{ fndLstIdx }}</div>
    <div v-if="props.feature === 'symbolsAsWeakMapKeys'">Symbol as WeakMap Key = {{ map.get(key) }}</div>
</template>
