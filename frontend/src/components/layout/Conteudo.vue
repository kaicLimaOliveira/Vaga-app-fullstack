<template>
  <RouterView class="responsive" />
</template>

<style scoped>
.responsive {
  padding: 20px;
}

@media (min-width: 315px ) and (max-width: 450px) {
  .responsive {
    font-size: 85%;
    min-width: 315px;
    margin: 10px;
  }
}
</style>
