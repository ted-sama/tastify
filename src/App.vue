<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

onMounted(() => {
  let access_token = localStorage.getItem("accessToken");
  let token = JSON.parse(access_token);

  if (access_token) {
    if (token.expires_at < Date.now()) {
      localStorage.clear();
      location.href = "/";
    }
  }
});
</script>

<template>
  <Navbar />
  <div class="container">
    <RouterView />
  </div>
  <Footer />
</template>
