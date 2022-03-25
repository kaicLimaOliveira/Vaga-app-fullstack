<template>
  <div class="container">
    <VagasFavoritas />
    <PesquisarVaga />

    <ListaVagas />

    <div class="is-flex is-justify-content-space-around is-flex-wrap-wrap">

      <div class="column is-4 ">
        <Indicador
          title="Vagas abertas"
          :indicate="state.usersOnline"
          bg="has-background-white"
          color="has-text-black"
        />
      </div>

      <div class="column is-4 heightIndicate">
        <Indicador
          title="Profissionais Cadastrados"
          :indicate="state.usersOnline * 2"
          bg="has-background-white"
          color="has-text-black"
        />
      </div>

      <div class="column is-4 heightIndicate">
        <Indicador
          title="Visitantes Online"
          :indicate="state.usersOnline * 3"
          bg="has-background-black"
          color="has-text-white"
        />
      </div>

    </div>
  </div>

</template>

<script setup>
import PesquisarVaga from "@/components/common/PesquisarVaga.vue"
import ListaVagas from "@/components/common/ListaVagas.vue"
import Indicador from "@/components/common/Indicador.vue"
import VagasFavoritas from "@/components/common/VagasFavoritas.vue"
import { reactive } from 'vue'

const state = reactive({
  usersOnline: 0,
})

function getUsersOnline() {
  state.usersOnline = Math.floor(Math.random() * 101)
}

// setInterval(state.getUsersOnline, 2000);

</script>
