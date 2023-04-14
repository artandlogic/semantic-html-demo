<template>
    <div :class="['app', `app--${selectedStyle}`]">
        <header>
            <h1 class="header__title">
                <NuxtLink to="/">Semantic HTML Demo</NuxtLink>
            </h1>
            <h2 class="header__subtitle">One page, many layouts</h2>
        </header>
        <aside class="navbar">
            <NuxtLink class="navbar__logo-link" to="/">
                <img
                    class="navbar__logo"
                    alt="Company logo"
                    src="/images/logo.png"
                />
            </NuxtLink>
            <nav
                class="navbar__nav"
                :tabindex="selectedStyle === 'mobile' ? 0 : undefined"
                :aria-expanded="
                    selectedStyle === 'mobile' ? navExpanded : undefined
                "
                @mouseover="navExpanded = true"
                @mouseleave="navExpanded = false"
            >
                <ul>
                    <li class="nav__item nav__item--about">
                        <NuxtLink to="/about">About us</NuxtLink>
                    </li>
                    <li class="nav__item nav__item--services">
                        <NuxtLink to="/services">Services</NuxtLink>
                    </li>
                    <li class="nav__item nav__item--careers">
                        <NuxtLink to="/careers">Careers</NuxtLink>
                    </li>
                    <li class="nav__item nav__item--contact">
                        <NuxtLink to="/contact">Contact</NuxtLink>
                    </li>
                </ul>
            </nav>
            <StyleDropdown
                class="navbar__form-options"
                v-model="selectedStyle"
            />
        </aside>
        <main>
            <NuxtPage />
        </main>
        <footer>© 2023 Art+Logic, Inc.</footer>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

import StyleDropdown from "@/components/StyleDropdown.vue";
import { selectedStyle } from "@/modules/store";

import "@/assets/css/app.css";

const navExpanded: Ref<boolean> = ref(false);
</script>
<style lang="postcss" scoped>
/*
 * Common styles
 */

.app {
    height: 100vh;
    max-height: 100%;
}

.app header {
    grid-area: header;
}
.app .navbar {
    grid-area: navbar;
}
.app main {
    grid-area: main;
}
.app footer {
    grid-area: footer;
}

header a {
    text-decoration: none;
}

nav ul {
    padding: 0;
}
nav .nav__item {
    display: block;
}

/*
 * Styles for the "document" page style
 */

.app--document {
    padding-left: max(0px, calc(calc(100vw - 768px) / 2));
    padding-right: max(0px, calc(calc(100vw - 768px) / 2));
    background-color: var(--color-brand-white);

    & header,
    & main,
    & footer {
        background-color: var(--color-brand-light);
    }

    & header {
        padding: 16px 32px;
    }

    & .navbar {
        float: right;
        margin: 16px 32px 16px 16px;
        padding: 16px;
        background-color: var(--color-brand-dark);
        color: var(--color-white);
        border-radius: 8px;
    }
    & .navbar__logo {
        display: none;
    }
    & nav {
        margin-bottom: 16px;
    }

    & main {
        min-height: 192px;
        padding: 16px 32px;
    }

    & footer {
        padding: 8px 32px;
        text-align: center;
    }
}

/*
 * Styles for the "desktop" page style
 */

