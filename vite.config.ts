import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { 
      entry: "server" 
    },
  },
  // Overriding the underlying Nitro engine to compile serverless functions for Vercel
  vite: {
    nitro: {
      preset: "vercel"
    }
  }
});