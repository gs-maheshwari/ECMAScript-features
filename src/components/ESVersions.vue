<script setup lang="ts">
import { ref } from "vue";
import ESFeatures from "./ESFeatures.vue";
import { ESVersions } from "../data";
const selectedVersion = ref<string | null>(null);

const selectVersion = (version: string) => {
    selectedVersion.value = version;
};
</script>

<template>
    <nav class="flex gap-x-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
        <button
            v-for="(es, idx) in ESVersions"
            :key="idx"
            type="button"
            class="hs-tab-active:bg-gray-200 hs-tab-active:text-gray-800 hs-tab-active:hover:text-gray-800 dark:hs-tab-active:bg-neutral-700 dark:hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
            id="pills-on-gray-color-item-2"
            aria-selected="false"
            data-hs-tab="#pills-on-gray-color-2"
            aria-controls="pills-on-gray-color-2"
            role="tab"
            @click="selectVersion(es)"
        >
            {{ es }}
        </button>
    </nav>
    <br />
    <div v-if="selectedVersion" class="flex flex-wrap">
        <ESFeatures :version="selectedVersion"></ESFeatures>
    </div>
</template>
