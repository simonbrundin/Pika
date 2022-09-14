export default async function () {
  const { data } = await useAsyncGql("AllGoals");
  const goals: object[] = data.value.goal;
  return goals;
}
