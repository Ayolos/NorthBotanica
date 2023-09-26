<script setup>

import NorthBotanicaLayout from "@/Layouts/NorthBotanicaLayout.vue";
import {useContentfulFetch} from "@/Composable/fetchContentfullApi.js";
import {computed, onMounted, ref} from "vue";
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {Head} from "@inertiajs/vue3";


const query = `{
        pageAProposCollection {
            items {
              banner {
                title
                label
              }
              backgroundImg {
                url
              }
              sectionAPropos {
                title
                paragraphe1
                title1
                paragraphe2
                title2
                paragraphe3
                title3
                image {
                  url
                }
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
              sectionNosValeurs {
                title
                paragraphe1
                paragraphe2
                paragraphe3
                paragraphe4
              }
            }
          }
    }`;

const {data, isLoading} = useContentfulFetch(query)

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    animateLoad('.init-animate')
    handleScroll('.wrapper-scroll')
    handleScrollAbout('.container-about')
    handleTeamScroll()
});

const animateLoad = (elem) => {
    if (window.matchMedia("(min-width: 768px)").matches) {
        const tl= gsap.timeline();
        tl.set(elem, {x:100, opacity: 0})
        tl.to(elem, {
            x:0,
            ease: 'bounce',
            opacity: 1,
            duration: 1
        })
    }
}
const handleTeamScroll = () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
        const tl2 = gsap.timeline({
            ease:'none',
            scrollTrigger: {
                trigger: '.container-team',
                scrub: 0,
                start: "center center",
                end: "+=300%",
                pin: true,
            }
        });

        tl2.set('.img-1', {y:0})
        tl2.set('.img-2', {y: "+=50%", opacity:0})
        tl2.set('.img-3', {y: "+=50%", opacity:0})
        tl2.set('.text-1', {y:0})
        tl2.set('.text-2', {y: "+=50%", opacity:0})
        tl2.set('.text-3', {y: "+=50%", opacity:0})
        tl2.to('.img-1', {
            ease: 'none',
            y:'-=250%',
            opacity: 1,
            duration: 0.5,
        });
        tl2.to('.text-1', {
            ease: 'none',
            y:'-=250%',
            opacity: 1,
            duration: 0.5,
        }, '<');

        tl2.to('.img-2', {
            ease: 'none',
            y:'0',
            opacity: 1,
            duration: 0.5,
        }, );
        tl2.to('.text-2', {
            ease: 'none',
            y:'0',
            opacity: 1,
            duration: 0.5,
        }, '<');
        tl2.to('.img-2', {
            ease: 'none',
            y:'-=250%',
            opacity: 1,
            duration: 0.5,
        });
        tl2.to('.text-2', {
            ease: 'none',
            y:'-=100%',
            opacity: 1,
            duration: 0.5,
        }, '<');

        tl2.to('.img-3', {
            ease: 'none',
            y:'0',
            opacity: 1,
            duration: 0.5,
        }, );
        tl2.to('.text-3', {
            ease: 'none',
            y:'0',
            opacity: 1,
            duration: 0.5,
        }, '<');
    }
}

const handleScrollAbout =  (elem) => {
    if (window.matchMedia("(min-width: 768px)").matches) {
        const tl = gsap.timeline({
            ease:'none',
            scrollTrigger: {
                trigger: elem,
                start: "center center",
                end: "+=500",
                pin: true,
                scrub: 0,
            }
        });

        tl.set('.text-animate-about', {x:-30, y:-20, opacity:0})
        tl.to('.text-animate-about', {
            y:0,
            x: 0,
            opacity: 1,
            duration: 0.5,
        },  '<')

        gsap.set('.icon-about', {x: "-=10", y: "+=10", opacity: 0})
        tl.to('.icon-about', {
            ease: 'none',
            x: 0,
            y: 0,
            opacity: 1,
        }, '<');

        gsap.set('.text-about', {x: "0", y: "-=10", opacity: 0})
        tl.to('.text-about', {
            ease: 'none',
            x: 0,
            y: 0,
            opacity: 1,
        }, '<');
    }


}
const handleScroll = (elem) => {
    if (window.matchMedia("(min-width: 768px)").matches) {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: elem,
                scrub: 0,
                start: "top top",
                end: "+=1000",
            }
        });

        tl.set('.text-animate', {x:0, y:0, opacity:1})
        tl.set('.text-animate-label', {x:0, y:0, opacity:1})

        tl.to('.text-animate-label', {
            opacity: 0,
            duration: 0.4,
        }, '<')

        tl.to('.text-animate', {
            x:50,
            y:50,
            opacity: 0,
            duration: 0.6,
        }, '<')

        gsap.set('.icon', {margin: 0})
        tl.to('.icon', {
            ease: 'none',
            margin: '4%',
            duration: 2
        });
    }

};

