<script setup lang="ts">
import { inventory } from "../data/consts";
import InvTable from "./InvTable.vue";

const groupedInv = Object.groupBy(inventory, ({ type }) => (type === "vegetables" || type === "fruit" ? "Veg" : "Nonveg")) || [];
const veg = groupedInv["Veg"] || [];
const Nonveg = groupedInv["Nonveg"] || [];

const reStock = { reStock: true };
const sufficient = { sufficient: true };
const groupedInvMap = Map.groupBy(inventory, ({ quantity }) => (quantity <= 5 ? reStock : sufficient)) || [];
const reStockItems = groupedInvMap.get(reStock) || [];
const sufficientItems = groupedInvMap.get(sufficient) || [];
</script>

<template>
    <InvTable></InvTable>
    <div class="card">
        Veg <button id="type" v-for="(inv, idx) in veg" :key="idx" type="button">{{ inv.name }}</button>
    </div>
    <div class="card">
        Nonveg <button id="type" v-for="(inv, idx) in Nonveg" :key="idx" type="button">{{ inv.name }}</button>
    </div>
    <div class="card">
        Restock <button id="type" v-for="(inv, idx) in reStockItems" :key="idx" type="button">{{ inv.name }}</button>
    </div>
    <div class="card">
        Sufficient <button id="type" v-for="(inv, idx) in sufficientItems" :key="idx" type="button">{{ inv.name }}</button>
    </div>
</template>
