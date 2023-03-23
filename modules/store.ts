import { ref } from "vue";

export type Style = "document" | "desktop" | "mobile";

export const selectedStyle: Ref<Style> = ref("document");
