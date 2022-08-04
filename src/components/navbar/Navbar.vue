<template>
  <nav class="navbar">
    <ul class="navbar-items">
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

.navbar {
  background-color: white;
  overflow: hidden;
  top: 0;
  width: 100%;
}

.navbar-items {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
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

.navbar-items {
  list-style: none;
}
</style>

<script setup lang="ts">
import NavbarItem from './NavbarItem.vue';
import { NavbarItemIcon } from './NavbarItemIcon';
</script>
