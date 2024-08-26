<script setup lang="ts">
import InvTable from "./InvTable.vue";
import { inventory, numbers } from "../data/consts";

const { feature } = defineProps<{ feature: string }>();

const map = new WeakMap();
const key = Symbol("MyKey");
map.set(key, "Hello");

const fndLst = inventory.findLast(({ quantity }) => quantity <= 3);
const fndLstIdx = inventory.findLastIndex(({ quantity }) => quantity <= 3);

const numbersToReverse = Array.from(numbers);
const numbersToSorted = Array.from(numbers);
const numbersToSpliced = Array.from(numbers);
</script>

<template>
    <InvTable v-if="feature === 'findLast' || feature === 'findLastIndex'"></InvTable>
    <div v-if="feature === 'findLast'">Last Item with qty less then 4 = {{ fndLst?.name }}</div>
    <div v-if="feature === 'findLastIndex'">Last Item Index with qty less then 4 = {{ fndLstIdx }}</div>
    <div v-if="feature === 'symbolsAsWeakMapKeys'">Symbol as WeakMap Key = {{ map.get(key) }}</div>

    <div v-if="feature === 'toReversed'">
        Orignal - {{ numbers }}
        <div>toReversed - {{ numbers.toReversed() }}</div>
        Orignal after toReversed - {{ numbers }}
        <div>reverse - {{ numbersToReverse.reverse() }}</div>
        Orignal after reverse - {{ numbersToReverse }}
    </div>
    <div v-if="feature === 'toSorted'">
        Orignal - {{ numbers }}
        <div>toSorted - {{ numbers.toSorted((a, b) => b - a) }}</div>
        Orignal after toSorted - {{ numbers }}
        <div>sort - {{ numbersToSorted.sort((a, b) => b - a) }}</div>
        Orignal after sort - {{ numbersToSorted }}
    </div>
    <div v-if="feature === 'toSpliced'">
        Orignal - {{ numbers }}
        <div>toSpliced - {{ numbers.toSpliced(0, 0, 0) }}</div>
        Orignal after toSpliced - {{ numbers }}
        <div>splice - {{ numbersToSpliced.splice(0, 1, 7) }}</div>
        Orignal after splice - {{ numbersToSpliced }}
    </div>
    <div v-if="feature === 'with'">
        Orignal - {{ numbers }}
        <div>With - {{ numbers.with(0, 8) }}</div>
    </div>
</template>
