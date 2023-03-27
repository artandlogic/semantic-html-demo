// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                { rel: "icon", type: "image/x-icon", href: "/images/logo.png" },
            ],
        },
    },
    postcss: {
        plugins: {
            "postcss-nesting": {},
        },
    },
    typescript: { shim: false },
    vite: {
        optimizeDeps: {
            exclude: ["@highlightjs/vue-plugin"],
        },
    },
});
