<template>
  <div>
    <input
      type="text"
      name="text"
      v-model="text"
      placeholder="Målnamn"
      class="border-slate-600 border-2 px-5 py-2 rounded-full mr-2"
      @keyup.enter="newGoal(text)"
    />
    <button @click="newGoal(text)" class="rounded-full bg-green-600 px-4 py-2">
      Lägg till
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/stores/store";
const store = useStore();
let text = ref("");
const newGoal = async (title) => {
  addGoal(title);
  text.value = "";
  console.log(text);
};
</script>

<style scoped></style>
