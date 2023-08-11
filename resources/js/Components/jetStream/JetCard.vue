<script setup>
import { Icon } from '@iconify/vue';
import {onMounted} from "vue";

const props = defineProps({
    icon: null,
    title: null,
    description: String,
    isLoading: Boolean
})

</script>

<template>
    <div class="bg-lime-50/75 rounded-xl h-full w-full md:p-5 p-2 hover:transition hover:ease-in-out hover:scale-[102%]">
        <div class="flex flex-col gap-3 h-full w-full overflow-clip pt-4">
            <div v-if="icon" class="flex justify-center items-center aspect-square w-3/4 bg-lime-100 rounded-xl p-2 shadow-xl self-center">
                <img alt="" :src="icon" class="h-1/2 w-1/2" />
            </div>
            <label v-if="title" class="h-max w-max text-sm sm:text-2xl font-black self-center">
                {{ props.title }}
            </label>
            <div v-if="description" class="hidden sm:block">
                <h1 class="h-full text-center">{{ props.description }}</h1>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
