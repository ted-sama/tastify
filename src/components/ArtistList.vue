<script setup>
import {onMounted, onUnmounted, ref} from "vue";

defineProps({
  artists: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="grid grid-cols-3 justify-center space-x-4 md:space-x-0">
    <div
        class="flex flex-col justify-center mb-6"
        v-for="(artist, nb) in artists.items"
        :key="artist.id"
    >
      <div class="text-center">
        <div class="text-xl font-bold mb-2 md:text-2xl">{{ nb + 1 }}</div>
      </div>
      <div class="avatar justify-center">
        <div class="w-48">
          <a
              :href="`https://open.spotify.com/artist/${artist.id}`"
              target="_blank"
          >
            <img :src="artist.images[0].url" alt="Artist Image"/>
          </a>
        </div>
      </div>
      <div class="text-center">
        <div class="text-sm font-bold mt-2 md:text-2xl">{{ artist.name }}</div>
      </div>
    </div>
  </div>
</template>
