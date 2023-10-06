<script setup>

import NorthBotanicaLayout from "@/Layouts/NorthBotanicaLayout.vue";
import {Head} from "@inertiajs/vue3";
import JetCardPost from "@/Components/jetStream/JetCardPost.vue";
import {useContentfulFetch} from "@/Composable/fetchContentfullApi.js";

const query = `{
        pageCollectiviteCollection(limit: 10, skip: 0) {
            items {
              banner {
                title
                description
                label
              }
              contentCollection {
                items {
                  title
                  img { url }
                  content {json}
                }
              }
            }
          }
    }`;


const {data, isLoading, error} = useContentfulFetch(query)
</script>

<template>
    <Head>
        <title>{{ data?.pageCollectiviteCollection?.items[0].banner?.title }}</title>
        <meta name="description">
    </Head>
    <NorthBotanicaLayout>
        <template #banner-label>
            {{ data?.pageCollectiviteCollection?.items[0].banner?.label }}
        </template>
        <template #banner-name>
            {{ data?.pageCollectiviteCollection?.items[0].banner?.title }}
        </template>
        <template #banner-description>
            {{ data?.pageCollectiviteCollection?.items[0].banner?.description }}
        </template>
        <section class="flex flex-col gap-12 py-16 lg:px-32 px-10">
            <h2 class="text-2xl font-semibold">{{ data?.pageCollectiviteCollection?.items[0].contentCollection?.items[0].title }}</h2>
            <div class="flex flex-row h-full gap-10">
                <img :src="data?.pageCollectiviteCollection?.items[0].contentCollection?.items[0].img.url" class="w-[40%] shadow-lg rounded-md md:block hidden">
                <div class="flex flex-col gap-4 md:basis-2/3 text-start">
                    <p class="text-sm" v-for="p in data?.pageCollectiviteCollection?.items[0].contentCollection?.items[0].content?.json?.content">
                        {{ p.content[0].value }}
                    </p>
                </div>
            </div>
        </section>
        <section class="flex flex-col gap-12 py-16 lg:px-32 px-10">
            <h2 class="text-2xl font-semibold">{{ data?.pageCollectiviteCollection?.items[0].contentCollection?.items[1].title }}</h2>
            <div class="flex flex-col text-center gap-10">
                <img :src="data?.pageCollectiviteCollection?.items[0].contentCollection?.items[1].img.url" class="shadow-lg rounded-md bg-cover h-[35vh] md:block hidden">
                <div class="flex flex-col gap-4 md:basis-2/3 h-max text-justify text-md">
                    <p class="md:basis-2/3 text-justify text-sm" v-for="p in data?.pageCollectiviteCollection?.items[0].contentCollection?.items[1].content?.json?.content">
                        {{ p.content[0].value }}
                    </p>
                </div>
            </div>
        </section>
        <section class="flex flex-col gap-12 py-16 lg:px-32 px-10">
            <h2 class="text-2xl font-semibold">{{ data?.pageCollectiviteCollection?.items[0].contentCollection?.items[2].title }}</h2>
            <div class="flex flex-row-reverse h-full gap-10">
                <img :src="data?.pageCollectiviteCollection?.items[0].contentCollection?.items[2].img.url" class="basis-1/3 w-[40%] h-[100%] shadow-lg rounded-md md:block hidden">
                <div class="flex flex-col gap-4 md:basis-2/3 text-justify text-md">
                    <p class="md:basis-2/3 text-justify text-sm" v-for="p in data?.pageCollectiviteCollection?.items[0].contentCollection?.items[2].content?.json?.content">
                        {{ p.content[0].value }}
                    </p>
                </div>
            </div>
        </section>
        <section class="flex flex-col gap-12 py-16 lg:px-32 px-10">
            <h2 class="text-2xl font-semibold">{{ data?.pageCollectiviteCollection?.items[0].contentCollection?.items[3].title }}</h2>
            <div class="flex flex-col-reverse text-center gap-10">
                <img :src="data?.pageCollectiviteCollection?.items[0].contentCollection?.items[3].img.url" class="shadow-lg rounded-md bg-cover h-[35vh] md:block hidden">
                <div class="flex flex-col gap-4 md:basis-2/3 h-max text-justify text-md">
                    <p class="md:basis-2/3 text-justify text-sm" v-for="p in data?.pageCollectiviteCollection?.items[0].contentCollection?.items[3].content?.json?.content">
                        {{ p.content[0].value }}
                    </p>
                </div>
            </div>
        </section>
    </NorthBotanicaLayout>
</template>

<style scoped>

</style>
