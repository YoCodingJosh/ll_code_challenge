<template>
  <Navbar id="navbar" />
  <main class="content">
    <HomePage />
  </main>
  <Footer />
</template>

<style scoped>
#navbar {
  z-index: 1000;
}
#navbar.fixed {
  position: fixed;
}
#navbar.fixed ul li {
  height: 80px;
}

.content {
  padding-top: 80px;
}
</style>

<script setup lang="ts">
import HomePage from './components/HomePage.vue';
import Navbar from './components/navbar/Navbar.vue';
import Footer from './components/Footer.vue';

import { onMounted } from 'vue';

onMounted(() => {
  const nav = document.getElementById('navbar')!;
  let navTop = nav.offsetTop;

  function fixedNav() {
    if (window.scrollY >= navTop) {
      nav.classList.add('fixed');
    } else {
      nav.classList.remove('fixed');
    }
  }

  window.addEventListener('scroll', fixedNav);
});
</script>
