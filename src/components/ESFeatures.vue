<script setup lang="ts">
import { ref, watch } from "vue";

import { featureMap } from "../data";
import { es2023FeatureList } from "../data/es2023";
import { es2022FeatureList } from "../data/es2022";
import GroupBy from "../demo/GroupBy.vue";
import WithResolvers from "../demo/WithResolvers.vue";
import ES2023 from "../demo/ES2023.vue";
import ES2022 from "../demo/ES2022.vue";

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
                <ES2023 v-if="es2023FeatureList.includes(featureName)" :feature="featureName"></ES2023>
                <ES2022 v-if="es2022FeatureList.includes(featureName)" :feature="featureName"></ES2022>
            </p>
        </div>
    </div>
</template>
