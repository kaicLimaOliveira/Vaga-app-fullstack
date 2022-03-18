<template>
  <div
    @click="activateAction"
    :class="[state.isActive ? state.activateClass : '', state.normalClass]"
  >
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Vagas Favoritas</span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu3" role="menu">
      <div class="dropdown-content p-5">
        <ul class="list has-text-left">
          <li
            class="list-item"
            v-for="(vacancy, index) in state.favoriteVacancy"
            :key="index"
          >
            {{ index + 1 }} - {{ vacancy }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import mitt from 'mitt'
import { reactive, onMounted } from 'vue'

const emitter = mitt()
const state = reactive({
  normalClass: "dropdown mt-4 is-flex",
  activateClass: "is-active dropdown mt-4 is-flex",
  isActive: false,
  favoriteVacancy: [],
})

function activateAction() {
  state.isActive = !state.isActive;
}

onMounted(() => {
  emitter.on("favoriteVacancy", (e) => {
    state.favoriteVacancy.push(e);
  });
  emitter.on("desfavoriteVacancy", (e) => {
    let indexArray = state.favoriteVacancy.indexOf(e);
    if (indexArray !== -1) state.favoriteVacancy.splice(indexArray, 1);
  });
})

</script>

<style lang="scss" scoped>
.dropdown-content {
  text-align: left;
}
</style>
