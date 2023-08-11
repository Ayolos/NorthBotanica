<script setup>
import {computed, nextTick, onMounted, ref, watch} from 'vue'

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

const roundedClass = (index) => {
    if(index === 0){
        return 'rounded-tl-xl'
    }else if(index === cards.value.length - 1){
        return 'rounded-tr-xl'
    }
}

const colorClass = (id) => {
    if(id <= currentTab.value){
        return "bg-green-500"
    }
}
const afterCLass = (index) => {
    if(index <= currentTab.value) {
        if (index === 0) {
            return "basis-0"
        }
        return "basis-2/2 after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-300 after:border-4 after:inline-block dark:after:border-green-800"
    }
}
</script>

<template>
    <div class="relative flex flex-col rounded-xl bg-black/5 w-5/6 shadow-md gap-3">
        <div class="flex flex-row items-center justify-center">
            <button v-for="(card, index) in cards" @click="handleTabs(card.id)" :class="[roundedClass(index) ,card?.isActive ? 'text-green-700 border-b-4 border-green-700' : '']" type="button" class="rounded-sm hover:bg-black/5 py-6 px-2 md:px-4 text-xs md:text-lg font-semibold w-full">{{ card.title }}</button>
        </div>
        <div class="py-12 px-6">
            <div v-for="(card, index) in cards" class="flex flex-row gap-6 justify-center items-center">
                <div v-if="card.isActive" class="basis-1/4 hidden lg:block">
                    <img class="w-48 lg:w-32 drop-shadow-2xl bg-green-700 mx-auto rounded-lg p-4 shadow-lg" :src="card?.icon.url" alt="">
                </div>
                <div class="flex flex-col basis-3/4 gap-2">
                    <div v-if="card?.isActive" class="text-3xl font-black text-green-700">{{ card?.title }}</div>
                    <div v-if="card?.isActive" class="text-start">{{ card?.description }}</div>
                    <div v-if="card?.id === 2">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
