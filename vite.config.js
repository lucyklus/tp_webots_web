import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import fs from 'fs';

export default defineConfig({
  plugins: [
    tailwindcss(),
    ViteEjsPlugin({
      records: JSON.parse(fs.readFileSync('./src/config/documents.json')),
    }),
  ],
});
