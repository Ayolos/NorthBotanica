<script setup>

import NorthBotanicaLayout from "@/Layouts/NorthBotanicaLayout.vue";
import {Head} from "@inertiajs/vue3";
import JetCardPost from "@/Components/jetStream/JetCardPost.vue";
</script>

<template>
    <Head>
        <title>{{ data?.pageCatalogueCollection?.items[0].banner?.title }}</title>
        <meta name="description">
    </Head>
    <NorthBotanicaLayout>
        <template #banner-label>
            collectivité
        </template>
        <template #banner-name>
            Notre catalogue pour les collectivité
        </template>
        <template #banner-description>
            Hello voici
        </template>
        <main class="h-full w-full min-h-screen">
            <section>
                <div class="grid grid-cols-2 justify-center gap-5">
                    <img src="https://fakeimg.pl/300/">
                    <div>Hello</div>
                </div>
            </section>
        </main>
    </NorthBotanicaLayout>
</template>

<style scoped>

</style>
