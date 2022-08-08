<template>
  <div class="content">
    <img class="content-image" src="@/assets/Images/aHR0cDovL2ltYWdlLmloZWFydC5jb20vaW1hZ2VzL3JvdmkvMTA4MC8wMDA0LzMyNy9NSTAwMDQzMjcxNjAuanBn.webp" />
    <div class="content-body">
      <h3>Brent Faiyaz, So Far Gone</h3>
      <p>Faiyaz began uploading his music onto SoundCloud in 2014 and moved from his hometown Columbia, Maryland to
        Charlotte, North Carolina before ultimately settling in Los Angeles, California to further his music career. On
        January 19, 2015, he released his debut single "Allure". On June 1, 2016, Faiyaz released "Invite Me", the lead
        single from his upcoming debut EP. On September 19, 2016, his 21st birthday, the EP entitled A.M. Paradox was
        released and received with positive reviews from music critics. On January 26, 2017, Sonder released their debut
        EP Into.</p>
      <button @click="goToUrl('https://www.google.com/')" class="learn-more-button">Learn More</button>
    </div>
  </div>
  <div class="clear-float"></div>
</template>

<style scoped>
.content {
  padding: 5%;
}

.content-body {
  max-width: 467px;
  display: inline-block;
}

.content-image {
  float: left;
  padding-right: 32px;
  max-width: 50%;
  max-height: 454px;
  object-fit: cover;
}

.content h3 {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  /* or 120% */

  display: flex;
  align-items: center;

  /* Blue */
  color: #001D5D;
}

.content p {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  display: flex;
  align-items: center;

  /* Body Text - Gray */
  color: #777777;


  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
}

.learn-more-button {
  background: #D9F0D0;
  border-radius: 2px;
  text-align: center;
  text-decoration: none;
  color: #42A418;
  font-size: 16px;
  cursor: pointer;
  padding: 15px 32px;
  border: none;
  transition: 0.3s;
}

.learn-more-button:hover {
  background: #42A418;
  color: white;
}

.clear-float {
  clear: both;
}

@media (max-width: 600px) {
  .content-image {
    float: none;
    max-width: 100%;
  }
}
</style>

<script setup lang="ts">
function goToUrl(url: string) {
  window.open(url!, '_blank')!.focus();
}
</script>
