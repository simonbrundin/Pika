import { useStore } from "@/stores/store";
export default function () {
  const store = useStore();
  const { data } = useAsyncGql("Categories");
  return data;
}
