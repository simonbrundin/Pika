<template>
  <div>
    <TaskList :key="update" @taskAdded="updateTaskList" /><Input class="mt-4" />
  </div>
</template>

<script setup lang="ts">
let update: number = 0;
const updateTaskList = () => {
  update++;
  console.log("här");
};
</script>

<style scoped></style>
