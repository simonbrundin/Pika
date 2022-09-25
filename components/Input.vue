<template>
  <div>
    <ion-input
      type="text"
      name="text"
      v-model="text"
      placeholder="Målnamn"
      class="border-2 px-5 py-2 rounded-lg mr-2 text-black"
      @keyup.enter="newGoal(text)"
    />
    <ion-button @click="newGoal(text)"> Lägg till </ion-button>
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
