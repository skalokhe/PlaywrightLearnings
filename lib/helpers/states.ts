import { randomValueFromArray } from "./arrays";

export function randomState() {
  const states = [
    "Maharashtra",
    "Gujarat",
    "Rajasthan",
    "Punjab",
    "Haryana",
    "Karnataka",
    "Tamil Nadu",
    "Kerala",
    "West Bengal",
    "Uttar Pradesh",
  ];
  return randomValueFromArray(states);
}
