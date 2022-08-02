<template>
  <div class="hero-container">
    <img class="hero-image" src="@/assets/Images/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg" />
    
  </div>
</template>

<style scoped>
.hero-container {
  position: relative;
  width: 100%;
  max-height: 80vh;
  overflow: hidden;
}

.hero-image {
  display: block;
  width: 100%;
  height: 75vh;
  object-fit: fill;
  animation-name: zoomer;
  animation-duration: 12s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes zoomer {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<script setup lang="ts">

</script>
