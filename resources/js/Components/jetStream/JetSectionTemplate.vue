<script setup>

</script>

<template>
    <div class="h-full w-full">
        <div class="flex flex-col gap-8 mx-10 py-10 h-full">
            <h2 class="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-green-500 via-green-600 to-green-600"><slot name="title"></slot></h2>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>

</style>
