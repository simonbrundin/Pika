import { useStore } from "@/stores/store";
export default async function (title: string) {
  const store = useStore();
  const { data: newGoal } = await useAsyncGql({
    operation: "AddGoal",
    variables: { title },
  });
  const goalID = newGoal.value.insert_goal.returning[0].id;
  const goal = {
    id: goalID,
    title,
    parents: [{ parent_id: store.goalInFocus }],
  };
  store.goals.push(goal);
  const { newParent } = await useAsyncGql({
    operation: "AddParent",
    variables: { goal_id: goalID, parent_id: store.goalInFocus },
  });
  updateAllGoals();
}
