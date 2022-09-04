<template>
  <div>
    <div v-for="(goal, index) in categories.goal" :key="index">
      {{ goal.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = await getCategories();
</script>

<style scoped></style>
