<template>
  <div class="navbar-item" @click="goToUrl()">
    <img class="navbar-item-icon" :src="icon" />
    <span class="navbar-item-text">{{ text }}</span>
  </div>
</template>

<style scoped>
.navbar-item {
  cursor: pointer;
}

.navbar-item:hover {
  background-color: #FAFAFA;
}

.navbar-item-icon {
  width: 25px;
  height: 25px;
  margin-right: 10px;
  vertical-align: middle;
}

.navbar-item-text {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #001D5D;
}
</style>

<script setup lang="ts">
const props = defineProps({
  icon: String,
  url: String,
  text: String,
});

function goToUrl() {
  window.location.href = props.url!;
}
</script>
