<template>
  <div class="container">
    <VagasFavoritas />
    <PesquisarVaga />

    <ListaVagas />

    <div class="is-flex is-justify-content-space-around">

      <div class="column is-4 heightIndicate">
        <Indicador 
          title="Vagas abertas" 
          :indicate="usersOnline" 
          bg="has-background-white" 
          color="has-text-black" 
        />
      </div>
      
      <div class="column is-4 heightIndicate">
        <Indicador 
          title="Profissionais Cadastrados" 
          :indicate="usersOnline * 2" 
          bg="has-background-white" 
          color="has-text-black" 
        />
      </div>

      <div class="column is-4 heightIndicate">  
        <Indicador 
          title="Visitantes Online" 
          :indicate="usersOnline * 3" 
          bg="has-background-black" 
          color="has-text-white" 
        />
      </div>'
  
    </div>
  </div>

</template>

<script>
import PesquisarVaga from "@/components/common/PesquisarVaga.vue"
import ListaVagas from "@/components/common/ListaVagas.vue"
import Indicador from "@/components/common/Indicador.vue"
import VagasFavoritas from "@/components/common/VagasFavoritas.vue"

export default {
  name: "Home",
  components: {
    Indicador,
    ListaVagas,
    PesquisarVaga,
    VagasFavoritas
  },
  data: () => ({
    usersOnline: 0,

  }),
  methods: {
    getUsersOnline() {
      this.usersOnline = Math.floor(Math.random() * 101)
    }
  },

  created() {
    setInterval(this.getUsersOnline, 2000);
  },


};
</script>

<style lang="scss" scoped>

.heightIndicate{
  height: 100px;
}

</style>
