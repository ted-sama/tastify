<script setup>
import { RouterLink } from "vue-router";
import { onMounted, ref } from "vue";
import axios from "axios";

const userData = ref({});

const getUserData = () => {
  const access_token = localStorage.getItem("accessToken");
  const token = JSON.parse(access_token);
  axios
    .get(`https://api.spotify.com/v1/me`, {
      headers: { Authorization: `Bearer ${token.access_token}` },
    })
    .then((response) => {
      userData.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

onMounted(() => {
  getUserData();
});
</script>

<template>
  <div class="card w-full bg-card">
    <div class="card-body items-center text-center">
      <h1 class="card-title mb-2 text-3xl font-medium">Tastify!</h1>
      <p class="mb-1">Bienvenue sur Tastify!, {{ userData.display_name }} !</p>
      <p class="mb-4">Découvre tes artistes et titres préféres ou du moment</p>
      <div class="card-actions space-x-4">
        <router-link class="btn btn-primary" :to="{ name: 'topartists' }"
          >Top Artists
        </router-link>
        <router-link class="btn btn-primary" :to="{ name: 'toptracks' }"
          >Top Tracks
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-card {
  background-color: rgba(255, 255, 255, 0.048);
}
</style>
