import { useStore } from "@/stores/store";
export default async function () {
  const categories = await getCategories();
  const store = useStore();
  store.categories = categories;
}
