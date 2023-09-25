<script setup>

import NorthBotanicaLayout from "@/Layouts/NorthBotanicaLayout.vue";
import {onMounted, reactive, ref} from "vue";
import {Head, router, usePage} from "@inertiajs/vue3";
import {Icon} from "@iconify/vue";

onMounted(() => {
    getShows();
});

const getShows = async () => {
    const query = `{
        pageContactCollection {
            items {
              banner {
                title
                description
              }
              mail
            }
          }
          reseauSocialCollection {
            items {
              name
              link
              icon {
                url
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
        data.value = response.data
        loading.value = false
        setTimeout(() => {
            opacity.value = 1;
            translateX.value = 0;
        }, 150)
    } catch (error) {
        throw new Error("Could not receive the data from Contentful!");
    }
};

const data = ref([])
const loading = ref(true)

function submit(e) {
    console.log(form)
    e.preventDefault();
    isLoader.value = true
    router.post(route('contact.send'), form)
}

const success = ref(null)
const page = usePage()

const form = reactive({
    name: '',
    lastname: '',
    phoneNumber: '',
    question: '',
    mail: '',
    message: ''
})


const inputElement = ref("")

const formatPhoneNumber = () => {
    let cleanedNumber = inputElement.value.replace(/\D/g, "");
    let formattedNumber = cleanedNumber;

    if (cleanedNumber.length > 2) {
        formattedNumber = cleanedNumber.replace(/(\d{2})/, "$1 ");
    }
    if (cleanedNumber.length > 4) {
        formattedNumber = cleanedNumber.replace(/(\d{2})(\d{2})/, "$1 $2 ");
    }
    if (cleanedNumber.length > 6) {
        formattedNumber = cleanedNumber.replace(/(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 ");
    }
    if (cleanedNumber.length > 8) {
        formattedNumber = cleanedNumber.replace(/(\d{2})(\d{2})(\d{2})(\d{2})/, "$1 $2 $3 $4 ");
    }

    inputElement.value = formattedNumber;
    form.phoneNumber = formattedNumber
    console.log(data.value.pageContactCollection?.items[0])
}
const onKeyPress = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
        event.preventDefault();
    }
}

const isLoader = ref(false)

const opacity = ref(0);
const translateX = ref(100);

onMounted(() => {
    setTimeout(() => {
        opacity.value = 1;
        translateX.value = 0;
    }, 150);
});

</script>

<template>
    <Head>
        <title>{{ data.pageContactCollection?.items[0].banner.title }}</title>
        <meta name="description" :content="data.pageContactCollection?.items[0].banner.description">

        <template v-for="link in data.reseauSocialCollection?.items">
            <meta :property="'og:' + link.name" :content="link.name + ': ' +link.link">
        </template>
    </Head>
    <NorthBotanicaLayout class="h-max gap-10">
        <div class="fixed -z-10 inset-0"></div>
        <div class="flex flex-col gap-24 pb-24 pt-48">
            <section class="h-1/4" title="banner">
                <div :style="{ opacity, transform: `translateX(${translateX}px)` }"
                     class="duration-500 ease-in-out h-full flex flex-col items-center text-center justify-center gap-5 sm:px-20 px-5 overflow-clip border-b border-gray-300 pb-24">
                    <h1
                        class="text-black drop-shadow-xl font-mono subpixel-antialiased font-black text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-l from-darkGreen via-darkGreen to-clearGreen">
                        {{ data.pageContactCollection?.items[0].banner.title }}
                    </h1>
                    <p class="text-gray-500 font-medium drop-shadow-xl text-md lg:text-lg mx-auto w-full lg:w-1/2">
                        {{ data.pageContactCollection?.items[0].banner.description }}
                    </p>
                </div>
            </section>
            <div class="p-5">
                <section :style="{ opacity, transform: `translateX(${translateX}px)` }" class="duration-700 ease-in-out lg:h-2/3 h-max rounded-lg shadow-xl w-full lg:w-4/5 lg:m-auto mx-auto bg-white border border-gray-200"
                         title="form">
                    <div class="flex lg:flex-row flex-col h-full">
                        <section class="basis-2/5 rounded-t-lg lg:rounded-r-none lg:rounded-l-lg bg-darkGreen"
                                 title="bannerform">
                            <div class="w-full h-full p-12 flex flex-col gap-10 text-white">
                                <p class="text-xl font font-semibold">Nos coordonnées</p>
                                <p class="text-md font-normal text-gray-100">Nous vous répondrons par mail le plus
                                    rapidement possible</p>
                                <div class="flex flex-col gap-3">
                                    <div class="flex flex-row gap-3">
                                        <Icon class="text-2xl" icon="ic:outline-mail"></Icon>
                                        <span class="text-md truncate">{{ data.pageContactCollection?.items[0].mail
                                            }}</span>
                                    </div>
                                    <a v-for="link in data.reseauSocialCollection?.items"
                                       :href="link.link" class="flex flex-row gap-3 items-center text-md gap- hover:underline w-max">
                                        <img :src="link.icon.url" alt="image" class="w-6">
                                        {{ link.name }}
                                    </a>
                                </div>
                            </div>
                        </section>
                        <form v-if='!page.props?.ziggy?.alert' class="w-full h-full basis-3/5 md:p-12 p-6"
                              @submit.prevent="submit">
                            <div class="grid gap-6 mb-6 md:grid-cols-4 md:grid-flow-row">
                                <div class="md:col-span-2 col-span-3">
                                    <label class="block mb-2 text-md font-black text-gray-900 dark:text-white"
                                           for="first_name">Nom</label>
                                    <input id="first_name" v-model="form.name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="John"
                                           required type="text">
                                </div>
                                <div class="md:col-span-2 col-span-3">
                                    <label class="block mb-2 text-md font-black text-gray-900 dark:text-white"
                                           for="phone">Téléphone</label>
                                    <input id="phone" v-model="inputElement" :maxlength="14"
                                           class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="^(\d{2} ){4}\d{2}$" placeholder="07 10 12 13 14"
                                           required
                                           type="tel" @input="formatPhoneNumber" @keypress="onKeyPress">
                                </div>
                                <div class="col-span-4">
                                    <label class="block mb-2 text-md font-black text-gray-900 dark:text-white"
                                           for="countries">Souhaitez
                                        vous donner une dimension écologique à votre projet</label>
                                    <select id="countries" v-model="form.question"
                                            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Choisis une réponse</option>
                                        <option value="yes">oui</option>
                                        <option value="no">non</option>
                                        <option value="unknown">Ne sais pas</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mb-6">
                                <label class="block mb-2 text-md font-black text-gray-900 dark:text-white" for="email">Adresse
                                    mail</label>
                                <input id="email" v-model="form.mail" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="north.botanica@gmail.com"
                                       required type="email">
                            </div>

                            <label class="block mb-2 text-md font-black text-gray-900 dark:text-white" for="message">Votre
                                question</label>
                            <textarea id="message" v-model="form.message" class="block max-h-[8rem] p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      placeholder="Votre message..."
                                      rows="4"></textarea>
                            <div class="flex justify-end mt-8">
                                <button v-if="isLoader" class="w-max justify-center text-white bg-darkGreen hover:bg-clearGreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center" disabled
                                        type="button">
                                    <svg aria-hidden="true" class="inline w-4 h-4 mr-3 text-white animate-spin"
                                         fill="none" role="status"
                                         viewBox="0 0 100 101" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="#E5E7EB"/>
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentColor"/>
                                    </svg>
                                    Envoie ...
                                </button>
                                <button v-else class="w-max justify-center text-white bg-darkGreen hover:bg-clearGreen focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                                        type="submit">
                                    Envoyer
                                </button>
                            </div>
                        </form>
                        <section v-else class="w-full basis-3/5 h-full" title="submitform">
                            <div class="w-full h-full p-48 gap-8 text-white flex flex-col items-center">
                                <Icon class="rotate-12 w-full h-full text-green-500" icon="tabler:mail-check"/>
                                <h1 class="text-5xl text-gray-600 font-black">Envoyé</h1>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    </NorthBotanicaLayout>
</template>

<style scoped>

</style>
