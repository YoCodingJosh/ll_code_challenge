<template>
  <nav id="navbar">
    <button class="navbar-responsive-toggle-button" @click="toggleResponsiveNavbar()">&equiv;</button>
    <ul id="navbar-items">
      <li>
        <a href="#"><img src="@/assets/Logo-Blue.svg" /></a>
      </li>
      <li>
        <NavbarItem :icon="NavbarItemIcon.Home" url="#" text="Home" />
      </li>
      <li>
        <NavbarItem :icon="NavbarItemIcon.Record" url="#" text="Records" />
      </li>
      <li>
        <NavbarItem :icon="NavbarItemIcon.Music" url="#" text="Music" />
      </li>
      <li>
        <NavbarItem :icon="NavbarItemIcon.Artist" url="#" text="Artsts" />
      </li>
      <li>
        <NavbarItem :icon="NavbarItemIcon.Concert" url="#" text="Concerts" />
      </li>
      <li>
        <button class="sign-up-button">Sign Up</button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
* {
  color: #001D5D;
  background-color: white;
}

#navbar {
  background-color: white;
  overflow: hidden;
  top: 0;
  width: 100%;
  z-index: 1000;
}

#navbar.fixed {
  position: fixed;
}

#navbar.fixed.responsive {
  height: auto;
}

#navbar-items {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  list-style: none;
}

.sign-up-button {
  background-color: #D9F0D0;
  color: #42A418;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 2px;
}

.sign-up-button:hover {
  background-color: #42A418;
  color: white;
}

.navbar-responsive-toggle-button {
  display: none;
}

@media screen and (max-width: 600px) {
  #navbar {
    height: 80px;
  }

  #navbar-items {
    flex-direction: column;
    position: relative;
  }

  #navbar li:not(:first-child) {
    display: none;
  }

  #navbar .responsive li:not(:first-child) {
    display: flex;
  }

  .navbar-responsive-toggle-button {
    font-size: xx-large;
    z-index: 1200;
    display: block;
    width: 50px;
    height: 50px;
    position: absolute;
  }

  .navbar-responsive-toggle-button:hover {
    cursor: pointer;
  }

  #navbar-items li {
    padding-bottom: 10px;
  }

  #navbar .responsive {
    overflow: auto;
    z-index: 1111;
    height: auto;
  }

  #navbar.responsive ul li {
    display: block;
  }
}
</style>

<script setup lang="ts">
import NavbarItem from './NavbarItem.vue';
import { NavbarItemIcon } from './NavbarItemIcon';

import { onMounted } from 'vue';

onMounted(() => {
  const nav = document.getElementById('navbar')!;
  let navTop = nav.offsetTop;

  function fixedNav() {
    if (window.scrollY >= navTop) {
      nav.classList.add('fixed');
    } else {
      nav.classList.remove('fixed');
    }
  }

  window.addEventListener('scroll', fixedNav);
});

function toggleResponsiveNavbar() {
  document.getElementById('navbar')!.classList.toggle('responsive');
}
</script>
