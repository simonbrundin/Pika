<template>
  <div class="flex justify-center">
    <div
      v-for="goal in store.parents"
      :key="goal.id"
      @click="setGoalInFocus(goal.id)"
      class="parent"
    >
      {{ goal.title }}
    </div>
    <div
      v-if="store.parents.length === 0 && store.currentGoal.id !== 0"
      @click="setGoalInFocus(0)"
    >
      {{ store.baseName }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/store";
const store = useStore();
</script>

<style scoped>
.parent {
  font-size: 1em;
}
</style>
