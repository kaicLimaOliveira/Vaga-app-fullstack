<template>
    <div :class="style">
        <div class="card-content">
            <div class="content">
                {{ title }}
            </div>
            <p class="text">
                {{ indicate }}
            </p>
        </div>
    </div>
</template>

<script>

export default {
  name: "Indicador",
  props: ["title", "indicate", "bg", "color"],
  computed: {
    style() {
        return `card ${this.bg} ${this.color}`
    },
  }
}

</script>

<style lang="scss" scoped>

</style>