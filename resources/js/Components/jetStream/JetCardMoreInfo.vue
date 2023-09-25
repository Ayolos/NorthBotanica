<script setup>
import {onMounted, ref, watch} from 'vue'

const props = defineProps({
    datat: Object
})

const cards = ref(props.datat)
const currentTab = ref(0)

onMounted(() => {
    // Watch for changes to the datat prop
    watch(() => props.datat, (newVal) => {
        if (newVal && newVal.length > 0) {
            cards.value = [...newVal]; // Copy the array to cards
            cards.value.forEach((v, i) => {
                v.isActive = i === 0;
                v.id = i;
                v.progress = i === 0;
            });
        }
    }, { immediate: true }); // Immediate: true to handle initial value
});
const handleTabs = (id) => {
    let lastActive = cards.value.find((objet) => objet.isActive === true);
    cards.value[lastActive.id].isActive = false
    currentTab.value = id
    cards.value[id].isActive = true;
}

const colorClass = (id) => {
    if(id <= currentTab.value){
        return "bg-darkGreen"
    }
}
const afterCLass = (index) => {
    if(index <= currentTab.value) {
        if (index === 0) {
            return "basis-0"
        }
        return "basis-2/2 after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-300 after:border-4 after:inline-block"
    }
}
</script>

<template>
    <div class="relative flex flex-col rounded-xl bg-black/5 w-5/6 shadow-md gap-3">
        <div class="flex flex-row items-center justify-center">
            <button v-for="(card) in cards" @click="handleTabs(card.id)" :class="[card?.isActive ? 'text-darkGreen border-b-2 border-darkGreen' : '']" type="button" class="rounded-sm hover:bg-black/5 pt-6 pb-5 px-2 md:px-4 text-xs md:text-lg font-semibold w-max">{{ card.title }}</button>
        </div>
        <div class="py-24 px-18">
            <div v-for="(card) in cards" class="flex flex-row gap-6 justify-center items-center">
                <div v-if="card.isActive" class="basis-1/4 shadow-lg m-16 hidden lg:block bg-darkGreen rounded-lg">
                    <img class="p-10 w-fit h-fit -rotate-12" :src="card?.icon.url" alt="">
                </div>
                <div class="flex flex-col basis-3/4 gap-2 md:text-start text-start">
                    <h3 v-if="card?.isActive" class="text-3xl font-black text-darkGreen">{{ card?.title }}</h3>
                    <p v-if="card?.isActive" class="text-start w-full md:w-3/4">{{ card?.description }}</p>
                    <div v-if="card?.id === 2">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
