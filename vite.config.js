import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
// import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        // react({
        //     compiler: true, // ✅ Kích hoạt React Compiler!
        // }),
        laravel({
            input: ["resources/css/app.css", "resources/js/app.jsx"],
            refresh: true,
        }),
        tailwindcss(),
    ],
    server: {
        host: "192.168.1.104",
        port: 5173,
        hmr: {
            host: "192.168.1.104",
        },
    },
});
