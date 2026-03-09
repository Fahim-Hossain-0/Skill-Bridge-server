import app from "./app";
import { prisma } from "./lib/prisma";

const PORT = process.env.PORT;

const main = async () => {
  try {
    await prisma.$connect();
    console.log("connect ok");

    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });


  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
  }
};

main();