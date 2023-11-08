<script setup>
import {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  AUTH_ENDPOINT,
  RESPONSE_TYPE,
  SPACE_DELIMITER,
  SCOPES,
} from "../../config.json";

const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

const handleLogin = () => {
  location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES_URL_PARAM}&response_type=${RESPONSE_TYPE}&show_dialog=true`;
};
</script>

<template>
  <div class="card w-full bg-card">
    <div class="card-body items-center text-center">
      <h1 class="card-title mb-2 text-3xl font-medium">Tastify!</h1>
      <p class="mb-4">
        Veuillez vous connecter avec votre compte Spotify pour utiliser Tastify
        !
      </p>
      <div class="card-actions">
        <button class="btn btn-primary" @click="handleLogin">
          Se connecter avec Spotify
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-card {
  background-color: rgba(255, 255, 255, 0.048);
}
</style>
