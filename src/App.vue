<template>
  <Navbar id="navbar" />
  <main class="content">
    <HomePage />
  </main>
  <Footer></Footer>
</template>

<style scoped>
.content {
  padding-top: 80px;
}
</style>

<script setup lang="ts">
import HomePage from './components/HomePage.vue';
import Navbar from './components/navbar/Navbar.vue';
import Footer from './components/Footer.vue';
</script>
