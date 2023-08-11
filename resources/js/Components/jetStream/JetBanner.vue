<script setup>

import {computed, useSlots} from "vue";

const slots = useSlots();

const props = defineProps({
})
const slotsClass = () => {
    return slots.label ? 'justify-start text-start' : 'justify-center text-center'
}

</script>

<template>
        <div class="h-full w-full py-36 flex items-center justify-center border-b border-gray-200">
            <div class="flex flex-col h-max items-center md:w-1/2 w-3/4" :class="[slotsClass()]">
                <label class="w-full text-lg md:text-2xl font-bold"><slot name="label"/></label>
                <h1 class="w-full text-3xl md:text-5xl font-bold pt-2 pb-4 drop-shadow-xl text-transparent bg-clip-text bg-gradient-to-l from-green-500 via-green-600 to-green-700"><slot name="title" /></h1>
                <p class="w-full text-md md:text-lg text-gray-400"><slot name="description" /></p>
            </div>
        </div>
</template>

<style scoped>

</style>
