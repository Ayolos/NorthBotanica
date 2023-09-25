<script setup>

const props = defineProps({
    img: String
})
</script>

<template>
    <div class="flex flex-col justify-start w- h-max items-start text-start shadow-2xl gap-6 px-6 py-6 rounded-3xl bg-clearGreen/80 hover:transition hover:ease-in-out hover:scale-[98%]">
        <img class="rounded-2xl w-full h-full drop-shadow-xl hover:transition"
             :src="img" alt="image description">
        <div class="flex flex-col basis-1/2 overflow-clip drop-shadow-[0_3.0px_3.0px_rgba(0,0,0,0.7)] text-white w-full">
            <h1 class="lg:text-2xl text-3xl font-bold"><slot name="title" /></h1>
            <label class="lg:text-xl font-semibold text-md italic w-full"><slot name="description" /></label>
        </div>
    </div>
</template>

<style scoped>

</style>
