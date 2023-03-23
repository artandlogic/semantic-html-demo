import hljsXml from "highlight.js/lib/languages/xml";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import hljs from "highlight.js/lib/core";

import "highlight.js/styles/default.css";

export default defineNuxtPlugin((nuxtApp) => {
    hljs.registerLanguage("html", hljsXml);
    nuxtApp.vueApp.use(hljsVuePlugin);
});
