import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schema";
import { getUserByEmail } from "./data/user";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Credentials({
      async authorize(credentials, req) {
        const ValidatedFields = LoginSchema.safeParse(credentials);

        if (!ValidatedFields.success) {
          return null;
        }

        const { email, password } = ValidatedFields.data;

        const user = await getUserByEmail(email);
        const comparePassword = await bcrypt.compare(
          password,
          user?.password || ""
        );

        if (!user || !comparePassword) {
          return null;
        }

        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
