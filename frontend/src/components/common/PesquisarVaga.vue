<template>
    <div class="columns is-flex is-justify-content-center mt-5">
        <div class="column is-11">
            <div class="card card-color has-text-left">
                <span>Pesquisar Vagas</span>
                <p>Título da vaga</p>
                <input 
                    type="text" 
                    name="searchVacancy" 
                    class="input mt-3" 
                    placeholder="Pesquise por palavras chaves"
                    v-model="state.title"
                >
                <p class="help">
                    Informe palavras que estejam relacionadas com a vaga que você procura
                </p>

                <button @click="filterVacancy" class="button mt-4">
                    <p>Buscar</p>
                    <img src="@/assets/images/magnifying-glass-solid.svg">
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { axiosCreate } from '../../services/axios'
import mitt from 'mitt'
import { reactive } from 'vue'

const emitter = mitt()
const state = reactive({
    title: "",
    vacancys: []
})
 
function filterVacancy() {
    emitter.emit("filterVacancy", { title: state.title });
}
    
const getRequest = async () => {
    const response = await axiosCreate.get('home')
    state.vacancys = await response.data
}

getRequest()
    
</script>

<style lang="scss" scoped>
.card-color {
    background-color: #ededed;
    border: 1.5px solid #d1d1d1;
    padding: 45px 60px;

    span {
        font-size: 30px;
        font-weight: 600;
    }

    .help {
        color: #a3a3a3;
    }

    button {
        display:flex;
        border: 1px solid #121212;
        
        &:hover {
            background-color: #121212;
            color: #FFF;
        }

        p {
            font-size: 16px;
            padding-right: 10px;
        }

        img {
            padding-left: 5px;
            width: 25px;
        }
    }
}
</style>