const isTransition = computed(() => {
    return window.matchMedia("(min-width: 768px)").matches
})

const opacity = ref(0)
</script>

<template>
    <Head>
        <title>{{ data?.pageAProposCollection?.items[0].banner.title }}</title>
        <meta name="description" content="Découvrez La mission de North Botanica. Nous sommes dédiés à fournir des produits botaniques de qualité supérieure pour promouvoir le bien-être naturel. Apprenez-en plus sur notre équipe passionnée et notre engagement envers la durabilité.">
    </Head>
    <NorthBotanicaLayout>
        <div class="wrapper-scroll w-full">
            <section class="h-[100vh] w-full">
                <div class="w-max mx-auto h-full flex flex-col pt-[30vh] init-animate"
                >
                    <label class="md:text-xl text-md font-bold text-animate-label">{{ data?.pageAProposCollection?.items[0].banner.label }}</label>
                    <h1 class="md:text-5xl text-3xl font-bold text-animate">{{ data?.pageAProposCollection?.items[0].banner.title }}</h1>
                </div>
            </section>
            <section class="w-full h-full box-content overflow-x-hidden">
                <div class="flex h-[70vh] w-full justify-center"
                >
                    <div
                        :style="{ backgroundImage: 'url(' + data?.pageAProposCollection?.items[0].backgroundImg?.url + ')' }"
                        class="w-full bg-center icon bg-fixed overflow-x-hidden" />
                </div>
            </section>
            <section class="lg:h-[70vh] w-full gap-20 container-about flex flex-col px-8 pt-[10vh] lg:pt-0">
                <h2
                    class="flex justify-center w-full md:text-5xl text-3xl font-bold text-animate-about text-transparent bg-clip-text bg-gradient-to-l from-darkGreen via-darkGreen to-clearGreen">
                    {{ data?.pageAProposCollection?.items[0].sectionAPropos?.title }}
                </h2>
                <div class="flex flex-row gap-10 lg:justify-center w-full h-full">
                    <div
                        :style="{ backgroundImage: 'url(' + data?.pageAProposCollection?.items[0].sectionAPropos?.image.url + ')' }"
                        class="bg-cover hidden lg:block h-full w-[30vh] icon-about aspect-square bg-center rounded-xl shadow-2xl box-content" />

                    <div class="flex gap-10 h-full lg:w-[60vw] w-full flex-col justify-center mx-auto lg:mx-0 box-border text-clip text-about rounded-lg aspect-square">
                        <div class="flex-col flex gap-4 w-full">
                            <h4 class="font-bold text-lg">{{ data?.pageAProposCollection?.items[0].sectionAPropos?.title1 }}</h4>
                            <p class="text-sm font-normal drop-shadow-xl text-justify flex items-center">
                                {{ data?.pageAProposCollection?.items[0].sectionAPropos?.paragraphe1 }}
                            </p>
                        </div>
                        <div class="flex flex-col lg:flex-row gap-10 w-full">
                            <div class="flex-col flex gap-4">
                                <h4 class="font-bold text-lg">{{ data?.pageAProposCollection?.items[0].sectionAPropos?.title2 }}
                                </h4>
                                <p class="text-sm font-normal drop-shadow-xl text-justify flex items-center">
                                    {{ data?.pageAProposCollection?.items[0].sectionAPropos?.paragraphe2 }}
                                </p>
                            </div>
                            <div class="flex-col flex gap-4">
                                <h4 class="font-bold text-lg">{{ data?.pageAProposCollection?.items[0].sectionAPropos?.title3 }}</h4>
                                <p class="text-sm font-normal drop-shadow-xl text-justify flex items-center">
                                    {{ data?.pageAProposCollection?.items[0].sectionAPropos?.paragraphe3 }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="relative bg-gray-200/50 h-screen flex items-center flex-col justify-center w-full md:mt-48 mt-20 container-team">
                <div class="w-max mx-auto mb-5">
                    <h2 class="md:text-5xl text-3xl font-semibold">{{ data?.pageAProposCollection?.items[0].sectionExpert?.title }}</h2>
                </div>
                <div
                    v-if="isTransition"
                    class="flex bg-white h-[35vh] bg-black/1 shadow-2xl rounded-2xl w-2/3 justify-center mx-auto mt-10">

                    <div class="basis-1/2 box-content flex-col flex justify-center">
                        <div class="relative xl:w-1/2 w-3/4 h-full overflow-clip mx-auto">
                            <div
                                class="absolute inset-0 text-1 h-full w-max flex flex-col gap-1 justify-center">
                                <p class="text-2xl font-bold text-justify">{{ data?.pageAProposCollection?.items[0].sectionExpert?.imagesCollection?.items[0].title }}</p>
                                <p class="text-lg text-justify">{{ data?.pageAProposCollection?.items[0].sectionExpert?.imagesCollection?.items[0].description }}</p>
                            </div>
                            <div class="absolute inset-0 text-2 h-full w-max flex flex-col gap-1 justify-center">
                                <p class="text-2xl font-bold text-justify">{{ data?.pageAProposCollection?.items[0].sectionExpert?.imagesCollection?.items[1].title }}</p>
                                <p class="text-lg text-justify">{{ data?.pageAProposCollection?.items[0].sectionExpert?.imagesCollection?.items[1].description }}</p>
                            </div>
                            <div class="absolute inset-0 text-3 h-full w-max flex flex-col gap-1 justify-center">
                                <p class="text-2xl font-bold text-justify">{{ data?.pageAProposCollection?.items[0].sectionExpert?.imagesCollection?.items[2].title }}</p>
                                <p class="text-lg text-justify">{{ data?.pageAProposCollection?.items[0].sectionExpert?.imagesCollection?.items[2].description }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="relative bg-black/90 basis-1/2 overflow-clip aspect-square bg-center box-border rounded-r-2xl">
                        <img :src="data?.pageAProposCollection?.items[0].sectionExpert?.imagesCollection?.items[0].url" alt="" class="absolute inset-0 img-1 h-max my-auto aspect-square w-1/2 mx-auto rounded-full">
                        <img :src="data?.pageAProposCollection?.items[0].sectionExpert?.imagesCollection?.items[1].url" alt="" class="absolute inset-0 img-2  h-max  my-auto aspect-square w-1/2 mx-auto rounded-full">
                        <img :src="data?.pageAProposCollection?.items[0].sectionExpert?.imagesCollection?.items[2].url" alt="" class="absolute inset-0 img-3  h-max  my-auto aspect-square w-1/2 mx-auto rounded-full">
                    </div>
                </div>
                <div
                    v-else
                    v-for="expert in data?.pageAProposCollection?.items[0].sectionExpert?.imagesCollection?.items"
                    class="flex flex-col gap-5 w-full px-5 py-2.5"
                >
                    <div class="w-full h-[25vh] flex gap-5 shadow-lg">
                        <div class="flex flex-row w-full">
                            <div class="bg-white rounded-l-xl basis-1/2">
                                <div class="flex flex-col gap-2 h-full justify-center mx-10">
                                    <p class="font-black text-lg"> {{ expert.title }}</p>
                                    <p class="text-md">{{ expert.description }}</p>
                                </div>
                            </div>
                            <div class="bg-black/90 basis-1/2 rounded-r-xl flex justify-center">
                                <img :src="expert.url" alt="" class="h-4/5 my-auto aspect-square w-max py- mx-auto rounded-full">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="h-full w-full flex items-center">
                <div class="w-[80vw] h-full my-48 mx-auto flex flex-col justify-center gap-24">
                    <h2 class="md:text-5xl text-3xl md:w-1/2 mx-auto text-center font-semibold drop-shadow-md">{{ data?.pageAProposCollection?.items[0].sectionNosValeurs?.title }}</h2>
                    <div
                        class="grid md:grid-cols-2 grid-cols-1 md:text-start text-center grid-rows-2 gap-10 justify-center md:w-[60vw] w-[80vw] mx-auto items-start">
                        <p class=""> {{ data?.pageAProposCollection?.items[0].sectionNosValeurs?.paragraphe1}}</p>
                        <p class=""> {{ data?.pageAProposCollection?.items[0].sectionNosValeurs?.paragraphe2}}</p>
                        <p class=""> {{ data?.pageAProposCollection?.items[0].sectionNosValeurs?.paragraphe3}}</p>
                        <p class=""> {{ data?.pageAProposCollection?.items[0].sectionNosValeurs?.paragraphe4}}</p>
                    </div>
                </div>
            </section>
        </div>
    </NorthBotanicaLayout>
</template>

<style>
</style>
