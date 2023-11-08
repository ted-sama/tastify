<script setup>
import { RouterLink } from "vue-router";
import { onMounted, ref } from "vue";
import Login from "../components/Login.vue";
import MainMenu from "../components/MainMenu.vue";
import RecentlyPlayed from "../components/RecentlyPlayed.vue";

let access_token = localStorage.getItem("accessToken");
let token = JSON.parse(access_token);
let isLoggedIn = access_token ? true : false;
</script>

<template>
  <div class="flex flex-col justify-center">
    <MainMenu v-if="isLoggedIn" />
    <Login v-else />
    <RecentlyPlayed v-if="isLoggedIn" />
  </div>
</template>
