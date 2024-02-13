<template>
    <div class="min-h-16 bg-darkBlue flex gap-10  pl-5 rounded-md border-l-8 border-orange items-center">
        <p class="w-1/3">{{ book.titulo}}</p>
        <p class="w-1/3">{{ book.autor}}</p>
        <p class="w-1/4">{{ book.genero}}</p>
        <button 
        @click="emit('showBook')"
        class="w-1/4 h-full flex items-center justify-center bg-bone text-darkBlack font-semibold rounded-r-md gap-4 hover:bg-lightWhite">
            Ver ficha 
            <font-awesome-icon icon="book-open"/>
        </button>
        

    </div>
</template>

<script setup>
    const emit = defineEmits(['showBook'])
    const {book} = defineProps(['book'])
</script>

<style scoped>

</style>