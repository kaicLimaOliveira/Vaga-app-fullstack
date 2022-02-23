<template>
  <div>Conteudo Home</div>
  <PesquisarVaga />

  <ListaVagas />

  <Indicador />

</template>

<script>
import PesquisarVaga from "@/components/common/PesquisarVaga.vue"
import ListaVagas from "@/components/common/ListaVagas.vue"
import Indicador from "@/components/common/Indicador.vue"

export default {
  name: "Home",
  components: {
    PesquisarVaga,
    ListaVagas,
    Indicador
  },


};
</script>

<style lang="scss" scoped>
</style>
