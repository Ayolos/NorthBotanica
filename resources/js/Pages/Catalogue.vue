<script setup>

import NorthBotanicaLayout from "@/Layouts/NorthBotanicaLayout.vue";
import JetGrid from "@/Components/jetStream/JetGrid.vue";
import JetCardPost from "@/Components/jetStream/JetCardPost.vue";
import {onMounted, ref} from "vue";

const data = ref([])
const loading = ref(true)
const opacity = ref(0);
const translateX = ref(100);

onMounted(() => {
    getShows()
});

const activeTab = ref('0')
const getShows = async () => {
    const query = `{
        pageCatalogueCollection {
            items {
              banner {
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

    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}`;
    const fetchOptions = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query

        })
    };

    try {
        const response = await fetch(fetchUrl, fetchOptions).then(response => response.json());
        data.value = response.data?.pageCatalogueCollection?.items[0]
        loading.value = false
        setTimeout(() => {
            opacity.value = 1;
            translateX.value = 0;
        }, 150)
    } catch (error) {
        throw new Error("Could not receive the data from Contentful!");
    }
};

</script>


<template>
    <NorthBotanicaLayout>
        <template #banner-name>
            {{ data.banner?.title }}
        </template>
        <template #banner-description>
            {{ data.banner?.description }}
        </template>
        <main class="h-full w-full min-h-screen" @scroll="handleScroll">
            <section ref="snapContainer"
                     class="w-full pt-48 relative snap-start flex flex-col gap-2 md:gap-24 justify-center items-center">
                <div class="h-3/4 pb-24 border-b border-gray-300 md:px-10 px-0">
                    <div :style="{ opacity, transform: `translateX(${translateX}px)` }"
                         class="ease-in-out duration-700 flex lg:flex-row flex-col gap-2 md:gap-5 md:w-6/7 w-full h-full p-4 mx-auto overflow-auto">
                        <jet-card-post v-for="card in data.cardCollection?.items" :imageSrc="card.imageCard?.url" class="shadow-lg w-full h-full">
                            <template #label>{{ card.label }}</template>
                            <template #title>{{ card.title }}</template>
                            <template #description>{{ card.description }}</template>
                        </jet-card-post>
                    </div>
                </div>
            </section>
            <section ref="snapContainer" class="w-full h-max relative snap-start pb-24 md:px-10 px-0">
                <div class="w-full h-full md:pb-5 md:px-7 px-4 pt-16 pb-4">
                    <div class="flex flex-col gap-12 h-full w-full">
                        <section class="h-1/4" title="banner">
                            <div class="h-full flex flex-col items-start text-start justify-start gap-2 overflow-clip">
                                <div class="font-semibold drop-shadow-xl text-md lg:text-lg w-full lg:w-2/3">
                                    {{ data.section?.label }}
                                </div>
                                <div
                                    class="text-black drop-shadow-lg py-1 font-mono subpixel-antialiased font-black text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-l from-green-500 via-green-600 to-green-700">
                                    {{ data.section?.title }}
                                </div>
                            </div>
                        </section>
                        <jet-grid>
                            <div
                                class="hover:transition hover:ease-in-out hover:scale-[102%] relative grid gap-4 h-auto max-w-full rounded-lg aspect-square bg-cover bg-center"
                                v-for="images in data.section?.imagesCollection?.items"
                                :style="{ backgroundImage: 'url(' + images.url +')' }"
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
