import { buildApp } from "./app.ts";

const app = buildApp();
const PORT = Number(process.env.PORT) || 3000;

app.listen({ port: PORT }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
