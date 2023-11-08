<script setup>
import {onMounted} from "vue";
import {RouterLink} from "vue-router";

let access_token = null;
let type = null;
let expires_at = null;
let currentTime = null;

onMounted(() => {
  const hash = location.hash;
  access_token = hash
      .substring(1)
      .split("&")
      .find((elem) => elem.startsWith("access_token"))
      .split("=")[1];
  type = hash
      .substring(1)
      .split("&")
      .find((elem) => elem.startsWith("token_type"))
      .split("=")[1];

  currentTime = Date.now();
  expires_at = currentTime + 3600000; // 1 hour, js operate with milliseconds

  let accessToken = {
    access_token: access_token,
    type: type,
    expires_at: expires_at,
  };

  localStorage.setItem("accessToken", JSON.stringify(accessToken));
  location.href = "/";
});
</script>

<template></template>
