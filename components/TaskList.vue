<template>
  <div>
    <div v-for="(goal, index) in store.categories" :key="index">
      {{ goal.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/store";
const store = useStore();
updateCategories();
</script>

<style scoped></style>
