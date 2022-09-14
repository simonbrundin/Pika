<template>
  <div>
    <input
      type="text"
      name="text"
      v-model="text"
      placeholder="Målnamn"
      class="border-slate-600 border-2 px-5 py-2 rounded-full mr-2"
    />
    <button @click="addGoal(text)" class="rounded-full bg-green-600 px-4 py-2">
      Lägg till
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/store";
const store = useStore();
let text: string;
const addGoal = async (title) => {
  const { data: goals } = await useAsyncGql({
    operation: "AddGoal",
    variables: { title },
  });
  const goalID = goals.value.insert_goal.returning[0].id;

  const { data } = await useAsyncGql({
    operation: "AddParent",
    variables: { goal_id: goalID, parent_id: store.goalInFocus },
  });
  updateAllGoals();
};
</script>

<style scoped></style>