.app--desktop {
    display: grid;
    grid:
        "header main" auto
        "navbar main" 1fr
        "footer main" auto
        / 288px 1fr;
    min-width: 768px;
    max-width: 1536px;
    margin: 0 auto;

    & header,
    & .navbar,
    & footer {
        background-color: var(--color-brand-dark);
    }

    & header {
        padding: 16px 32px;
    }
    & header a {
        color: var(--color-white);
    }
    & .header__title {
        font-size: 20px;
    }
    & .header__subtitle {
        font-size: 16px;
        color: var(--color-white);
    }

    & .navbar .navbar__logo {
        width: calc(288px - 2 * 32px);
        margin: 16px auto 32px;
        border-radius: 50%;
    }
    & .form-options {
        padding: 16px 16px 0;
        color: var(--color-white);
    }
    & nav .nav__item {
        padding: 4px 16px;
    }
    & nav .nav__item a {
        display: block;
        padding-left: 64px;
        color: var(--color-black);
        background-color: var(--color-brand-secondary);
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
        border-radius: 8px;

        &:hover {
            filter: brightness(125%);
        }
    }
    & nav .nav__item a::before {
        display: inline-block;
        content: " ";
        width: 20px;
        height: 20px;
        margin: 0 8px -2px 0;
        background-position: center;
        background-repeat: no-repeat;
    }
    & nav .nav__item--about a::before {
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48cGF0aCBkPSJNNjQgMzJDMjguNyAzMiAwIDYwLjcgMCA5NlY0MTZjMCAzNS4zIDI4LjcgNjQgNjQgNjRINTEyYzM1LjMgMCA2NC0yOC43IDY0LTY0Vjk2YzAtMzUuMy0yOC43LTY0LTY0LTY0SDY0em04MCAyNTZoNjRjNDQuMiAwIDgwIDM1LjggODAgODBjMCA4LjgtNy4yIDE2LTE2IDE2SDgwYy04LjggMC0xNi03LjItMTYtMTZjMC00NC4yIDM1LjgtODAgODAtODB6bS0zMi05NmE2NCA2NCAwIDEgMSAxMjggMCA2NCA2NCAwIDEgMSAtMTI4IDB6bTI1Ni0zMkg0OTZjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTZIMzY4Yy04LjggMC0xNi03LjItMTYtMTZzNy4yLTE2IDE2LTE2em0wIDY0SDQ5NmM4LjggMCAxNiA3LjIgMTYgMTZzLTcuMiAxNi0xNiAxNkgzNjhjLTguOCAwLTE2LTcuMi0xNi0xNnM3LjItMTYgMTYtMTZ6bTAgNjRINDk2YzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2SDM2OGMtOC44IDAtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNnoiLz48L3N2Zz4=");
    }
    & nav .nav__item--services a::before {
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48cGF0aCBkPSJNMzE2LjkgMThDMzExLjYgNyAzMDAuNCAwIDI4OC4xIDBzLTIzLjQgNy0yOC44IDE4TDE5NSAxNTAuMyA1MS40IDE3MS41Yy0xMiAxLjgtMjIgMTAuMi0yNS43IDIxLjdzLS43IDI0LjIgNy45IDMyLjdMMTM3LjggMzI5IDExMy4yIDQ3NC43Yy0yIDEyIDMgMjQuMiAxMi45IDMxLjNzMjMgOCAzMy44IDIuM2wxMjguMy02OC41IDEyOC4zIDY4LjVjMTAuOCA1LjcgMjMuOSA0LjkgMzMuOC0yLjNzMTQuOS0xOS4zIDEyLjktMzEuM0w0MzguNSAzMjkgNTQyLjcgMjI1LjljOC42LTguNSAxMS43LTIxLjIgNy45LTMyLjdzLTEzLjctMTkuOS0yNS43LTIxLjdMMzgxLjIgMTUwLjMgMzE2LjkgMTh6Ii8+PC9zdmc+");
    }
    & nav .nav__item--careers a::before {
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBkPSJNMjI0IDI1NkExMjggMTI4IDAgMSAxIDIyNCAwYTEyOCAxMjggMCAxIDEgMCAyNTZ6TTIwOS4xIDM1OS4ybC0xOC42LTMxYy02LjQtMTAuNyAxLjMtMjQuMiAxMy43LTI0LjJIMjI0aDE5LjdjMTIuNCAwIDIwLjEgMTMuNiAxMy43IDI0LjJsLTE4LjYgMzEgMzMuNCAxMjMuOSAzNi0xNDYuOWMyLTguMSA5LjgtMTMuNCAxNy45LTExLjNjNzAuMSAxNy42IDEyMS45IDgxIDEyMS45IDE1Ni40YzAgMTctMTMuOCAzMC43LTMwLjcgMzAuN0gyODUuNWMtMi4xIDAtNC0uNC01LjgtMS4xbC4zIDEuMUgxNjhsLjMtMS4xYy0xLjggLjctMy44IDEuMS01LjggMS4xSDMwLjdDMTMuOCA1MTIgMCA0OTguMiAwIDQ4MS4zYzAtNzUuNSA1MS45LTEzOC45IDEyMS45LTE1Ni40YzguMS0yIDE1LjkgMy4zIDE3LjkgMTEuM2wzNiAxNDYuOSAzMy40LTEyMy45eiIvPjwvc3ZnPg==");
    }
    & nav .nav__item--contact a::before {
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNNDggNjRDMjEuNSA2NCAwIDg1LjUgMCAxMTJjMCAxNS4xIDcuMSAyOS4zIDE5LjIgMzguNEwyMzYuOCAzMTMuNmMxMS40IDguNSAyNyA4LjUgMzguNCAwTDQ5Mi44IDE1MC40YzEyLjEtOS4xIDE5LjItMjMuMyAxOS4yLTM4LjRjMC0yNi41LTIxLjUtNDgtNDgtNDhINDh6TTAgMTc2VjM4NGMwIDM1LjMgMjguNyA2NCA2NCA2NEg0NDhjMzUuMyAwIDY0LTI4LjcgNjQtNjRWMTc2TDI5NC40IDMzOS4yYy0yMi44IDE3LjEtNTQgMTcuMS03Ni44IDBMMCAxNzZ6Ii8+PC9zdmc+");
    }

    & main {
        padding: 64px;
        overflow: auto;
        background-color: var(--color-brand-light);
    }

    & footer {
        color: var(--color-white);
        text-align: center;
    }
}

