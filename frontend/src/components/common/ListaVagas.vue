<template>
    <div class="columns is-flex is-justify-content-space-around is-flex-wrap-wrap">
        <div class="column is-5" v-for="(vacancy, index) in vacancys" :key="index">
            <Vaga v-bind="vacancy" />
        </div>
    </div>
</template>

<script>
import Vaga from "@/components/common/Vaga.vue"
import axios from 'axios'

export default {
    name: "ListaVagas",
    components: {
        Vaga,
    },
    data: () => ({
        vacancys: []
    }),
    created() {
        const path = 'http://localhost:4040/home'
        const getRequest = async () => {
            const response = await axios.get(path)
            this.vacancys = await response.data
        }

        getRequest()
    },
    mounted() {
        this.emitter.on("filterVacancy", (vacancys) => {
            const vacancy = this.vacancys
            this.vacancys = vacancy.filter((v) =>
                v.title.toLowerCase().includes(vacancys.title.toLowerCase())
            );
        });
    },
}
</script>

<style lang="scss" scoped>
</style>