import { FastifyInstance, FastifyPluginOptions } from "fastify";
import healthRoutes from "./health.ts";
// import questRoutes from "./quests.ts";

export default async function routes(fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify.register(healthRoutes);
  //   fastify.register(questRoutes);
}
