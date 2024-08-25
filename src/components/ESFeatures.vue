<script setup lang="ts">
import { ref, watch } from "vue";

import { featureMap } from "../data";
import GroupBy from "../demo/GroupBy.vue";
import WithResolvers from "../demo/WithResolvers.vue";

const props = defineProps<{ version: string }>();

const featureName = ref<string | null>(null);

watch(
    () => props.version,
    () => {
        featureName.value = null;
    }
);

const setDemoFeature = (ft: string) => {
    featureName.value = ft;
};
</script>

<template>
    <div class="border-e border-gray-200 dark:border-neutral-700">
        <nav class="flex flex-col space-y-2" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
            <button
                type="button"
                v-for="(ft, idx) in featureMap.get(version)"
                :key="idx"
                class="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active"
                id="vertical-tab-with-border-item-1"
                aria-selected="true"
                data-hs-tab="#vertical-tab-with-border-1"
                aria-controls="vertical-tab-with-border-1"
                role="tab"
                @click="setDemoFeature(ft)"
            >
                {{ ft }}
            </button>
        </nav>
    </div>
    <div v-if="featureName" class="ms-3">
        <div id="vertical-tab-with-border-1" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-1">
            <p class="text-gray-500 dark:text-neutral-400">
                <GroupBy v-if="featureName === 'groupBy'" />
                <WithResolvers v-if="featureName === 'withResolvers'" />
            </p>
        </div>
    </div>
</template>
