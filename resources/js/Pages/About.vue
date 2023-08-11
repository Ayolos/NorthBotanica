<script setup>

import NorthBotanicaLayout from "@/Layouts/NorthBotanicaLayout.vue";
import {ref} from "vue";
import JetIconCard from "@/Components/jetStream/JetIconCard.vue";
import {useContentfulFetch} from '@/Composable/fetchContentfullApi.js'
import JetBanner from "@/Components/jetStream/JetBanner.vue";
import JetSectionTemplate from "@/Components/jetStream/JetSectionTemplate.vue";

const opacity = ref(0);
const translateX = ref(100);

const query = `{
        pageAProposCollection {
            items {
              banner {
                title
                label
              }
              sectionExpert {
                title
                label
                imagesCollection {
                  items {
                    url
                    title
                    description
                  }
                }
              }
            }
          }
          sectionTemplateCollection {
            items {
              title
              description
              img {
                url
              }
            }
          }
    }`;

const {data, isLoading} = useContentfulFetch(query)

</script>

<template>
    <NorthBotanicaLayout>
        <template #banner-name>
            {{ data?.pageAProposCollection?.items[0].banner.title }}
        </template>
        <template #banner-label>
            {{ data?.pageAProposCollection?.items[0].banner.label }}
        </template>
        <section class="h-full">
            <jet-section-template v-for="(section, index) in data?.sectionTemplateCollection?.items" >
                <template #title>
                    {{ section.title }}
                </template>
                <template #description>
                    {{ section.description }}
                </template>
                <template #image>
                    <div
                        class="w-full h-full bg-cover bg-center rounded-xl shadow-xl"
                        :style="{ backgroundImage: 'url(' + section.img.url +')'}" />
                </template>
            </jet-section-template>
        </section>

<!--            <jet-banner>
                <template #title>
                    {{ data?.pageAProposCollection?.items[0].banner.title }}
                </template>
                <template #label>
                    {{ data?.pageAProposCollection?.items[0].banner.label }}
                </template>
            </jet-banner>-->
<!--        <div class="flex flex-col gap-24 pt-48">
            <section class="flex justify-center border-b border-gray-300 pb-24" title="banner">
                <div
                    v-if="!isLoading"
                    :style="{ opacity, transform: `translateX(${translateX}px)` }"
                    class="duration-500 ease-in-out h-full flex flex-col items-start text-start justify-center gap-2 sm:px-20 px-5 overflow-clip">
                    <div class="text-black font-black drop-shadow-xl text-md lg:text-lg w-full lg:w-1/2">
                        {{ data?.pageAProposCollection?.items[0] }}
                    </div>
                    <div v-if="!isLoading"
                         class="text-black drop-shadow-xl font-mono subpixel-antialiased font-black text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-l from-green-500 via-green-600 to-green-700">
                        {{ data?.pageAProposCollection?.items[0].banner.title }}
                    </div>
                </div>
                <div v-else
                     class="invisible h-full flex flex-col items-start text-start justify-center gap-2 sm:px-20 px-5 overflow-clip">
                    <div class="text-black font-black drop-shadow-xl text-md lg:text-lg w-full lg:w-1/2">Default</div>
                    <div
                        class="text-black drop-shadow-xl font-mono subpixel-antialiased font-black text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-l from-green-500 via-green-600 to-green-700">
                        Default
                    </div>
                </div>
            </section>
        </div>
        <section
            v-for="(section, index) in data?.sectionTemplateCollection?.items"
            ref="snapContainer"
            class="w-full relative pb-24 border-b border-gray-300 snap-start"
        >
            <div :class="[index === 1 ? 'lg:flex lg:flex-row-reverse' : 'lg:flex lg:flex-row']"
                 class="h-full justify-center items-center md:px-14 px-5 gap-16 pt-24">
                <div :style="{ opacity, transform: `translateX(${translateX}px)` }"
                     class="md:basis-1/2 h-full ease-in-out duration-700 self-center flex flex-col text-white gap-6 bg-green-700 border border-green-800 py-20 px-16 rounded-2xl shadow-lg">
                    <div class="font-black bg-clip-text lg:text-6xl text-4xl drop-shadow-xl">
                        {{ section.title }}
                    </div>
                    <div class="md:text-lg text-md">
                        {{ section.description }}
                    </div>
                </div>
                <div
                    :style="{ backgroundImage: 'url(' + section.img.url +')', opacity, transform: `translateY(${translateX}px)` }"
                    class="w-full aspect-square relative shadow-lg rounded-2xl bg-cover bg-center hidden lg:block lg:basis-1/2 ease-in-out duration-700"
                ></div>
            </div>
        </section>
        <section>
            <div
                class="h-max min-h-max w-full flex flex-col gap-12 my-auto justify-center px-10 py-24 border-b border-gray-300">
                <div class="h-full flex flex-col items-start text-start justify-start gap-2 overflow-clip">
                    <div class="text-black font-black drop-shadow-xl text-md lg:text-lg w-full lg:w-2/3 py-1">
                        {{ data?.pageAProposCollection?.items[0].sectionExpert?.label }}
                    </div>
                    <div
                        class="text-black drop-shadow-xl font-mono subpixel-antialiased font-black text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-l from-green-500 via-green-600 to-green-700">
                        {{ data?.pageAProposCollection?.items[0].sectionExpert?.title }}
                    </div>
                </div>
                <div
                    class="h-max grid md:grid-cols-3 grid-cols-1 md:grid-rows-1 grid-rows-3 gap-4 flex-wrap">
                    <jet-icon-card
                        v-for="element in data?.pageAProposCollection?.items[0].sectionExpert?.imagesCollection?.items"
                        :img="element.url">
                        <template #title>{{ element.title }}</template>
                        <template #description>{{ element.description }}</template>
                    </jet-icon-card>
                </div>
            </div>
        </section>-->
    </NorthBotanicaLayout>
</template>

<style scoped>

</style>
