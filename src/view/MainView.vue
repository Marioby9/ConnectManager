<template>
    <div class="mt-5 w-full flex flex-col items-center px-10 py-3 gap-5 ">
        <FilterComp :filters="FILTERS" @search="search" class="w-2/3"/>
        <div class="w-full flex gap-5">
            <JsonViewer  :value="JSONData" copyable sort theme="jv-light" class="w-2/5 border-2 h-96 max-h-96 overflow-y-scroll border-white bg-black"/>
            <div class="w-3/5 flex flex-col px-3 gap-5 h-96 max-h-96 overflow-y-scroll">
                <BookCard v-for="(elm, indx) in books" :key="indx" :book="elm" @showBook="showBook(elm)" />
            </div>
        </div>

        <ModalBook 
            v-if="isModalOpen"
            :book = currentBook
            @close="isModalOpen = false" 
        />
    </div>
</template>

<script setup>
    import { ref, reactive, onMounted } from 'vue' 
    import { getAPIData, getFilteredData } from '@/model/AxiosModel'
    import { FILTERS } from '@/config/APIConfig'
    import FilterComp from '@/components/FilterComp.vue'
    import BookCard from '@/components/BookCard.vue'
    import ModalBook from '@/components/ModalBook.vue'

    //

    const isModalOpen = ref(false)
    const books = ref([])
    const JSONData = reactive({})
    const currentBook = ref({})

    //

    const search = async (filter) => {
        JSONData.value = filter.field == 'todos' ? await getAPIData() : await getFilteredData(filter)
        books.value = JSONData.value.libros
    }

    const showBook = (book) => {
        currentBook.value = book
        isModalOpen.value = true
    }

    onMounted( async () => {
        JSONData.value = await getAPIData()
        books.value = JSONData.value.libros
    })


</script>

<style scoped>
    ::-webkit-scrollbar { @apply w-[10px] ml-2 }

    /* Estilo del pulgar (thumb) de la barra de desplazamiento */
    ::-webkit-scrollbar-thumb { @apply bg-lightBlue rounded-sm }

    /* Estilo de la pista (track) de la barra de desplazamiento */
    ::-webkit-scrollbar-track { @apply bg-white rounded-sm }
</style>