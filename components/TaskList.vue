<template>
  <div>
    <div v-for="task in data" :key="task.id">
      {{ task }}
    </div>
  </div>
</template>

<script setup lang="ts">
// const { data } = await useAsyncGql("AllTasks");
</script>

<style scoped></style>
