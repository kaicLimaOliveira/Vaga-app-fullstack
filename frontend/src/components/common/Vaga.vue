<template>
  <div class="card">
    <header class="card-header has-background-black-ter p-3">
      <p class="card-header-title has-text-white has-text-left">
        {{ props.title }}
      </p>
      <div class="field is-flex is-align-items-center">
        <label class="checkbox has-text-white pr-2">
          <input
            type="checkbox"
            name="favoriteVacancy"
            class="favoriteVacancy"
            v-model="state.favorite"
          />
        </label>
        Favoritar
      </div>
    </header>
    <div class="card-content p-5 has-text-left">
      <div class="content">
        {{ props.description }}
      </div>
    </div>
    <footer class="card-footer p-3">
      Salário: {{ props.salary }} | Modalidade: {{ getModality(modality) }} | Tipo:
      {{ getType(type) }}
    </footer>
  </div>
</template>

<script setup>
import { reactive, watchEffect, defineProps } from 'vue'
import mitt from 'mitt'

const emitter = mitt()
const state = reactive({
  favorite: false,
})

watchEffect((newValue) => {
  if (newValue) {
    emitter.emit("favoriteVacancy", props.title);
  } else {
    emitter.emit("desfavoriteVacancy", props.title);
  }
})

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  salary: {
    type: [String, Number],
    required: true,
  },
  modality: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})

function getModality(modality) {
  switch (props.modality) {
    case "1":
      return "Home office";
    case "2":
      return "Presencial";
  }

  return props.modality
}

function getType(type) {
  switch (props.type) {
    case "1":
      return "CLT";
    case "2":
      return "PJ";
  }

  return props.type
}

</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #d1d1d1;

  .card-footer {
    background-color: #ededed;
  }
}
</style>
