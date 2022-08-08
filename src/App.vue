<template>
  <Navbar id="navbar" class="fixed" />
  <HomePage class="content" />
  <Footer></Footer>
</template>

<style scoped>
.content {
  padding-top: 80px;
}

@media screen and (max-width: 600px) {
  .content {
    padding-top: 40px;
  }
}
</style>

<script setup lang="ts">
import HomePage from './components/HomePage.vue';
import Navbar from './components/navbar/Navbar.vue';
import Footer from './components/Footer.vue';
</script>
