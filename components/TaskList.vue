<template>
  <div>
    <div v-for="(task, index) in data.task" :key="index">
      {{ task.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncGql("AllTasks");
console.log("Tasks hämtade");
</script>

<style scoped></style>
