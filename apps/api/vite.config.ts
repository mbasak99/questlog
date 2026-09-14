import { defineConfig } from "vite-plus";

export default defineConfig({
  run: {
    tasks: {
      "dev:api": {
        command: "tsx watch ./server.ts",
        cache: false,
      },
    },
  },
});
