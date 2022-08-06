<template>
  <div class="card">
    <div class="cover"></div>
    <div class="card-content">
      <h1 class="title">Trapsoul</h1>
      <h3 class="artist">Bryson Tiller</h3>
      <p class="text">Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky,
        he started his
        career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1. </p>
      <div class="clear-float"></div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: white;
}

.card-content {
  padding-top: 68px;
}

.title {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */


  /* Blue */

  color: #001D5D;
}

.artist {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.04em;
  text-transform: uppercase;

  /* Green */

  color: #42A418;
}

.text {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */


  /* Body Text - Gray */

  color: #777777;
}

.cover {
  background: url(@/assets/Images/71RLkNIuZNL._SY355_.jpg), #D9D9D9;
  width: 189px;
  height: 188px;
  float: left;
  margin-right: 23px;
  background-size: contain;
  margin-left: 24px;
  margin-top: 68px;
  margin-bottom: 68px;
}

.clear-float {
  clear: both;
}

@media (max-width: 600px) {
  .card {
    width: auto;
    padding-left: 10%;
  }

  .card-content {
    padding-top: 10px;
  }

  .text {
    font-size: 12px;
    line-height: 18px;
    /* max-width: 200px; */
    max-width: max-content;
    margin-right: 20%;
  }

  .cover {
    width: 120px;
    height: 120px;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 45px;
    margin-bottom: 50px;
  }

  .title {
    font-size: 28px;
    line-height: 36px;
  }

  .artist {
    font-size: 12px;
    line-height: 18px;
  }
}
</style>

<script setup lang="ts">
</script>
