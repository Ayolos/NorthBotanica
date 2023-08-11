<script setup>
import { initFlowbite } from 'flowbite'
import {computed, onMounted, ref} from "vue";
import {Icon} from "@iconify/vue";

const props = defineProps({
    nbrCheck: {
        type: Number,
        default: 1
    }
})


const datas = ref([
    {
        name: 'about',
        icon: 'mdi:about'
    },
    {
        name: 'project',
        icon: 'fa-solid:leaf'
    },
    {
        name: 'team',
        icon: 'fluent:people-team-16-filled'
    },
    {
        name: 'about',
        icon: 'solar:verified-check-bold'
    }
])

onMounted(() => {
    initFlowbite();
})

const checkClass = (index) => {
    if (index === 0){
        return 'rounded-t-full'
    }
    else if (index === datas.value.length - 1){
        return 'rounded-b-full'
    }
}


</script>

<template>
    <div class="fixed shadow-xl z-50 w-max h-max max-w-lg -translate-x-1/2 translate-y-full bg-lime-50 border border-gray-200 rounded-full top-0 right-0 dark:bg-gray-700 dark:border-gray-600">
        <div class="h-full max-w-lg flex-col">
            <div class="relative" v-for="(data, index) in datas">
                <button :key="index" data-tooltip-target="tooltip-home" type="button" class="inline-flex w-full aspect-square flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                >
                    <Icon :icon="data.icon" class="text-3xl"></Icon>
                    <span class="sr-only">{{ data.name }}</span>
                </button>
                <div v-if="nbrCheck === index" class="absolute inset-0 bg-black/10" :class="[checkClass(index)]"></div>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>
