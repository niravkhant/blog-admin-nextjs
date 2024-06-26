import { BASE_URL } from "@/utils/constants";
export async function getData(endpoint) {
  const res = await fetch(`${BASE_URL}/${endpoint}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data getData()");
  }

  const data = await res.json();
  return data;
}
