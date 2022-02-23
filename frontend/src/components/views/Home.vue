<template>
  <div class="container">
    <PesquisarVaga />

    <ListaVagas />

    <div class="is-flex is-justify-content-space-around">

      <div class="column is-3">
        <Indicador 
          title="Vagas abertas" 
          :indicate="usersOnline" 
          bg="has-background-white" 
          color="has-text-black" 
        />
      </div>
      
      <div class="column is-3">
        <Indicador 
          title="Usuario online" 
          :indicate="usersOnline * 2" 
          bg="has-background-white" 
          color="has-text-black" 
        />
      </div>

      <div class="column is-3">  
        <Indicador 
          title="Vagas abertas" 
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

export default {
  name: "Home",
  components: {
    PesquisarVaga,
    ListaVagas,
    Indicador
  },
  data: () => ({
    usersOnline: 0
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
.spancing-columns {
  display: flex;
  justify-content: space-around;
}
</style>
