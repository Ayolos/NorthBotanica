<script setup>

import JetHeader from "@/Components/jetStream/JetHeader.vue";
import JetFooter from "@/Components/jetStream/JetFooter.vue";
import JetBanner from "@/Components/jetStream/JetBanner.vue";

</script>

<template>
    <div class="relative z-0 h-full min-h-screen max-h-full bg-gray-100">
        <jet-header></jet-header>
        <jet-banner
            v-if="$slots['banner-name'] || $slots['banner-description'] || $slots['banner-label']"
            class="bg-gray-100">
            <template v-if="$slots['banner-name']" #title>
                <slot name="banner-name"/>
            </template>
            <template v-if="$slots['banner-label']" #label>
                <slot name="banner-label"/>
            </template>
            <template v-if="$slots['banner-description']" #description>
                <slot name="banner-description"/>
            </template>
        </jet-banner>
        <main class="h-full w-full">
            <slot/>
        </main>
        <jet-footer></jet-footer>
    </div>
</template>

<style scoped>

</style>
