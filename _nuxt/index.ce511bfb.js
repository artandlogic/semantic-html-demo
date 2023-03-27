import{f as l,h as a,s as t,o as e,b as p,e as o,t as r,u as c,F as i,i as n,j as g}from"./entry.157a0527.js";const y=o("p",null,[n(" This page uses "),o("a",{href:"https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html"},"semantic"),n(" sequentially-readable HTML, while also offering several dramatically-different visual presentations. This has the advantages of being "),o("ol",null,[o("li",null,"accessible to screen readers,"),o("li",null,"readable and maintanable, and"),o("li",null,"capable of being styled into many different layouts.")])],-1),d=g(`<p> The HTML of this document looks like this (with a few minor omissions): </p><div style="background:#f8f8f8;overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><table><tr><td><pre style="margin:0;line-height:125%;"> 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39</pre></td><td><pre style="margin:0;line-height:125%;"><span style="color:#008000;font-weight:bold;">&lt;div</span> <span style="color:#7D9029;">class=</span><span style="color:#BA2121;">&quot;app app--document&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>
  <span style="color:#008000;font-weight:bold;">&lt;header&gt;</span>
    <span style="color:#008000;font-weight:bold;">&lt;h1</span> <span style="color:#7D9029;">class=</span><span style="color:#BA2121;">&quot;header__title&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>
      <span style="color:#008000;font-weight:bold;">&lt;a</span> <span style="color:#7D9029;">href=</span><span style="color:#BA2121;">&quot;/&quot;</span> <span style="color:#7D9029;">aria-current=</span><span style="color:#BA2121;">&quot;page&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>Semantic HTML Demo<span style="color:#008000;font-weight:bold;">&lt;/a&gt;</span>
    <span style="color:#008000;font-weight:bold;">&lt;/h1&gt;</span>
    <span style="color:#008000;font-weight:bold;">&lt;h2</span> <span style="color:#7D9029;">class=</span><span style="color:#BA2121;">&quot;header__subtitle&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>One page, many layouts<span style="color:#008000;font-weight:bold;">&lt;/h2&gt;</span>
  <span style="color:#008000;font-weight:bold;">&lt;/header&gt;</span>
  <span style="color:#008000;font-weight:bold;">&lt;aside</span> <span style="color:#7D9029;">class=</span><span style="color:#BA2121;">&quot;navbar&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>
    <span style="color:#008000;font-weight:bold;">&lt;a</span> <span style="color:#7D9029;">href=</span><span style="color:#BA2121;">&quot;/&quot;</span> <span style="color:#7D9029;">class=</span><span style="color:#BA2121;">&quot;navbar__logo-link&quot;</span> <span style="color:#7D9029;">aria-current=</span><span style="color:#BA2121;">&quot;page&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>
      <span style="color:#008000;font-weight:bold;">&lt;img</span> <span style="color:#7D9029;">class=</span><span style="color:#BA2121;">&quot;navbar__logo&quot;</span> <span style="color:#7D9029;">alt=</span><span style="color:#BA2121;">&quot;Company logo&quot;</span> <span style="color:#7D9029;">src=</span><span style="color:#BA2121;">&quot;/images/logo.png&quot;</span><span style="color:#008000;font-weight:bold;">/&gt;</span>
    <span style="color:#008000;font-weight:bold;">&lt;/a&gt;</span>
    <span style="color:#008000;font-weight:bold;">&lt;nav</span> <span style="color:#7D9029;">class=</span><span style="color:#BA2121;">&quot;navbar__nav&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>
      <span style="color:#008000;font-weight:bold;">&lt;ul&gt;</span>
        <span style="color:#008000;font-weight:bold;">&lt;li</span> <span style="color:#7D9029;">class=</span><span style="color:#BA2121;">&quot;nav__item nav__item--about&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>
          <span style="color:#008000;font-weight:bold;">&lt;a</span> <span style="color:#7D9029;">href=</span><span style="color:#BA2121;">&quot;/about&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>About us<span style="color:#008000;font-weight:bold;">&lt;/a&gt;</span>
        <span style="color:#008000;font-weight:bold;">&lt;/li&gt;</span>
        <span style="color:#008000;font-weight:bold;">&lt;li</span> <span style="color:#7D9029;">class=</span><span style="color:#BA2121;">&quot;nav__item nav__item--services&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>
          <span style="color:#008000;font-weight:bold;">&lt;a</span> <span style="color:#7D9029;">href=</span><span style="color:#BA2121;">&quot;/services&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>Services<span style="color:#008000;font-weight:bold;">&lt;/a&gt;</span>
        <span style="color:#008000;font-weight:bold;">&lt;/li&gt;</span>
        <span style="color:#008000;font-weight:bold;">&lt;li</span> <span style="color:#7D9029;">class=</span><span style="color:#BA2121;">&quot;nav__item nav__item--careers&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>
          <span style="color:#008000;font-weight:bold;">&lt;a</span> <span style="color:#7D9029;">href=</span><span style="color:#BA2121;">&quot;/careers&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>Careers<span style="color:#008000;font-weight:bold;">&lt;/a&gt;</span>
        <span style="color:#008000;font-weight:bold;">&lt;/li&gt;</span>
        <span style="color:#008000;font-weight:bold;">&lt;li</span> <span style="color:#7D9029;">class=</span><span style="color:#BA2121;">&quot;nav__item nav__item--contact&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>
          <span style="color:#008000;font-weight:bold;">&lt;a</span> <span style="color:#7D9029;">href=</span><span style="color:#BA2121;">&quot;/contact&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>Contact<span style="color:#008000;font-weight:bold;">&lt;/a&gt;</span>
        <span style="color:#008000;font-weight:bold;">&lt;/li&gt;</span>
      <span style="color:#008000;font-weight:bold;">&lt;/ul&gt;</span>
    <span style="color:#008000;font-weight:bold;">&lt;/nav&gt;</span>
    <span style="color:#008000;font-weight:bold;">&lt;form</span> <span style="color:#7D9029;">class=</span><span style="color:#BA2121;">&quot;form-options navbar__form-options&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>
      <span style="color:#008000;font-weight:bold;">&lt;label</span> <span style="color:#7D9029;">for=</span><span style="color:#BA2121;">&quot;form-options__select-style&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>Style:<span style="color:#008000;font-weight:bold;">&lt;/label&gt;</span>
      <span style="color:#008000;font-weight:bold;">&lt;select</span> <span style="color:#7D9029;">id=</span><span style="color:#BA2121;">&quot;form-options__select-style&quot;</span> <span style="color:#7D9029;">value=</span><span style="color:#BA2121;">&quot;document&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>
        <span style="color:#008000;font-weight:bold;">&lt;option</span> <span style="color:#7D9029;">value=</span><span style="color:#BA2121;">&quot;document&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>Document<span style="color:#008000;font-weight:bold;">&lt;/option&gt;</span>
        <span style="color:#008000;font-weight:bold;">&lt;option</span> <span style="color:#7D9029;">value=</span><span style="color:#BA2121;">&quot;desktop&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>Desktop<span style="color:#008000;font-weight:bold;">&lt;/option&gt;</span>
        <span style="color:#008000;font-weight:bold;">&lt;option</span> <span style="color:#7D9029;">value=</span><span style="color:#BA2121;">&quot;mobile&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>Mobile<span style="color:#008000;font-weight:bold;">&lt;/option&gt;</span>
      <span style="color:#008000;font-weight:bold;">&lt;/select&gt;</span>
    <span style="color:#008000;font-weight:bold;">&lt;/form&gt;</span>
  <span style="color:#008000;font-weight:bold;">&lt;/aside&gt;</span>
  <span style="color:#008000;font-weight:bold;">&lt;main</span> <span style="color:#7D9029;">class=</span><span style="color:#BA2121;">&quot;main&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>(Page content goes here)<span style="color:#008000;font-weight:bold;">&lt;/main&gt;</span>
  <span style="color:#008000;font-weight:bold;">&lt;footer</span> <span style="color:#7D9029;">class=</span><span style="color:#BA2121;">&quot;footer&quot;</span><span style="color:#008000;font-weight:bold;">&gt;</span>© 2023 Art+Logic, Inc.<span style="color:#008000;font-weight:bold;">&lt;/footer&gt;</span>
<span style="color:#008000;font-weight:bold;">&lt;/div&gt;</span>
</pre></td></tr></table></div>`,2),w=l({__name:"index",setup(h){const s=a(()=>{if(t.value==="document")return"in the sidebar on the right";if(t.value==="desktop")return"in the sidebar on the left";if(t.value==="mobile")return"in the navbar dropdown at the top-right"});return(f,u)=>(e(),p(i,null,[y,o("p",null,' Use the "style" dropdown (located '+r(c(s))+") to change page styles. ",1),d],64))}});export{w as default};
