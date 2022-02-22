<template>
  <nav
    class="navbar container is-fluid"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand font">
      <div class="navbar-item">Vagas</div>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="ToggleNav"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="ToggleNav" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" @click="isContent('Home')">Home</a>

        <a class="navbar-item" @click="isContent('PublicarVaga')">
          Publicar Vaga
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import Home from "@/components/views/Home.vue";
import PublicarVaga from "@/components/views/PublicarVaga.vue";

export default {
  name: "TopoPadrao",
  components: {
    Home,
    PublicarVaga,
  },
  methods: {
    isContent(e) {
      this.$emit("navigation", e);
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  background-color: #000;

  .font {
    font-size: 20px;

    div {
      color: #ededed;
    }
  }

  a {
    color: #6b6b6b;
    font-weight: bolder;

    &:hover {
      color: #a3a3a3;
      background-color: #ededed;
    }
  }
}
</style>