/*
 * Styles for the "mobile" page style
 */

.app--mobile {
    display: grid;
    grid:
        "logo header header nav" 64px
        "main main main main" 1fr
        "footer footer style style" auto
        / auto 1fr auto auto;
    position: relative;
    max-width: 400px;
    max-height: 850px;
    margin: 0 auto;

    & header,
    & .navbar,
    & .navbar__logo-link,
    & .navbar__nav {
        background-color: var(--color-brand-dark);
    }

    & header {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    & .header__title {
        font-size: 20px;
        line-height: 1.25;
    }
    & .header__subtitle {
        font-size: 12px;
        line-height: 1.25;
        color: var(--color-white);
    }

    & .navbar {
        display: contents;
    }
    & .navbar__logo-link {
        grid-area: logo;
    }
    & .navbar__nav {
        grid-area: nav;
        width: 48px;
        height: 100%;
        cursor: pointer;
        background-size: 16px;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48cGF0aCBmaWxsPSIjZjBmMGYwIiBkPSJNMTM3LjQgMzc0LjZjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBsMTI4LTEyOGM5LjItOS4yIDExLjktMjIuOSA2LjktMzQuOXMtMTYuNi0xOS44LTI5LjYtMTkuOEwzMiAxOTJjLTEyLjkgMC0yNC42IDcuOC0yOS42IDE5LjhzLTIuMiAyNS43IDYuOSAzNC45bDEyOCAxMjh6Ii8+PC9zdmc+");
    }
    & .navbar__form-options {
        grid-area: style;
        padding: 4px 16px;
        font-size: 12px;
        background-color: var(--color-brand-light);
    }
    & .navbar__form-options label {
        padding-right: 4px;
    }
    & .navbar__nav ul {
        visibility: hidden;
        position: absolute;
        top: 64px;
        right: 0;
        width: 96px;
        background-color: var(--color-brand-dark);
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;

        .navbar__nav:hover &,
        .navbar__nav:focus-within &,
        &:hover {
            visibility: visible;
        }
    }
    & .navbar .navbar__logo {
        width: 48px;
        margin: 8px;
        border-radius: 50%;
    }
    & .nav__item {
        padding: 4px 16px;
    }
    & .nav__item a {
        text-decoration: none;

        &:hover {
            filter: brightness(125%);
        }
    }

    & main,
    & footer {
        background-color: var(--color-brand-light);
    }

    & main {
        overflow-y: auto;
        padding: 16px;
    }

    & footer {
        padding: 4px 16px;
        font-size: 10px;
        text-align: center;
    }
}
</style>
