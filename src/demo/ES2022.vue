<script setup lang="ts">
const cart = ["apple", "banana", "pear"];
const { feature } = defineProps<{ feature: string }>();
const object1 = {
    prop: "exists",
    prop2: undefined,
};
const foo = {
    hasOwnProperty() {
        return false;
    },
    bar: "The dragons be out of office",
};
const nullProtoObj = Object.create(null);
nullProtoObj.prop = "exists";
</script>

<template>
    <div v-if="feature === 'array.prototype.at'">
        <div>Cart {{ cart }}</div>
        <div>Last item with at (allow negative index) = {{ cart.at(-1) }}</div>
        <div>Last item with cart[-1] = {{ cart[-1] }}</div>
    </div>
    <div v-if="feature === 'object.hasOwn'">
        Object <code> `{ prop: "exists", prop2: undefined, }`</code>
        <div>Has own property <code>'prop'</code> = {{ Object.hasOwn(object1, "prop") }}</div>
        <div>Object.hasOwn <code>'prop2'</code> = {{ Object.hasOwn(object1, "prop2") }}</div>
        <div>Object.hasOwnProperty <code>'prop2'</code> = {{ Object.hasOwnProperty("prop2") }}</div>
        <div>Has own property <code>'toString'</code> = {{ Object.hasOwn(object1, "toString") }}</div>

        <div>Overwritten hasOwnProperty <code>'bar'</code> = {{ Object.hasOwn(foo, "bar") }}</div>
        <div>nullProtoObj<code>'prop'</code> = {{ Object.hasOwn(nullProtoObj, "prop") }}</div>
    </div>
</template>
