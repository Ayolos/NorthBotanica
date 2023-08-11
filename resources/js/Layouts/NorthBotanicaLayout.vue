<script setup>

import JetHeader from "@/Components/jetStream/JetHeader.vue";
import JetFooter from "@/Components/jetStream/JetFooter.vue";
import JetBanner from "@/Components/jetStream/JetBanner.vue";
import {ref} from "vue";

</script>

<template>
<div class="relative z-0 h-full min-h-screen max-h-full">
    <jet-header></jet-header>
    <jet-banner
        v-if="$slots['banner-name'] || $slots['banner-description'] || $slots['banner-label']"
        class="bg-black/5">
        <template #title v-if="$slots['banner-name']">
            <slot name="banner-name" />
        </template>
        <template #label v-if="$slots['banner-label']">
            <slot name="banner-label" />
        </template>
        <template #description v-if="$slots['banner-description']">
            <slot name="banner-description" />
        </template>
    </jet-banner>
    <div class="min-h-screen h-full w-full">
        <slot />
    </div>
    <jet-footer></jet-footer>
</div>
</template>

<style scoped>

</style>
