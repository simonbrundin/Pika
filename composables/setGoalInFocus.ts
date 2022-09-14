import { useStore } from "@/stores/store";
export default async function (id: number) {
  const store = useStore();

  store.goalInFocus = id;
}
