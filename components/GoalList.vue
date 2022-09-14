<template>
  <div class="flex flex-col">
    <div
      v-for="(goal, index) in store.children"
      :key="index"
      class="bg-slate-50 shadow-xl px-6 py-4 rounded-full flex justify-between m-1"
    >
      <div @click="setGoalInFocus(goal.id)">
        {{ goal.title }}
      </div>
      <div @click="deleteGoal(goal.id)">x</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/store";
const store = useStore();
updateAllGoals();
</script>

<style scoped></style>
