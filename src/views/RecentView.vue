<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import RecentList from "../components/RecentList.vue";

const recentData = ref({});

const getRecentPlayData = () => {
  const access_token = localStorage.getItem("accessToken");
  const token = JSON.parse(access_token);

  axios
    .get("https://api.spotify.com/v1/me/player/recently-played", {
      headers: { Authorization: `Bearer ${token.access_token}` },
    })
    .then((response) => {
      recentData.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

onMounted(() => {
  getRecentPlayData();
});
</script>

<template>
  <div class="flex flex-col justify-center">
    <h1 class="text-3xl font-bold mb-6">Recent Tracks</h1>
    <RecentList :tracks="recentData.items" />
  </div>
</template>
