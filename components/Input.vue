<template>
  <div>
    <input
      type="text"
      name="text"
      v-model="text"
      placeholder="Målnamn"
      class="border-slate-600 border-2 px-5 py-2 rounded-full mr-2"
    />
    <button @click="addTask(text)" class="rounded-full bg-green-600 px-4 py-2">
      Lägg till
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["taskAdded"]);
let text: string;
const addTask = (title) => {
  GqlAddTask({ title }).then(() => {
    emit("taskAdded");
    console.log("emittat");
  });
};
</script>

<style scoped></style>
