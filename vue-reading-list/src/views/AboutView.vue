<!-- a very basic about page with no scripted functionality, this is here to demonstrate how the router works -->

<template>
  <div class="about">
    <h1>About</h1>
    <p>This application was created using Vue.js by Melissa McFadzien</p>
    <p class="link">
      <a href="https://vuejs.org/guide/introduction.html#what-is-vue">
        To learn more about the Vue framework click here</a
      >
    </p>
  </div>
</template>

<style scoped>
.about {
  text-align: center;
  padding-top: 40px;
}
h1 {
  font-size: large;
  padding: 10px;
}

a {
  text-decoration: underline;
  margin-top: 20px;
}

.link {
  margin-top: 20px;
}
</style>
