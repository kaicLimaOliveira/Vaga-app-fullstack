<template>
    <div class="columns is-flex is-justify-content-space-around is-flex-wrap-wrap">
        <div class="column is-6" v-for="(vacancy, index) in state.vacancys" :key="index" data-test="vacancy">
            <Vaga v-bind="vacancy" />
        </div>
    </div>
</template>

<script setup>
import Vaga from "@/components/common/Vaga.vue"
import { axiosCreate } from '../../services/axios.js'
import { reactive, onMounted } from 'vue'
import mitt from 'mitt'

const emitter = mitt()
const state = reactive({
    vacancys: [],
    vacancyA: []
})

const getRequest = async () => {
    const response = await axiosCreate.get('home')
    state.vacancys = await response.data
}

getRequest()

onMounted(() => {
    emitter.on("filterVacancy", (vacancys) => {
        
        const vacancy = state.vacancys
        
        state.vacancyA = state.vacancys
        // console.log(vacancy, 'vacancy');

        if(vacancys.title == ''){
            // console.log('vazio');
            // console.log(state.vacancys);
            return vacancy
        } else {
            state.vacancys = vacancy.filter((v) =>
                v.title.toLowerCase().includes(vacancys.title.toLowerCase())
            );
        }

    });
}) 

</script>
