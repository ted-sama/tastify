<script setup>
import { RouterLink } from "vue-router";
import { onMounted, onUnmounted, ref } from "vue";

let access_token = localStorage.getItem("accessToken");
let isLoggedIn = access_token ? true : false;

const screenWidth = ref(window.innerWidth);

const handleResize = () => {
  screenWidth.value = window.innerWidth;
};
onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const disconnectUser = () => {
  localStorage.clear();
};

const toggleNav = () => {
  const nav = document.getElementById("mobile-nav");
  nav.classList.toggle("hidden");
};

const closeNav = () => {
  const nav = document.getElementById("mobile-nav");
  if (!nav.classList.contains("hidden")) {
    nav.classList.add("hidden");
  }
};
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-white/20"
    v-if="screenWidth < 768"
  >
    <div class="px-2 container flex h-16 items-center justify-between">
      <div class="flex">
        <router-link :to="{ name: 'home' }" @click="closeNav"
          ><span class="text-lg font-bold mr-8">Tastify!</span></router-link
        >
      </div>
      <div class="flex justify-end">
        <button @click="toggleNav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- mobile nav bar -->
    <div
      class="absolute z-50 w-full border-b border-white/20 bg-black/90 backdrop-blur hidden items-center justify-center navbar-anim"
      id="mobile-nav"
    >
      <div>
        <nav
          class="relative flex flex-col items-center text-md font-medium p-6 space-y-3"
        >
          <router-link :to="{ name: 'topartists' }" @click="toggleNav"
            >Top Artists
          </router-link>
          <router-link :to="{ name: 'toptracks' }" @click="toggleNav"
            >Top Tracks
          </router-link>
          <router-link :to="{ name: 'recent' }" @click="toggleNav"
            >Recently Played
          </router-link>
          <a href="/" @click="disconnectUser, toggleNav" v-if="isLoggedIn"
            >Se déconnecter</a
          >
        </nav>
      </div>
    </div>
  </header>

  <header class="sticky top-0 z-50 navbar-bg border-b border-white/20" v-else>
    <div class="px-2 container flex h-16 items-center justify-between">
      <div class="flex">
        <router-link :to="{ name: 'home' }"
          ><span class="text-lg font-bold mr-8">Tastify!</span></router-link
        >
        <nav class="flex items-center space-x-6 text-sm font-medium">
          <router-link :to="{ name: 'topartists' }">Top Artists</router-link>
          <router-link :to="{ name: 'toptracks' }">Top Tracks</router-link>
          <router-link :to="{ name: 'recent' }">Recently Played</router-link>
        </nav>
      </div>
      <div class="flex justify-end">
        <nav class="flex items-center space-x-6 text-sm font-medium">
          <a href="/" @click="disconnectUser" v-if="isLoggedIn"
            >Se déconnecter</a
          >
        </nav>
      </div>
    </div>
  </header>
</template>

<style>
.navbar-bg {
  background-color: rgba(0, 0, 0, 0.048);
  backdrop-filter: blur(10px);
}
</style>
