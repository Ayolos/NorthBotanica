<script setup>

import NorthBotanicaLayout from "@/Layouts/NorthBotanicaLayout.vue";
import JetSectionTemplate from "@/Components/jetStream/JetSectionTemplate.vue";
import JetCardMore from "@/Components/jetStream/jetCardMore.vue";
import {useContentfulFetch} from "@/Composable/fetchContentfullApi.js";
import {gsap} from "gsap";
import {onMounted} from "vue";
import {Head} from "@inertiajs/vue3";

const query = `{
        pageCatalogueHomeCollection {
            items {
              banner {
                title,
                description
              }
              title
              card1 {
                img {
                  url
                }
                text
              }
              card2 {
                img {
                  url
                }
                text
              }
            }
          }
    }`;


const {data, isLoading, error} = useContentfulFetch(query)
const animateLoad = (elem, initXPosition, initYPosition) => {
    const tl = gsap.timeline();
    tl.set(elem, { x: initXPosition, y:initYPosition, opacity: 0 });
    tl.to(elem, {
        duration: 0.5,
        ease: 'sine',
        opacity: 1,
        x: 0,
        y:0,
    });
    tl.play()
}

onMounted( () => {
    animateLoad(".animate-left", -50, -20)
})
</script>

<template>
    <Head>
        <title>{{ data?.pageCatalogueHomeCollection?.items[0].banner?.title }}</title>
        <meta name="description" :content="data?.pageCatalogueHomeCollection?.items[0].banner?.description">
    </Head>
    <north-botanica-layout>
        <template #banner-name
        >
            {{ data?.pageCatalogueHomeCollection?.items[0].banner?.title }}
        </template>
        <template #banner-description>
            {{ data?.pageCatalogueHomeCollection?.items[0].banner?.description }}
        </template>
        <section
            class="w-full h-[55vh] animate-left">
            <jet-section-template>
                <template #title>{{ data?.pageCatalogueHomeCollection?.items[0].title }}</template>
                <div class="w-full h-full flex md:flex-row flex-col justify-center gap-4">
                    <jet-card-more :href="route('catalogue.pro')"
                                   :url="data?.pageCatalogueHomeCollection?.items[0].card1?.img.url"
                    >
                        <template #title>
                            {{ data?.pageCatalogueHomeCollection?.items[0].card1?.text }}
                        </template>
                    </jet-card-more>
                    <jet-card-more :href="route('catalogue.customer')"
                                   :url="data?.pageCatalogueHomeCollection?.items[0].card2?.img.url"
                    >
                        <template #title>
                            {{ data?.pageCatalogueHomeCollection?.items[0].card2?.text }}
                        </template>
                    </jet-card-more>
                </div>
            </jet-section-template>
        </section>
    </north-botanica-layout>
</template>

<style scoped>

</style>
