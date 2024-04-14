import { BASE_URL } from "@/utils/constants";
import Cookies from "js-cookie";
export async function getData(endpoint) {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    headers: {
      authorization: `Bearer ${Cookies.get("accessToken")}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data getData()");
  }

  const data = await res.json();
  return data;
}
