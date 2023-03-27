// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: "/semantic-html-demo/",
        cdnURL: "https://artandlogic.github.io/semantic-html-demo/",
        head: {
            link: [
                { rel: "icon", type: "image/x-icon", href: "/images/logo.png" },
            ],
            title: "Semantic HTML Demo",
        },
    },
    postcss: {
        plugins: {
            "postcss-nesting": {},
        },
    },
    ssr: false,
    typescript: { shim: false },
    vite: {
        optimizeDeps: {
            exclude: ["@highlightjs/vue-plugin"],
        },
    },
});
