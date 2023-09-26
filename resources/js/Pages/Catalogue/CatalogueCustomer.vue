<script setup>

import NorthBotanicaLayout from "@/Layouts/NorthBotanicaLayout.vue";
import JetGrid from "@/Components/jetStream/JetGrid.vue";
import JetCardPost from "@/Components/jetStream/JetCardPost.vue";
import {useContentfulFetch} from "@/Composable/fetchContentfullApi.js";
import {Head} from "@inertiajs/vue3";

const query = `{
        pageCatalogueCollection {
            items {
              banner {
                label
                title
                description
              }
              cardCollection {
                items {
                  title
                  description
                  imageCard {
                    url
                  }
                  label
                }
              }
              section {
                title
                imagesCollection {
                  items {
                    url
                  }
                }
              }
            }
        }
    }`;


const {data, isLoading, error} = useContentfulFetch(query)

</script>


<template>
    <Head>
        <title>{{ data?.pageCatalogueCollection?.items[0].banner?.title }}</title>
        <meta name="description" :content="data?.pageCatalogueCollection?.items[0].banner?.description">
    </Head>
    <NorthBotanicaLayout>
        <template #banner-label>
            {{ data?.pageCatalogueCollection?.items[0].banner?.label }}
        </template>
        <template #banner-name>
            {{ data?.pageCatalogueCollection?.items[0].banner?.title }}
        </template>
        <template #banner-description>
            {{ data?.pageCatalogueCollection?.items[0].banner?.description }}
        </template>
        <main class="h-full w-full min-h-screen">

            <section
                class="w-full pt-24 relative flex flex-col gap-2 sm:gap-24 justify-center items-center">
                <div class="h-3/4 w-full pb-24 border-b border-gray-300 sm:px-10 px-0">
                    <div
                        class="ease-in-out duration-700 items-center flex lg:flex-row flex-col gap-2 sm:gap-5 w-full h-full p-4 mx-auto overflow-auto">
                        <jet-card-post v-for="card in data?.pageCatalogueCollection?.items[0].cardCollection?.items"
                                       :imageSrc="card.imageCard?.url" class="shadow-lg h-[60vh]">
                            <template #label>{{ card.label }}</template>
                            <template #title>{{ card.title }}</template>
                            <template #description>{{ card.description }}</template>
                        </jet-card-post>
                    </div>
                </div>
            </section>
            <section class="w-full h-max relative pb-24 px-0">
                <div class="w-full h-full md:pb-5 md:px-7 px-4 pt-16 pb-4">
                    <div class="flex flex-col gap-12 h-full w-full">
                        <section class="h-1/4" title="banner">
                            <div class="h-full flex flex-col items-start text-start justify-start gap-2 overflow-clip">
                                <div class="font-semibold drop-shadow-xl text-md lg:text-lg w-full lg:w-1/3">
                                    {{ data?.pageCatalogueCollection?.items[0].section?.label }}
                                </div>
                                <div
                                    class="text-black drop-shadow-lg py-1 font-mono subpixel-antialiased font-black text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-l from-darkGreen via-darkGreen to-clearGreen">
                                    {{ data?.pageCatalogueCollection?.items[0].section?.title }}
                                </div>
                            </div>
                        </section>
                        <jet-grid>
                            <div
                                v-for="images in data?.pageCatalogueCollection?.items[0].section?.imagesCollection?.items"
                                :style="{ backgroundImage: 'url(' + images.url +')' }"
                                class="h-full w-full hover:transition hover:ease-in-out hover:scale-[102%] relative grid gap-4 h-auto max-w-full rounded-lg aspect-square bg-cover bg-center"
                            >
                                <div class="absolute inset-0 bg-black/30 rounded-lg"></div>
                            </div>
                        </jet-grid>
                    </div>
                </div>
            </section>
        </main>
    </NorthBotanicaLayout>
</template>

<style scoped>

</style>
