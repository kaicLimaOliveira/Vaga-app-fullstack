<template>
  <div>
    <TopoPadrao  />
    <Conteudo />
  </div>
</template>

<script setup>
import Conteudo from "@/components/layout/Conteudo.vue";
import TopoPadrao from "@/components/layout/TopoPadrao.vue";

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
