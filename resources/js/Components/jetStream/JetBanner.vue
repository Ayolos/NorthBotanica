<script setup>

import {onMounted, useSlots} from "vue";
import {useContentfulFetch} from "@/Composable/fetchContentfullApi.js";
import {gsap} from "gsap";
import logger from "@fortawesome/vue-fontawesome/src/logger.js";

const slots = useSlots();

const props = defineProps({})
const slotsClass = () => {
    return slots.label ? 'justify-start text-start' : 'justify-center text-center'
}

</script>

<template>
    <div class="h-full w-full md:py-36 py-20 flex items-center justify-center border-b border-gray-200">
        <div :class="[slotsClass()]" class="flex flex-col h-max items-center w-3/4">
            <label class="w-full text-lg md:text-2xl font-bold">
                <slot name="label"/>
            </label>
            <h1 class="w-full text-3xl md:text-4xl font-bold pb-4 drop-shadow-xl text-transparent bg-clip-text bg-gradient-to-l from-darkGreen via-darkGreen to-clearGreen">
                <slot name="title"/>
            </h1>
            <p class="w-full text-md md:text-lg text-gray-400">
                <slot name="description"/>
            </p>
        </div>
    </div>
</template>

<style scoped>

</style>
