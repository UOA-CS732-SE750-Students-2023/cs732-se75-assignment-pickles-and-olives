<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<template>
  <header>
    <HeaderComponent />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: rgb(239 68 68);
}
</style>
