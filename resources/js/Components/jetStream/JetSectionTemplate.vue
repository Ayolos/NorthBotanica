<script setup>

</script>

<template>
    <div class="h-full w-full">
        <div class="flex flex-col gap-8 mx-10 py-10 h-full">
            <h2 class="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-darkGreen via-darkGreen to-clearGreen"><slot name="title"></slot></h2>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>

</style>
