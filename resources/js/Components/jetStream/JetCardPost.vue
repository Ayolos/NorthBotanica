<script setup>

const props = defineProps({
    imageSrc: String
})
</script>

<template>
    <div class="z-0 m-2 relative max-w-full max-h-full button bg-white rounded-2xl md:w-full w-3/4 mx-auto aspect-square md:aspect-auto shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-[102%] hover:transition hover:ease-in">
        <a href="#" class="-z-10 absolute inset-0">
            <img class="rounded-2xl h-full w-full" :src="imageSrc" alt="" />
        </a>
        <div class="-z-10 absolute inset-0 bg-black/50 rounded-2xl">

        </div>
        <div class="aspect-square p-5 h-full flex flex-col gap-2 drop-shadow-xl">
            <a href="#">
                <h5 class="text-sm tracking-tight text-white dark:text-white"><slot name="label"></slot></h5>
            </a>
            <a href="#">
                <h5 class="md:text-2xl text-sm font-bold tracking-tight text-lime-50 dark:text-white"><slot name="title"></slot></h5>
            </a>
            <p class="mb-3 font-normal text-lg text-white dark:text-gray-400"><slot name="description"></slot></p>
        </div>
    </div>
</template>

<style scoped>

</style>
