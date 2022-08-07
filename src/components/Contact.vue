<template>
  <div>
    <img class="pic" src="@/assets/Images/harry-swales-0l0KjNoAfAk-unsplash.jpg" />
    <div class="contact-us">
      <h1>Get In Touch</h1>
      <p>New albums every single month, check out the newest & best from Snyder Recording artist, now available on Apple
        Music & Spotify.</p>
      <div class="form">
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter name">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" id="message" rows="3"></textarea>
          </div>
          <button type="submit" @click.prevent="sendMessage" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    <div class="clear-float"></div>
  </div>
</template>

<style scoped>
.contact-us {
  padding-top: 1%;
  padding-left: 1%;
}

h1 {
  /* Header/3 */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  /* identical to box height, or 120% */


  /* Blue */

  color: #001D5D;
}

p {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  /* or 144% */


  /* Medium Gray */

  color: #777777;

  max-width: 468px;
}

.pic {
  display: block;
  max-width: 519px;
  height: 782px;
  float: right;
  object-fit: cover;
}

.clear-float {
  clear: both;
}
</style>

<script setup lang="ts">
function sendMessage(e: Event) {
  alert("Message sent! thank you");
}
</script>
