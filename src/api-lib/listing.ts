//Function to GET listings

import { apiCall } from "./apiCall";
export async function listing() {
  let response = await apiCall("", "", {});

  return await response.json();
}
