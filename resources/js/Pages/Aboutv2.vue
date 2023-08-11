<script setup>

import NorthBotanicaLayout from "@/Layouts/NorthBotanicaLayout.vue";
import {useContentfulFetch} from "@/Composable/fetchContentfullApi.js";
import {onMounted, ref} from "vue";
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


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
            y:'-=100%',
            opacity: 1,
            duration: 0.5,
        });
        tl2.to('.text-1', {
            ease: 'none',
            y:'-=100%',
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
            y:'-=100%',
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
                scrub: 0,
                start: "center center",
                end: "+=1000",
                pin: true,
            }
        });

        gsap.set('.icon-about', {x: "-=500", y: "+=200", opacity: 0})
        tl.to('.icon-about', {
            ease: 'none',
            x: 0,
            y: 0,
            opacity: 1,
        }, '<');

        gsap.set('.text-about', {x: "5%", y: "-=100", opacity: 0})
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
        tl.set('.text-animate-about', {x:0, y:0, opacity:0})
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

        tl.to('.text-animate-about', {
            y:-50,
            x: 50,
            opacity: 1,
            duration: 0.9,
        })
    }

};

const opacity = ref(0);
const translateX = ref(100);

</script>

<template>
    <NorthBotanicaLayout>
        <div class="wrapper-scroll w-full">
            <section class="h-[100vh] w-full">
                <div class="w-max mx-auto h-full flex flex-col pt-[30vh] init-animate"
                >
                    <label class="md:text-xl text-md font-bold text-animate-label">{{ data?.pageAProposCollection?.items[0].banner.label }}</label>
                    <h1 class="md:text-5xl text-3xl font-bold text-animate">{{ data?.pageAProposCollection?.items[0].banner.title }}</h1>
                </div>
            </section>
            <section class="w-full h-full box-border">
                <div class="flex h-[70vh] w-full justify-center mx-auto"
                >
                    <div
                        :style="{ backgroundImage: 'url(' + data?.pageAProposCollection?.items[0].backgroundImg?.url + ')' }"
                        class="w-full bg-center icon bg-fixed" />
                </div>
            </section>
            <section class="h-full w-full mt-20 container-about flex flex-col">
                <div class="w-full">
                    <h1 class="md:text-5xl text-3xl font-bold text-animate-about">{{ data?.pageAProposCollection?.items[0].sectionAPropos?.title }}</h1>
                </div>
                <div class="flex flex-row gap-10 mx-10">
                    <div
                        :style="{ backgroundImage: 'url(' + data?.pageAProposCollection?.items[0].sectionAPropos?.image.url + ')' }"
                        class="bg-cover p-10 basis-1/2 h-full icon-about w-full md:w-1/2 aspect-square bg-center rounded-xl shadow-2xl" />

                    <div class="flex gap-4 h-full basis-1/2 flex-col box-border text-clip text-about rounded-lg aspect-square">
                        <p class="text-lg font-normal drop-shadow-xl text-start flex items-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </section>
            <section class="relative bg-gray-200/50 h-screen flex items-center flex-col justify-center w-full md:mt-48 mt-20 container-team">
                <div class="w-max mx-auto">
                    <h1 class="md:text-4xl text-3xl font-semibold">{{ data?.pageAProposCollection?.items[0].sectionExpert?.title }}</h1>
                </div>
                <div class="flex bg-white h-[35vh] bg-black/1 shadow-2xl rounded-2xl w-2/3 justify-center mx-auto mt-10">

                    <div class="basis-1/2 box-content flex-col flex justify-center">
                        <div class="relative xl:w-1/2 w-3/4 h-full overflow-clip mx-auto">
                            <div
                                class="absolute inset-0 text-1 h-full w-max flex flex-col gap-1 justify-center">
                                <h1 class="text-2xl font-bold text-justify">{{ data?.pageAProposCollection?.items[0].sectionExpert?.imagesCollection?.items[0].title }}</h1>
                                <h3 class="text-lg text-justify">{{ data?.pageAProposCollection?.items[0].sectionExpert?.imagesCollection?.items[0].description }}</h3>
                            </div>
                            <div class="absolute inset-0 text-2 h-full w-max flex flex-col gap-1 justify-center">
                                <h1 class="text-2xl font-bold text-justify">{{ data?.pageAProposCollection?.items[0].sectionExpert?.imagesCollection?.items[1].title }}</h1>
                                <h3 class="text-lg text-justify">{{ data?.pageAProposCollection?.items[0].sectionExpert?.imagesCollection?.items[1].description }}</h3>
                            </div>
                            <div class="absolute inset-0 text-3 h-full w-max flex flex-col gap-1 justify-center">
                                <h1 class="text-2xl font-bold text-justify">{{ data?.pageAProposCollection?.items[0].sectionExpert?.imagesCollection?.items[2].title }}</h1>
                                <h3 class="text-lg text-justify">{{ data?.pageAProposCollection?.items[0].sectionExpert?.imagesCollection?.items[2].description }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="relative bg-black/90 basis-1/2 overflow-clip aspect-square bg-center rounded-r-2xl">
                        <img :src="data?.pageAProposCollection?.items[0].sectionExpert?.imagesCollection?.items[0].url" alt="" class="absolute inset-0 img-1 h-max w-max my-auto aspect-square p-12 rounded-full">
                        <img :src="data?.pageAProposCollection?.items[0].sectionExpert?.imagesCollection?.items[1].url" alt="" class="absolute inset-0 img-2  h-max w-max my-auto aspect-square p-12 rounded-full">
                        <img :src="data?.pageAProposCollection?.items[0].sectionExpert?.imagesCollection?.items[2].url" alt="" class="absolute inset-0 img-3  h-max w-max my-auto aspect-square p-12 rounded-full">
                    </div>
                </div>
            </section>
            <section class="h-full w-full flex items-center">
                <div class="w-[80vw] h-full my-48 mx-auto flex flex-col justify-center gap-24">
                    <h1 class="text-5xl w-1/2 mx-auto text-center font-semibold drop-shadow-md">{{ data?.pageAProposCollection?.items[0].sectionNosValeurs?.title }}</h1>
                    <div
                        class="grid grid-cols-2 grid-rows-2 gap-10 justify-center w-[60vw] mx-auto items-start">
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
.no-scrollbar {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
.no-scrollbar::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
}
</style>
