import { useStore } from "@/stores/store";
export default async function (id: number) {
  const store = useStore();
  const goalsWithoutRemovedGoal = store.goals.filter((goal) => goal.id !== id);
  store.goals = goalsWithoutRemovedGoal;
  const { data: removed } = await useAsyncGql({
    operation: "DeleteGoal",
    variables: { id: id },
  });
}
