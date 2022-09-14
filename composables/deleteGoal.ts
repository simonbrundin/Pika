export default async function (id: number) {
  const { data } = await useAsyncGql({
    operation: "DeleteGoal",
    variables: { id: id },
  });
  setTimeout(function () {
    updateAllGoals();
    //your code to be executed after 1 second
  }, 5000);
}
