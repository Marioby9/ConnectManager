<template>
    <div class="modal-bg">
        <div class="modal" ref="spaceModal">
            <h1 class="text-3xl font-bold">{{book.titulo}}</h1>
            <div class="flex w-full">
                <div class="w-1/2 flex gap-3">
                    <p class="font-bold">Autor: </p>
                    <p>{{book.autor}}</p>
                </div>
                <div class="w-1/2 flex gap-3">
                    <p class="font-bold">Género: </p>
                    <p>{{book.genero}}</p>
                </div>
            </div>
            <div class="flex w-full justify-center">
                <div class="w-1/2 flex gap-3">
                    <p class="font-bold">ID Libro: </p>
                    <p>{{book.id}}</p>
                </div>
                <div class="w-1/2 flex gap-3">
                    <p class="font-bold">Lanzamiento: </p>
                    <p>{{ book.lanzamiento }}</p>
                </div>
            </div>
            <p><span class="font-bold">Descripción:</span> {{ book.descripcion }}</p>
            <p class="text-xl"><span class="font-bold">Precio:</span> {{ book.precio }}<span class="font-bold">€</span></p>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { onClickOutside } from "@vueuse/core";
    
    //

    const name = ref('')
    const isError = ref(false)
    const emit = defineEmits(['close'])
    const {book} = defineProps(['book'])
    const spaceModal = ref(null)

    //

    const clickAddSpace = () => {
        if(name.value != ''){
            emit('add', name.value)
        }
        else{
            isError.value = true
        }
    }


    onClickOutside(spaceModal, () => (emit('close')));
</script>

<style scoped>

</style>