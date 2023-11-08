<script setup>
import { onMounted, onUnmounted, ref } from "vue";

defineProps({
  tracks: {
    type: Object,
    required: true,
  },
});

const screenWidth = ref(window.innerWidth);

const handleResize = () => {
  screenWidth.value = window.innerWidth;
};

const getArtists = (artists) => {
  let artistList = "";
  artists.forEach((artist) => {
    artistList += artist.name + ", ";
  });
  return artistList.slice(0, -2);
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <div class="overflow-x-hidden" v-if="screenWidth < 1362">
    <table class="table">
      <tbody>
        <tr v-for="(item, nb) in tracks" :key="item.track.id">
          <th class="w-4">{{ nb + 1 }}</th>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="w-10">
                  <a
                    :href="`https://open.spotify.com/track/${item.track.id}`"
                    target="_blank"
                  >
                    <img
                      :src="item.track.album.images[0].url"
                      alt="Album Image"
                    />
                  </a>
                </div>
              </div>
              <div>
                <div class="text-xs font-bold md:text-sm">
                  {{ item.track.name }}
                </div>
                <div class="text-sm opacity-50">
                  {{ getArtists(item.track.artists) }}
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="overflow-x-auto w-[1280px]" v-else>
    <table class="table table-fixed">
      <thead>
        <tr>
          <th class="w-10"></th>
          <th>Titre</th>
          <th>Artiste</th>
          <th>Album</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, nb) in tracks" :key="item.track.id">
          <th>{{ nb + 1 }}</th>
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="w-16">
                  <a
                    :href="`https://open.spotify.com/track/${item.track.id}`"
                    target="_blank"
                  >
                    <img
                      :src="item.track.album.images[0].url"
                      alt="Album Image"
                    />
                  </a>
                </div>
              </div>
              <div>
                <div class="text-xs font-bold md:text-sm">
                  {{ item.track.name }}
                </div>
              </div>
            </div>
          </td>
          <td>
            {{ getArtists(item.track.artists) }}
          </td>
          <td>{{ item.track.album.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
