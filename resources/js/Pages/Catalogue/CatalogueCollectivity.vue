<script setup>

import NorthBotanicaLayout from "@/Layouts/NorthBotanicaLayout.vue";
import {Head} from "@inertiajs/vue3";
import JetCardPost from "@/Components/jetStream/JetCardPost.vue";
</script>

<template>
    <Head>
        <title>{{ data?.pageCatalogueCollection?.items[0].banner?.title }}</title>
        <meta name="description">
    </Head>
    <NorthBotanicaLayout>
        <template #banner-label>
            Collectivités
        </template>
        <template #banner-name>
            Vers une Ville Plus Verte et Engagée
        </template>
        <template #banner-description>
            À l'ère de l'urbanisation croissante, il est essentiel de repenser notre rapport avec la nature en ville. Chez North Botanica, nous nous engageons à transformer le paysage urbain en une symbiose de béton et de verdure, tout en restant à l'écoute de vos besoins et en nous adaptant aux conditions spécifiques de chaque projet.
        </template>
        <section class="flex flex-col gap-12 py-20 lg:px-32 px-10">
            <h2 class="text-2xl font-semibold">Micro-Forêts Urbaines : Un Poumon Vert en Plein Cœur Urbain</h2>
            <div class="flex flex-row h-full gap-10">
                <img src="https://fakeimg.pl/300/" class="basis-1/3 shadow-lg rounded-md md:block hidden">
                <div class="flex flex-col gap-4 md:basis-2/3 text-justify text-md">
                    <p class="">
                        La création d'une micro-forêt selon la méthode Miyawaki n'est pas une simple plantation d'arbres : c'est un art basé sur une science solide.
                    </p>
                    <p>
                        Recherche, Étude et Préparation : Chaque espace est unique. Nous effectuons une étude détaillée du sol, de l'ensoleillement, du drainage, et des espèces locales pour définir la meilleure composition d'arbres pour votre terrain.
                    </p>
                    <p>
                        Méthode Miyawaki : Inspiré par le botaniste japonais Akira Miyawaki, ce procédé permet de recréer des forêts autochtones en accéléré, aboutissant à des écosystèmes dix fois plus rapides à pousser et cent fois plus biodiversifiés que les plantations conventionnelles. C'est un retour à la nature originelle du sol.
                    </p>
                    <p>
                        Champignons Mycorhiziens : Ces champignons forment une symbiose avec les racines des arbres, augmentant leur capacité d'absorption en eau et nutriments. Cette relation mutuellement bénéfique accélère la croissance des arbres et renforce leur résilience.
                    </p>
                    <p>
                        Mouches Soldat Noire : Ces insectes bénéfiques jouent un rôle crucial dans la décomposition de matières organiques, enrichissant le sol et facilitant une croissance saine des plantations. Elles contribuent également à la gestion des déchets organiques, réduisant ainsi l'empreinte écologique.
                    </p>
                    <p>
                        Ateliers de Sensibilisation : Nous mettons un point d'honneur à éduquer la communauté sur ces méthodes et l'importance de la biodiversité. Nos ateliers visent à partager notre passion et notre savoir, tout en formant les générations futures à l'importance de la préservation de la nature.
                    </p>
                    <p>
                        Mobilisation Citoyenne et Chantier de Plantation : Au-delà de la science et de la technique, le cœur de notre démarche réside dans la participation citoyenne. Nous croyons fermement que chaque individu a un rôle à jouer dans la transformation de son environnement direct.
                    </p>
                </div>
            </div>
        </section>
        <section class="flex flex-col gap-12 py-20 lg:px-32 px-10">
            <h2 class="text-2xl font-semibold">Potager Urbain : Cultiver la Ville, Nourrir la Communauté</h2>
            <div class="flex flex-row-reverse h-full gap-10">
                <img src="https://fakeimg.pl/300/" class="basis-1/3 shadow-lg rounded-md md:block hidden">
                <div class="flex flex-col gap-4 md:basis-2/3 text-justify text-md">
                    <p class="md:basis-2/3 text-justify">
                        Un potager urbain est bien plus qu'un simple espace de culture. C'est un projet stratégique qui répond à plusieurs enjeux majeurs de notre époque.
                    </p>
                    <p>
                        Éducation et Sensibilisation : À travers la culture, petits et grands apprennent le cycle de vie des plantes, l'importance de la biodiversité et les bases d'une alimentation saine.
                    </p>
                    <p>
                        Lien Social : Le potager devient un lieu d'échanges, où les générations se rencontrent, partagent et tissent des liens autour d'une passion commune.
                    </p>
                    <p>
                        Valorisation des Espaces Inutilisés : Trop d'espaces en ville sont laissés à l'abandon. Les transformer en potagers, c'est leur redonner vie et utilité.
                    </p>
                </div>
            </div>
        </section>
        <section class="flex flex-col gap-12 py-20 lg:px-32 px-10">
            <h2 class="text-2xl font-semibold">Adaptabilité : Votre Vision, Notre Savoir-Faire</h2>
            <div class="flex flex-col text-center gap-10">
                <img src="https://fakeimg.pl/300/" class="shadow-lg rounded-md bg-cover h-[35vh] md:block hidden">
                <div class="flex flex-col gap-4 md:basis-2/3 h-max text-justify text-md">
                    <p class="md:basis-2/3 text-justify">
                        Nous comprenons que chaque ville, chaque quartier, a ses propres besoins, défis et visions. C'est pourquoi notre approche est toujours sur-mesure, basée sur l'écoute et l'adaptabilité. Qu'il s'agisse de terrains atypiques, de budgets serrés ou de besoins communautaires spécifiques, nous sommes là pour trouver la meilleure solution tout en respectant vos contraintes et vos aspirations.                    </p>
                </div>
            </div>
        </section>
        <section class="flex flex-col gap-12 py-20 lg:px-32 px-10">
            <h2 class="text-2xl font-semibold">Adaptabilité : Votre Vision, Notre Savoir-Faire</h2>
            <div class="flex flex-col-reverse text-center gap-10">
                <img src="https://fakeimg.pl/300/" class="shadow-lg rounded-md bg-cover h-[35vh] md:block hidden">
                <div class="flex flex-col gap-4 md:basis-2/3 h-max text-justify text-md">
                    <p class="md:basis-2/3 text-justify">
                        Nous comprenons que chaque ville, chaque quartier, a ses propres besoins, défis et visions. C'est pourquoi notre approche est toujours sur-mesure, basée sur l'écoute et l'adaptabilité. Qu'il s'agisse de terrains atypiques, de budgets serrés ou de besoins communautaires spécifiques, nous sommes là pour trouver la meilleure solution tout en respectant vos contraintes et vos aspirations.                    </p>
                </div>
            </div>
        </section>
    </NorthBotanicaLayout>
</template>

<style scoped>

</style>
