import { db } from "@/lib/db";

export async function getUserByEmail(email: string) {
  try {
    return db.user.findUnique({
      where: { email: email },
    });
  } catch (error) {
    return null;
  }
}

export const getUserById = async (id: string) => {
  try {
    return db.user.findUnique({
      where: { id },
    });
  } catch (error) {
    return null;
  }
};
