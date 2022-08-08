<template>
  <div class="hero-container">
    <img class="hero-image" src="@/assets/Images/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg" />
    <div class="hero-content">
      <h1>A.M. Paradox</h1>
      <p>Christopher Brent Wood, better known by his stage name Brent Faiyaz, is
        an American singer and record producer. He released his debut project, an extended play entitled A.M. Paradox,
        in 2016.</p>
      <div class="hero-action">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <button class="play-button"><img :src="PlayButtonIcon" /></button>
          <div class="hero-action-link-text">Watch Video</div>
        </a>
      </div>
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
  object-fit: cover;
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
  max-width: 567px;
  padding-top: 10%;
  padding-left: 10%;
  padding-right: 10%;
}

.hero-container h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 72px;
}

.hero-content .hero-action a {
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}

.hero-content .hero-action a .hero-action-link-text {
  display: inline-block;
  padding-left: 24px;
}

.play-button {
  display: inline-block;
  border-radius: 50%;
  border: 1px solid white;
  fill: white;
  width: 60px;
  height: 60px;
  cursor: pointer;
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

@media screen and (max-width: 600px) {
  .hero-container {
    padding-top: 80px;
  }
}
</style>

<script setup lang="ts">
import PlayButtonIcon from '@/assets/BasicIcons/Play button triangle.svg';
</script>
