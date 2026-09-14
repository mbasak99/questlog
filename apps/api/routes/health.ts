import { FastifyInstance, FastifyPluginOptions } from "fastify";

export default async function healthRoutes(fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify.get("/health", async (_request, _reply) => {
    return { status: "ok", uptime: process.uptime() };
  });
}
