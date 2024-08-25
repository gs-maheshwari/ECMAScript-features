<script setup lang="ts">
import InvTable from "./InvTable.vue";
import { inventory } from "../data/consts";

const fndLst = inventory.findLast(({ quantity }) => quantity <= 3);
const fndLstIdx = inventory.findLastIndex(({ quantity }) => quantity <= 3);
</script>

<template>
    <InvTable></InvTable>
    Last Item with qty less then 4 = {{ fndLst?.name }} <br />
    Item Index {{ fndLstIdx }}
</template>
