<template>
    <form class="form-options">
        <label for="form-options__select-style">Style:</label>
        <select
            id="form-options__select-style"
            :value="modelValue"
            @change="(e) => $emit('update:modelValue', (e.target as HTMLSelectElement).value)"
        >
            <option value="document">Document</option>
            <option value="desktop">Desktop</option>
            <option value="mobile">Mobile</option>
        </select>
    </form>
</template>
<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

import { Style } from "@/modules/store";

withDefaults(
    defineProps<{
        modelValue: Style;
    }>(),
    { modelValue: "document" }
);
</script>
<style lang="postcss" scoped>
.form-options label {
    padding-right: 8px;
}
</style>
