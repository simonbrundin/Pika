<template>
  <div class="flex justify-center" @keyup.Enter="log()">
    <div
      v-for="goal in store.parents"
      :key="goal.id"
      @click="setGoalInFocus(goal.id)"
      class="parent"
    >
      {{ goal.title }}
    </div>
    <div
      class="parent"
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
const log = () => console.log("ok");
window.addEventListener("keyup", (e) => {
  console.log(e.key.toString());
  switch (e.key.toString()) {
    case "Enter":
      setGoalInFocus(1);
  }
});
</script>

<style scoped>
.parent {
  font-size: 1em;
  color: black;
}
</style>
