import { useStore } from "@/stores/store";
export default async function () {
  const { data } = await useAsyncGql("AllGoals");
  const goals: object[] = data.value.goal;
  console.log(goals);
  const store = useStore();
  store.goals = goals;
}
