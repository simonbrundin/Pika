<template>
  <div>
    <div v-for="(task, index) in data.task" :key="index">
      {{ task.title }}
    </div>
    {{ data }}
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncGql("MyTasks");
</script>

<style scoped></style>
