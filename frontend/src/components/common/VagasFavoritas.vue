<template>
  <div
    @click="activateAction"
    :class="[isActive ? activateClass : '', normalClass]"
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
            v-for="(vacancy, index) in favoriteVacancy"
            :key="index"
          >
            {{ index + 1 }} - {{ vacancy }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VagasFavoritas",
  data() {
    return {
      normalClass: "dropdown mt-4 is-flex",
      activateClass: "is-active dropdown mt-4 is-flex",
      isActive: false,
      favoriteVacancy: [],
    };
  },
  methods: {
    activateAction() {
      this.isActive = !this.isActive;
    },
  },
  mounted() {
    this.emitter.on("favoriteVacancy", (e) => {
      this.favoriteVacancy.push(e);
      console.log(this.favoriteVacancy);
    });
    this.emitter.on("desfavoriteVacancy", (e) => {
      let indexArray = this.favoriteVacancy.indexOf(e);
      if (indexArray !== 1) this.favoriteVacancy.splice(indexArray, 1);
      console.log(this.favoriteVacancy.indexOf(e));
    });
  },
};
</script>

<style lang="scss" scoped>
.dropdown-content {
  text-align: left;
}
</style>
