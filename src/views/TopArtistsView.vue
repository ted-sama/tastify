<script setup>
import { RouterLink } from "vue-router";
import { onMounted, ref } from "vue";
import axios from "axios";
import ArtistList from "../components/ArtistList.vue";

const artistData = ref({});
const termClicked = ref("short");
const currentTerm = ref("4 dernières semaines");

const getArtistData = (term) => {
  const access_token = localStorage.getItem("accessToken");
  const token = JSON.parse(access_token);
  termClicked.value = term;
  currentTerm.value =
    term === "short"
      ? "4 dernières semaines"
      : term === "medium"
      ? "6 derniers mois"
      : "12 derniers mois";
  var endpoint = `https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=50&offset=0`;
  if (term === "short") {
    var endpoint = `https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=50&offset=0`;
  } else if (term === "medium") {
    var endpoint = `https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=50&offset=0`;
  } else if (term === "long") {
    var endpoint = `https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50&offset=0`;
  }
  axios
    .get(endpoint, {
      headers: { Authorization: `Bearer ${token.access_token}` },
    })
    .then((response) => {
      artistData.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

onMounted(() => {
  getArtistData("short");
});
</script>

<template>
  <div class="flex flex-col justify-center">
    <div>
      <h1 class="text-3xl font-bold mb-6">Top Artists ({{ currentTerm }})</h1>
      <div class="flex justify-between mb-8">
        <button
          class="btn btn-primary w-24 text-xs md:w-auto md:text-sm"
          @click="getArtistData('short')"
          :disabled="termClicked === 'short'"
        >
          4 dernières semaines
        </button>
        <button
          class="btn btn-primary w-24 text-xs md:w-auto md:text-sm"
          @click="getArtistData('medium')"
          :disabled="termClicked === 'medium'"
        >
          6 derniers mois
        </button>
        <button
          class="btn btn-primary w-24 text-xs md:w-auto md:text-sm"
          @click="getArtistData('long')"
          :disabled="termClicked === 'long'"
        >
          12 derniers mois
        </button>
      </div>
    </div>
    <ArtistList :artists="artistData" />
  </div>
</template>
