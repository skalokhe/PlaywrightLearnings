import { expect, request } from "@playwright/test";

export async function registerUser(email: string, password: string) {
  const apiURL = process.env.API_URL;
  const createReqContext = await request.newContext();

  const response= await createReqContext.post(apiURL + "/users/register", {
    data: {
      first_name: "sonal45",
      last_name: "test",
      dob: "1999-09-09",
      phone: "9876543210",
      email: email,
      password: password,
      address: {
        street: "34 rsdgt",
        city: "dfgdg",
        state: "mh",
        country: "IN",
        postal_code: "457",
      },
    },
  });
  expect(response.status()).toBe(201);

  return response.status
}
