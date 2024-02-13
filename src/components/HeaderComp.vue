<template>
    <header class="w-full bg-darkBlack px-10 py-10 flex flex-col gap-5 shadow-md shadow-lightOrange">
        <p class="text-center">fetching from: 
            <a :href=API_URL target="_blank" class="font-semibold text-bone hover:underline">{{ API_URL }}</a> 
        </p>
        <div class="flex justify-center items-center">
            <img class="h-16" src="@/assets/img/logo.webp" alt="logoPagina">
        </div>
    </header>
</template>

<script setup>
    import {API_URL} from '@/config/APIConfig.js'
</script>

<style scoped>

</style>