import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
// import { nitro } from "nitro/vite";
import tailwindcss from "@tailwindcss/vite"; 

export default defineConfig({
  plugins: [
    tailwindcss(), 
    tsconfigPaths(),
    tanstackStart({
      server: {
        entry: "src/server.ts",
      },
    }),
    // nitro(),
    viteReact(),
  ],
});