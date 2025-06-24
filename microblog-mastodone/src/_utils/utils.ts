import { DogResponse } from "../_interfaces/interfaces";
export async function fetchDogImageUrl(): Promise<DogResponse> {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  return await response.json();
}

export function getDogImageUrl(response: DogResponse): string {
  return response.message;
}
