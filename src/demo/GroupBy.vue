<script setup lang="ts">
const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 15 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 3 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];

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
    <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
                <div class="overflow-hidden">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                        <thead>
                            <tr>
                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Name</th>
                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Type</th>
                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Qty</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                            <tr v-for="(iv, id) in inventory" :key="id">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">{{ iv.name }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{{ iv.type }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{{ iv.quantity }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
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
