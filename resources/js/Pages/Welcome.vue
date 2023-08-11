<template>
    <NorthBotanicaLayout>
        <div class="h-full min-h-screen">
            <div class="h-full w-full flex items-center flex-col gap-24 pb-24" >
                <div
                    class="relative flex flex-col gap-12 w-full h-[50vh] bg-cover lg:bg-contain bg-bottom bg-fixed"
                     :style="{backgroundImage: 'url(' + data?.accueilCollection?.items[0].image.url + ')'}"
                >
                    <div class="z-0 absolute inset-0 bg-black/50"></div>
                    <div
                        class="load h-full flex flex-col justify-center gap-8 animateBounce">
                        <div class="w-full">
                            <h1
                                class="drop-shadow-xl text-4xl md:text-6xls font-black text-center text-transparent bg-clip-text bg-gradient-to-l from-green-500 via-green-600 to-green-700 py-3 w-3/4 mx-auto">
                                {{ data?.accueilCollection?.items[0].title }}
                            </h1>
                            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"></div>
                        </div>
                        <div
                            class="flex flex-row justify-center gap-8 z-10">
                            <a :href="route('catalogue')"
                               class=" bg-green-700 rounded-full py-3 shadow-2xl hover:scale-[102%] hover:duration-300 hover:ease-in-out px-6 text-white inline-flex items-center"
                            >
                                Nos travaux
                                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                            <a :href="route('contact')" class="border border-gray-300 text-sm hover:scale-[102%] hover:duration-300 hover:ease-in-out bg-gray-100 rounded-full py-3 px-6 text-black inline-flex items-center">
                                Nous contactez
                            </a>
                        </div>
                    </div>
                </div>
                <jet-card-more-info class="animateBounce" :datat="data?.accueilCollection.items[0].cardHomeCollection.items">
                </jet-card-more-info>
            </div>
        </div>
    </NorthBotanicaLayout>
</template>

<script setup>
import NorthBotanicaLayout from "@/Layouts/NorthBotanicaLayout.vue";
import {onMounted, ref, watch} from "vue";
import JetCardMoreInfo from "@/Components/jetStream/JetCardMoreInfo.vue";
import {useContentfulFetch} from "@/Composable/fetchContentfullApi.js";
import {gsap} from "gsap";

const { props } = defineProps(["canLogin", "canRegister", "laravelVersion", "phpVersion"]);

const query = `{
    accueilCollection{
      items{
        title
        image {
            url
        }
        cardHomeCollection{
          items{
            icon{
              url
            }
            title
            description
          }
        }
      }
    }
  }`;

const {data, isLoading} = useContentfulFetch(query)

onMounted(() => {
    animateLoad('.animateBounce')
})
const animateLoad = (elem) => {
    const tl = gsap.timeline();
    tl.set(elem, { x: -20, y:-20, opacity: 0 });
    tl.to(elem, {
        duration: 1,
        ease: 'bounce',
        opacity: 1,
        x: 0,
        y:0,
    }, '<');
    tl.play()
}

</script>

<style>
.bg-dots-darker {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
}

@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
    }
}

.slide-fade-enter-active {
    transition: all 0.3s ease;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
{
    transform: translateX(10px);
    opacity: 1;
}
</style>
