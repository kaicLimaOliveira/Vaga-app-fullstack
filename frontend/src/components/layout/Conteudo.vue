<template>
  <keep-alive>
    <component :is="isContent" />
  </keep-alive>
</template>

<script>
import PublicarVaga from "@/components/views/PublicarVaga.vue";
import Home from "@/components/views/Home.vue";

export default {
  name: "Conteudo",
  components: {
    PublicarVaga,
    Home,
  },

  props: {
    content: {
      type: String,
      required: true,
    },
  },
  computed: {
    isContent() {
      switch (this.content) {
        case "Home":
          return (this.conteudo = "Home");
        case "PublicarVaga":
          return (this.conteudo = "PublicarVaga");
      }
      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
