<template>
  <div class="content">
    <div class="content-body">
      <img src="@/assets/Images/aHR0cDovL2ltYWdlLmloZWFydC5jb20vaW1hZ2VzL3JvdmkvMTA4MC8wMDA0LzMyNy9NSTAwMDQzMjcxNjAuanBn.webp" />
      <h1>Brent Faiyaz, So Far Gone</h1>
      <p>Faiyaz began uploading his music onto SoundCloud in 2014 and moved from his hometown Columbia, Maryland to
        Charlotte, North Carolina before ultimately settling in Los Angeles, California to further his music career. On
        January 19, 2015, he released his debut single "Allure". On June 1, 2016, Faiyaz released "Invite Me", the lead
        single from his upcoming debut EP. On September 19, 2016, his 21st birthday, the EP entitled A.M. Paradox was
        released and received with positive reviews from music critics. On January 26, 2017, Sonder released their debut
        EP Into.</p>
      <button @click="goToUrl('https://www.google.com/')" class="learn-more-button">Learn More</button>
    </div>
  </div>
</template>

<style scoped>
.content {
  padding: 5%;
}

.content-body {
  max-width: 467px;
}

.content h1 {
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


  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
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
}

.learn-more-button:hover {
  background: #42A418;
  color: white;
}
</style>

<script setup lang="ts">
function goToUrl(url: string) {
  window.open(url!, '_blank')!.focus();
}
</script>
