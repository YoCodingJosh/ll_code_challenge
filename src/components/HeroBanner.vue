<template>
  <div class="hero-container">
    <img class="hero-image" src="@/assets/Images/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg" />
    <div class="hero-content">
      <h1>A.M. Paradox</h1>
      <p>Christopher Brent Wood, better known by his stage name Brent Faiyaz, is
        an American singer and record producer. He released his debut project, an extended play entitled A.M. Paradox,
        in 2016.</p>
    </div>
  </div>
</template>

<style scoped>
.hero-container {
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  color: white;
}

.hero-image {
  width: 100%;
  height: 80vh;
  object-fit: fill;
  animation-name: zoomer;
  animation-duration: 12s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  z-index: -100;
  position: absolute;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
}

.hero-content {
  position: relative;
  z-index: 100;
}

.hero-container h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 72px;

  padding-top: 10%;
  padding-left: 10%;
}

.hero-container p {
  padding-left: 10%;
  max-width: 567px;
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
