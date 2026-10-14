import { resolve } from "node:path"
import { defineConfig } from "vite"
import glsl from "vite-plugin-glsl"

export default defineConfig(({ mode }) => {
    const PRODUCTION = mode === "production"
    return {
        // relative URLs so the build works from any sub-directory
        base: "./",

        plugins: [
            // import .glsl/.frag/.vert files as strings, with #include support
            glsl({ minify: PRODUCTION })
        ],

        define: {
            __PROD: JSON.stringify(PRODUCTION),
            __DEV: JSON.stringify(!PRODUCTION),
            __STATS: JSON.stringify(!!process.env.STATS)
        },

        build: {
            outDir: "docs",
            emptyOutDir: true,
            sourcemap: true,
            rolldownOptions: {
                input: {
                    main: resolve(import.meta.dirname, "index.html"),
                    test: resolve(import.meta.dirname, "test.html")
                }
            }
        }
    }
})
