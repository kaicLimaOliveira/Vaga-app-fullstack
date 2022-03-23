<template>
  <nav
    id="my-nav"
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
        data-target="navMenu"
        @click="toggle"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navMenu" class="navbar-menu">
      <div class="navbar-start">
        <RouterLink :to="{ name: 'Home' }" class="navbar-item">
          Home
        </RouterLink>

        <RouterLink :to="{ name: 'Cadastro' }" class="navbar-item">
          Publicar Vaga
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import Home from "@/components/views/Home.vue";
import PublicarVaga from "@/components/views/PublicarVaga.vue";
import { toggleButton } from "../../plugins/toggle.js";

function toggle() {
  toggleButton();
}
</script>

<style lang="scss" scoped>
nav {
  background-color: #000;
  .navbar-menu.is-active {
    background-color: #000;
  }
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
