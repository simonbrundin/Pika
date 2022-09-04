export default async function () {
  const { data } = await useAsyncGql("Categories");
  const categories: object[] = data.value.goal;
  return categories;
}
