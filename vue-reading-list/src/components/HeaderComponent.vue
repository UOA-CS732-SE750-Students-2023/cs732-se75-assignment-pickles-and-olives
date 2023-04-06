<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="header-div">
    <h1>Reading List</h1>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
h1 {
  color: white;
  font-weight: 300;
  font-size: 2.6rem;
}

.header-div {
  text-align: center;
  padding: 20px;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: white;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 2px solid rgb(255, 255, 255);
}

nav a:first-of-type {
  border: 0;
}
</style>
