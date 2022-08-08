<template>
  <footer class="bottom-text">
    <div>
      <ul class="footer-cols information-col">
        <li><img src="@/assets/Logo-White.svg" /></li>
        <li class="address">8521 W Fairfax Rd<br />Los Angeles, CA</li>
        <li>990210<br />(909) 505 4302</li>
      </ul>
      <ul class="footer-cols">
        <li class="footer-cols-header">Explore</li>
        <li>About Us</li>
        <li>Our Story</li>
        <li>Teams</li>
        <li>Careers</li>
        <li>FAQ</li>
      </ul>
      <ul class="footer-cols">
        <li class="footer-cols-header">Music</li>
        <li>Missing Out</li>
        <li>Trapsoul</li>
        <li>Sonder Sons</li>
        <li>Paradise Today</li>
        <li>Needed</li>
      </ul>
      <ul class="footer-cols">
        <li class="footer-cols-header">Artists</li>
        <li>Brent Faiyaz</li>
        <li>Drake</li>
        <li>Bryson Ford</li>
        <li>Young Ford</li>
        <li>Roy Fresco</li>
      </ul>
      <ul class="footer-cols">
        <li class="footer-cols-header">Records</li>
        <li>What a Time</li>
        <li>Coming Home</li>
        <li>Always First</li>
        <li>So Far Gone</li>
        <li>Big Bluez</li>
      </ul>
    </div>
    <hr>
    <div>
      <span class="privacy-policy">Privacy Policy</span>
      <span>Terms &amp; Conditions</span>
      <span class="social-icons">
        <a href="https://www.instagram.com/snyderrecording" target="_blank">
          <img class="social-icon" :src="InstagramIcon" />
        </a>
        <a href="https://www.youtube.com/snyderrecording" target="_blank">
          <img class="social-icon" :src="YouTubeIcon" />
        </a>
        <a href="https://www.twitter.com/snyderrecording" target="_blank">
          <img class="social-icon" :src="TwitterIcon" />
        </a>
        <a href="https://www.facebook.com/snyderrecording" target="_blank">
          <img class="social-icon last-social-icon" :src="FacebookIcon" />
        </a>
      </span>
      <div class="clear-float"></div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 3%;
  padding-top: 4%;
  padding-bottom: 2%;
  bottom: 0;
  background-color: #001D5D;
}

.footer-cols {
  text-align: left;
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-right: 10%;
  display: inline-block;
  /* Body/Medium/Regular-Med */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */


  /* White */

  color: #FFFFFF;
}

.footer-cols li {
  padding-top: 10px;
}

.information-col {
  text-align: left;
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-right: 10%;
  display: inline-block;
  /* Body/Medium/Regular-Med */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  /* or 144% */


  /* White */

  color: #FFFFFF;
}

.footer-cols-header {
  padding-bottom: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.address {
  padding-top: 24px;
  padding-bottom: 12px;
}

footer hr {
  margin-top: 50px;
  border: 1px solid #FFFFFF;
  margin-bottom: 24px;
}

.bottom-text {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #FFFFFF;
}

.privacy-policy {
  padding-right: 5%;
}

.social-icons {
  float: right;
}

.clear-float {
  clear: both;
}

.social-icon {
  /* make the icons white */
  filter: invert(1);
  padding-right: 20px;
}

.last-social-icon {
  padding-right: 0;
}

@media screen and (max-width: 768px) {
  .footer-cols {
    padding-top: 25px;
    padding-right: 6%;
  }

  .social-icons {
    float: left;
    padding-top: 10px;
  }
}
  
</style>

<script setup lang="ts">
import InstagramIcon from '@/assets/SocialIcons/007-instagram 1.svg';
import YouTubeIcon from '@/assets/SocialIcons/009-youtube 1.svg';
import TwitterIcon from '@/assets/SocialIcons/004-twitter 1.svg';
import FacebookIcon from '@/assets/SocialIcons/002-facebook 1.svg';
</script>
