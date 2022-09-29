<template>
  <ion-list class="flex flex-col">
    <ion-item
      v-for="(goal, index) in store.children(store.goalInFocus)"
      :key="index"
      class="flex justify-between border-black border-2 m-1"
      @click="setGoalInFocus(goal.id)"
    >
      <div class="flex justify-between flex-row w-full">
        <div class="justify-start">
          <div @click="goal.done = true" v-if="false">☉</div>
          <div :class="{ done: goal.done }">
            {{ goal.title }}
          </div>
        </div>
        <div class="flex justify-end">
          <div
            @click="deleteGoal(goal.id)"
            class="mr-4"
            v-if="store.children(goal.id).length === 0"
          >
            x
          </div>
          <div @click="editGoal(goal.id)">⦂</div>
        </div>
      </div>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/store";
const store = useStore();
const editGoal = (id, title) => {
  setGoalInFocus(store.goalInFocus);
  const newTitle = prompt("Målnamn", title);
  const index = store.goals.findIndex((goal) => goal.id === id);
  store.goals[index].title = newTitle;
};
</script>

<style scoped>
.done {
  color: gray;
}
</style>
