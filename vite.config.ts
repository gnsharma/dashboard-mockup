import { defineConfig } from "vite";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

import react from "@vitejs/plugin-react";
import vitePluginImportus from "vite-plugin-importus";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  plugins: [
    react(),
    vitePluginImportus([
      {
        libraryName: "@mui/material",
        camel2DashComponentName: false,
        customName: (formattedName) => {
          if (
            ["styled", "createTheme", "ThemeProvider", "useTheme"].includes(
              formattedName
            )
          ) {
            return `@mui/material/styles/${formattedName}`;
          }
          return `@mui/material/${formattedName}`;
        },
      },
      {
        libraryName: "@mui/icons-material",
        camel2DashComponentName: false,
        customName: (formattedName) => {
          return `@mui/icons-material/${formattedName}`;
        },
      },
      {
        libraryName: "@mui/lab",
        camel2DashComponentName: false,
        customName: (formattedName) => {
          return `@mui/lab/${formattedName}`;
        },
      },
    ]),
  ],
  resolve: {
    alias: { src: resolve(__dirname, "src") },
  },
});
