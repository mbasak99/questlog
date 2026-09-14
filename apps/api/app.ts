import Fastify from "fastify";
import routes from "./routes/index.ts";

export function buildApp(opts = {}) {
  const app = Fastify({ ...opts, logger: true });

  //   register plugins, hooks, decorators here

  //   routes
  app.register(routes);

  return app;
}
