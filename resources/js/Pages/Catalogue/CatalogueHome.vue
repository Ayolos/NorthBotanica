<script setup>

import NorthBotanicaLayout from "@/Layouts/NorthBotanicaLayout.vue";
import JetSectionTemplate from "@/Components/jetStream/JetSectionTemplate.vue";
import JetCardMore from "@/Components/jetStream/jetCardMore.vue";
import {useContentfulFetch} from "@/Composable/fetchContentfullApi.js";

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

</script>

<template>
    <north-botanica-layout>
        <template #banner-name>
            {{ data?.pageCatalogueHomeCollection?.items[0].banner?.title }}
        </template>
        <template #banner-description>
            {{ data?.pageCatalogueHomeCollection?.items[0].banner?.description }}
        </template>
        <main class="w-full h-[55vh]">
            <jet-section-template>
                <template #title>{{ data?.pageCatalogueHomeCollection?.items[0].title }}</template>
                <section class="w-full h-full flex md:flex-row flex-col justify-center gap-4">
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
                </section>
            </jet-section-template>
        </main>
    </north-botanica-layout>
</template>

<style scoped>

</style>
