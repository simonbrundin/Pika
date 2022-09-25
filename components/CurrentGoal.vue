<template>
  <div class="flex justify-center">
    <div class="current" @click="setGoalInFocus(store.goalInFocus)">
      {{ store.currentGoal.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/store";
const store = useStore();
</script>

<style scoped>
.current {
  font-size: 2em;
  color: black;
}
</style>
