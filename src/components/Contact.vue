<template>
  <div>
    <img class="pic" src="@/assets/Images/harry-swales-0l0KjNoAfAk-unsplash.jpg" />
    <div class="contact-us">
      <h1>Get In Touch</h1>
      <p>New albums every single month, check out the newest & best from Snyder Recording artist, now available on Apple
        Music & Spotify.</p>
      <div>
        <form>
          <div class="form-row">
            <div class="form-group">
              <div><label for="firstName">First Name</label></div>
              <input type="text" class="form-control" id="firstName" placeholder="First Name">
            </div>
            <div class="form-group">
              <div><label for="lastName">Last Name</label></div>
              <input type="text" class="form-control" id="lastName" placeholder="Last Name">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <div><label for="email">Email Address</label></div>
              <input type="email" class="form-control" id="email" placeholder="Email Address">
            </div>
            <div class="form-group">
              <div><label for="reason">Reason for Contacting</label></div>
              <select class="form-control" id="reason">
                <option selected="true" disabled="true">Select One</option>
                <option>Inquiry</option>
                <option>Feedback</option>
                <option>Something crazy to fit here.</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <div><label for="message">Message</label></div>
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

input,
select {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  /* Blue */

  color: #001D5D;

  height: 32px;
}

textarea {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  /* Blue */

  color: #001D5D;
}

option:disabled {
  color: gray;
  background-color: whitesmoke;
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
  width: 168px;
}

.learn-more:hover {
  background-color: #42A418;
  color: white;
}

form {
  padding-bottom: 15px;
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

.form-row {
  display: flex;
  flex-wrap: wrap;
}

.form-group {
  padding-right: 2%;
  padding-bottom: 2%;
}

@media (max-width: 600px) {
  .pic {
    width: 100%;
    height: 250px;
    padding-bottom: 25px;
    object-fit: cover;
  }
}
</style>

<script setup lang="ts">
function sendMessage(e: Event) {
  alert("Message sent! thank you");
}
</script>
