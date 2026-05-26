import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import vercel from "vite-plugin-vercel";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackStart({
      server: {
        entry: "src/server.ts",
      },
    }),
    viteReact(),
    vercel(),
  ],
});