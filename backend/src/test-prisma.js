const { PrismaClient } = require("./generated/prisma");

const prisma = new PrismaClient();

async function main() {
  const forms = await prisma.form.findMany();
  console.log("Forms:", forms);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
