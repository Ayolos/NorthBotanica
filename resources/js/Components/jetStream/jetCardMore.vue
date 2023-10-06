<script setup>

import {Icon} from "@iconify/vue";

const props = defineProps({
    href: String,
    url: String
})

</script>

<template>
    <div
        :style="{ backgroundImage: 'url(' + url + ')' }"
        class="relative z-0 bg-cover bg-gray-200 shadow-lg rounded-xl gap-4 w-full h-full flex flex-row justify-center items-center hover:scale-[102%] hover:ease-in-out duration-500">
        <a
            :href="href"
            class="z-20 border border-white inline-flex items-center rounded-full py-2 px-5 mx-3 hover:scale-[98%] hover:ease-in-out duration-500">
            <div class="text-xl text-white font-semibold">
                <slot name="title"></slot>
            </div>
            <Icon icon="majesticons:arrow-right"
                  class="text-4xl text-white"></Icon>
        </a>
        <div class="z-10 absolute inset-0 bg-black/30 rounded-xl"></div>
    </div>
</template>

<style scoped>

</style>
