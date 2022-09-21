<template>
  <div class="grid grid-cols-4">
    <!-- <img class="thumbnail" v-for="image in results" :src="image.thumbnail" /> -->
  </div>
</template>

<script setup lang="ts">
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e5e3d3c7a9msh57af80f8866a941p19a2a4jsn3f3f54a605ed",
    "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
  },
};

await useFetch(
  "https://bing-image-search1.p.rapidapi.com/images/details?insightsToken=%3CREQUIRED%3E",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
const query: string = "notion";
const url: string =
  "https://www.google.com.ua/search?source=lnms&sa=X&gbv=1&tbm=isch&q=cat";
</script>
<style scoped>
.thumbnail {
  max-width: 64px;
  max-height: 64px;
}
</style>
