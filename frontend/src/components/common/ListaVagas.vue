<template>
    <div class="columns">
        <div class="column" v-for="(vacancy, index) in vacancys" :key="index">
            <Vaga  />
        </div>
    </div>
</template>

<script>
import Vaga from "@/components/common/Vaga.vue"

export default {
    name: "ListaVagas",
    components: {
        Vaga,
    },
    data: () => ({
        vacancys: []
    })
}
</script>