<template>
  <TopoPadrao @navigation="component = $event" />
  <Conteudo v-if="visibility" :content="component" />
</template>

<script>
import Conteudo from "@/components/layout/Conteudo.vue";
import TopoPadrao from "@/components/layout/TopoPadrao.vue";

export default {
  name: "App",
  components: {
    TopoPadrao,
    Conteudo,
  },
  data: () => ({
    visibility: true,
    component: "Home",
  }),
};
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
