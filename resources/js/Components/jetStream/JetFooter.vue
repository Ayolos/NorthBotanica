<script setup>

</script>

<template>
    <footer class="bg-green-700 text-white border-top border-green-800">
        <div class="w-full py-8">
            <div class="sm:flex sm:items-center sm:justify-between md:px-16 px-12 mx-auto">
                <a :href="route('home')" class="flex mx-auto sm:mx-0 items-center w-max gap-2">
                    <i class="fa-solid fa-seedling fa-2xl" style="color: #1ae316;"></i>
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">North Botanica</span>
                </a>
                <ul class="flex flex-wrap items-center justify-center mb-6 text-sm text-white font-normal sm:mb-0 dark:text-gray-400">
                <li>
                        <a :href="route('aboutv2')" class="mr-4 hover:underline md:mr-6 ">A propos</a>
                    </li>
                    <li>
                        <a :href="route('contact')" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-green-800 sm:mx-auto lg:my-8" />
            <span class="block text-sm text-white text-center dark:text-gray-400">© 2023 <a href="" class="hover:underline">North Botanica™</a>. All Rights Reserved.</span>
        </div>
    </footer>
</template>

<style scoped>

</style>
