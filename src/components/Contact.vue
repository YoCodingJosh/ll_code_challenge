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
            <div><label for="firstName">First Name</label></div>
            <input type="text" class="form-control" id="firstName" placeholder="First Name">
          </div>
          <div class="form-group">
            <div><label for="lastName">Last Name</label></div>
            <input type="text" class="form-control" id="lastName" placeholder="Last Name">
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" class="form-control" id="email" placeholder="Email Address">
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" id="message" rows="3" placeholder="Write a brief message..."></textarea>
          </div>
          <button class="learn-more" type="submit" @click.prevent="sendMessage">Learn
            More</button>
        </form>
      </div>
    </div>
    <div class="clear-float"></div>
  </div>
</template>

<style scoped>
.contact-us {
  padding-top: 1%;
  padding-left: 3%;
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

input {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

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

.learn-more {
  align-items: center;
  padding: 10px;
  gap: 10px;
  background: #D9F0D0;
  border-radius: 2px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Green */

  color: #42A418;

  width: 168px;
}

.form-group label {
  /* Body/Regular/Small-Reg */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */


  /* Medium Gray */

  color: #777777;
}
</style>

<script setup lang="ts">
function sendMessage(e: Event) {
  alert("Message sent! thank you");
}
</script>
