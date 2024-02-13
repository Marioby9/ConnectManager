<template>
    <form @submit.prevent>
        <div class="flex items-center rounded-md bg-darkBlue h-12">
            <button @click="isDropdown = !isDropdown" class="w-60 rounded-s-md border-r-2 border-solid border-white px-6 h-full hover:bg-semiDarkBlue ">{{currentFilter}} <font-awesome-icon class="ml-2" icon="caret-down"/></button>
            <input type="search" class="w-full h-full px-4 bg-grayBlue" placeholder="Introduce el valor a buscar" v-model="filterValue">
            <button class="px-6 h-full bg-darkBlue w-fit rounded-e-md hover:bg-lightBlue2" @click="search" ><font-awesome-icon icon="magnifying-glass" /></button>
        </div>
        <div id="dropdown" ref="dropdown" v-if="isDropdown" class="z-10 mt-2 bg-white rounded-md shadow w-48 font-semibold absolute">
            <ul class="text-sm text-darkBlack">
                <li>
                    <button v-for="(elm, indx) in filters" :key="indx" @click="changeFilter(elm)" type="button" class="inline-flex w-full px-4 py-2 hover:bg-lightOrange rounded-md hover:text-darkBlack">{{ elm }}</button>
                </li>
            </ul>
        </div>
    </form>
</template>

<script setup>
    import { ref } from 'vue'
    import {onClickOutside} from '@vueuse/core'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    //

    const props = defineProps(['filters'])
    const emit = defineEmits(['search'])
    const isDropdown = ref(false)
    const filters = props.filters
    const currentFilter = ref('Todos')
    const filterValue = ref('')
    const dropdown = ref(null)

    //

    const changeFilter = (elm) => {
        currentFilter.value = elm
        isDropdown.value = false
    }

    const search = () => {
        if(currentFilter.value == 'Todos'){
            filterValue.value = ''
        }
        emit('search', {field: currentFilter.value.toLocaleLowerCase(), value: filterValue.value})
    }

    onClickOutside(dropdown, () => isDropdown.value = false)

</script>

<style scoped>

</style>