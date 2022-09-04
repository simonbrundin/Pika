<template>
  <div>
    <div v-for="(task, index) in data.task" :key="index">
      {{ task.title }}
      {{ store.test }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/store";
const { data } = await useAsyncGql("AllTasks");
const store = useStore();
console.log("Tasks hämtade");
</script>

<style scoped></style>
