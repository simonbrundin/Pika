<template>
  <div class="flex flex-col">
    <div
      v-for="(goal, index) in store.children(store.goalInFocus)"
      :key="index"
      class="bg-slate-50 shadow-xl px-6 py-4 rounded-full flex justify-between m-1"
      @click="setGoalInFocus(goal.id)"
    >
      <div>
        {{ goal.title }}
      </div>
      <div
        @click="deleteGoal(goal.id)"
        v-if="store.children(goal.id).length === 0"
      >
        x
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/store";
const store = useStore();
</script>

<style scoped></style>
