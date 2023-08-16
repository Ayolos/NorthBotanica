<script setup>

import {Icon} from "@iconify/vue";

const props = defineProps({
    href: String,
    url: String
})

</script>

<template>
    <a
        :href="href"
        :style="{ backgroundImage: 'url(' + url + ')' }"
        class="relative z-0 bg-cover bg-gray-200 shadow-lg rounded-xl gap-4 w-full h-full flex flex-row justify-center items-center hover:scale-[102%] hover:ease-in-out duration-500">
        <div class="z-20 border-2 border-white inline-flex items-center rounded-full py-2 px-5">
            <div class="text-xl text-white font-semibold">
                <slot name="title"></slot>
            </div>
            <Icon icon="majesticons:arrow-right"
                  class="text-4xl text-white"></Icon>
        </div>
        <div class="z-10 absolute inset-0 bg-black/30 hover:bg-black/60 rounded-xl"></div>
    </a>
</template>

<style scoped>

</style>
