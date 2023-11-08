<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

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
  <div class="mt-12">
    <div class="hidden md:block">
      <h2 class="text-2xl font-medium mb-6">Titres récents</h2>
      <div class="grid grid-cols-10 justify-center gap-4">
        <div class="avatar" v-for="item in recentData.items">
          <div class="w-28">
            <a
              :href="`https://open.spotify.com/track/${item.track.id}`"
              target="_blank"
            >
              <img :src="item.track.album.images[0].url" alt="Album Image" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <router-link class="mt-6 btn btn-primary w-full" :to="{ name: 'recent' }"
      >Consulter mes titres récents
    </router-link>
  </div>
</template>
