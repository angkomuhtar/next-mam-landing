"use server";

import { signIn } from "@/auth";
import { LoginSchema } from "@/schema";
import { AuthError } from "next-auth";
import * as z from "zod";

export async function loginAction(data: z.infer<typeof LoginSchema>) {
  const ValidatedFields = LoginSchema.safeParse(data);

  if (!ValidatedFields.success) {
    return { success: false, message: "invalidate fileds!" };
  }

  const { email, password } = ValidatedFields.data;

  try {
    await signIn("credentials", {
      redirect: true,
      email,
      password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { success: false, message: "Invalid email or password" };
        default:
          return { success: false, message: "An unknown error occurred" };
      }
    }
    throw error;
  }

  return { success: true, message: "Login success" };
}
