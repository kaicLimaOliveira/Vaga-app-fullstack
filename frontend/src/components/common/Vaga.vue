<template>
    <div class="card">
        <header class="card-header has-background-black-ter p-3">
            <p class="card-header-title has-text-white">
                {{ title }}
            </p>
            <div class="field is-flex is-align-items-center">
                <label class="label checkbox has-text-white">
                    <input type="checkbox" name="favoriteVacancy" class="favoriteVacancy" v-model="favorite">
                    Favoritar
                </label>
            </div>
        </header>
        <div class="card-content p-5">
            <div class="content">
                {{ description }}
            </div>
        </div>
        <footer class="card-footer p-3">
            Salário: {{ salary }} |
            Modalidade: {{ getModality }} |
            Tipo: {{ getType }}
        </footer>
    </div>
</template>

<script>

export default {
  name: "Vagas",
  data: () => ({
    favorite: false
  }),
  watch: {
    favorite(newValue) {
      if(newValue) {
        this.emitter.emit('favoriteVacancy', this.title)
      } else {
        this.emitter.emit('desfavoriteVacancy', this.title)
      }
    }
  },
  props: {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    salary: {
        type: [String, Number],
        required: true
    },
    modality: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
  },
  computed: {
    getModality() {
        switch (this.modality) {
            case '1': return 'Home office'
            case '2': return 'Presencial'
        }
    },
    getType(){
        switch (this.type) {
            case '1': return 'CLT'
            case '2': return 'PJ'
        }
    }
  },  
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