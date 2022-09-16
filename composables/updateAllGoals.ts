import { useStore } from "@/stores/store";
export default async function () {
  const store = useStore();
  const { data } = await useAsyncGql({
    operation: "AllGoals",
  });
  const goals: object[] = data.value.goal;
  console.log(goals.length);
  store.goals = goals;
}
