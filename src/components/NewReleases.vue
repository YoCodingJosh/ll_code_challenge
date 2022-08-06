<template>
  <div class="new-releases">
    <h3>New Releases</h3>
    <p>New albums every single month, check out the newest & best from Snyder Recording artist, now available on Apple
      Music & Spotify.</p>
    <div class="carousel-container">
      <Splide :options="options" aria-label="Our latest releases">
        <SplideSlide v-for="slide in 5" :key="slide">
          <Trapsoul />
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<style scoped>
.new-releases {
  background-color: #F6F6F6;
  padding-top: 1%;
  padding-bottom: 3%;
}

h3 {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  /* identical to box height, or 120% */

  text-align: center;

  /* Blue */

  color: #001D5D;
}

p {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;
  /* Body Text - Gray */

  color: #777777;
}

.carousel-container {
  padding-top: 2%;
}

.splide__slide {
  opacity: 0.5;
}

.splide__slide.is-active {
  opacity: 1;
}
</style>

<script setup lang="ts">
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import type { Options } from '@splidejs/vue-splide';

import Trapsoul from './releases/Trapsoul.vue'

var options: Options = {
  type: "loop",
  perPage: 3,
  perMove: 1,
  pagination: false,
  focus: "center",
  trimSpace: false,
  fixedWidth: "570px",
  fixedHeight: "324px",
  rewind: true,
  gap: "32px",
};
</script>
