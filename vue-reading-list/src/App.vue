<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<!-- here we are setting up the core app structure, with the imported header component as a constant, and the RouterView component to dynamically display the body -->
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
