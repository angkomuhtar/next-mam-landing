import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcryptjs";

async function main() {
  const hashedPassword = await bcrypt.hash("mam123", 10);
  await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@mitraabadimahakam.id",
      password: hashedPassword,
    },
  });
}

main()
  .then(() => {
    console.log("Seeding selesai!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
