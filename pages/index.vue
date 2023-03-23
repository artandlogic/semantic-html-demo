<template>
    <p>
        This page uses
        <a
            href="https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html"
            >semantic</a
        > sequentially-readable HTML, while also offering several
        dramatically-different visual presentations. This has the advantages of being
        <ol>
            <li>accessible to screen readers,</li>
            <li>readable and maintanable, and</li>
            <li>capable of being styled into many different layouts.</li>
        </ol>
    </p>
    <p>
        Use the "style" dropdown
        (located {{styleDropdownLocation}}) to change page styles.
    </p>
    <p>
        The HTML of this document looks like this (with a few minor omissions):
    </p>
    <highlightjs language="html" :code="pageHtml" />
</template>
<script setup lang="ts">
import {computed} from 'vue';

import {selectedStyle} from '@/modules/store';

const pageHtml: string = `<div class="app app--document">
  <header>
    <h1 class="header__title">
      <a href="/" aria-current="page">Semantic HTML Demo</a>
    </h1>
    <h2 class="header__subtitle">One page, many layouts</h2>
  </header>
  <aside class="navbar">
    <a href="/" class="navbar__logo-link" aria-current="page"
      ><img class="navbar__logo" alt="Company logo" src="/images/logo.png"
    /></a>
    <nav class="navbar__nav">
      <ul>
        <li class="nav__item nav__item--about">
          <a href="/about">About us</a>
        </li>
        <li class="nav__item nav__item--services">
          <a href="/services">Services</a>
        </li>
        <li class="nav__item nav__item--careers">
          <a href="/careers">Careers</a>
        </li>
        <li class="nav__item nav__item--contact">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
    <form class="form-options navbar__form-options">
      <label for="form-options__select-style">Style:</label>
      <select id="form-options__select-style" value="document">
        <option value="document">Document</option>
        <option value="desktop">Desktop</option>
        <option value="mobile">Mobile</option>
      </select>
    </form>
  </aside>
  <main class="main">(Page content goes here)</main>
  <footer class="footer">© 2023 Art+Logic, Inc.</footer>
</div>`;
const styleDropdownLocation = computed(() => {
    if (selectedStyle.value === 'document') {
        return "in the sidebar on the right";
    }
    if (selectedStyle.value === 'desktop') {
        return "in the sidebar on the left";
    }
    if (selectedStyle.value === 'mobile') {
        return "in the navbar dropdown at the top-right";
    }
});
</script>
